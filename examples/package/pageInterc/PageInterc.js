const app = getApp()
import BasePage from "../class/BasePage";
export default class PageInterc extends BasePage{
  constructor(...args) {
    super(...args);
    super.$init({
    });
    this.prePageConfig = {
      reLogin: false,
      checkSession: true
    }
  }

  /**
   * 设置页面拦截参数
   * @param config
   */
  _setPageInterc(config) {
    this.prePageConfig = Object.assign(this.prePageConfig, config);
  }

  /**
   * 预加载方法
   * @param this    实例对象
   * @param proto    原型对象
   *
   */
  preLoad(proto, query, resolve, reject){
    var self = this;
    self._pageCheck(proto.data, self.prePageConfig).then(function (initData) {
      (proto.preShow||self.preShow).call(proto, query, initData, resolve, reject)
    }).catch(e => {
      //(proto.preError||self.preError).call(self, query, e, resolve, reject)
      if (e.code && (e.code == 1001 || e.code == 1002) && self.data._needRegister){
        (proto.preShow||self.preShow).call(proto, query, {}, resolve, reject)
      } else {
        (proto.preError||self.preError).call(self, query, e, resolve, reject)
      }
    });
  }

  /**
   * 初始化成功
   * @param query     传参
   * @param initData  系统参数
   * @param resolve
   * @param reject
   */
  preShow(query, initData, resolve, reject) {}

  /**
   * 初始化失败
   * @param e         失败参数
   */
  preError(query, e) {
    if (e.code && (e.code == 1001 || e.code == 1002) && this.data._needSession){
      this.toRegisterPage();
    }
  }

  /**
   * 获取系统全局数据
   * @returns {{userInfo: any | string | wx.UserInfo | null | any | string | {} | ComponentPopupPanel.properties.userInfo, unionId: any | string | any | string | {}, openId: any | string | (string & null) | (string & {}) | (null & string) | (null & {}) | ({} & string) | ({} & null) | {}}}
   * @private
   */
  _getStorage() {
    let storage = {
      openId: wx.getStorageSync('openId') || app.globalData.openId,
      unionId: wx.getStorageSync('unionId') || app.globalData.unionId,
      userInfo: wx.getStorageSync('userInfo') || app.globalData.userInfo
    }
    app.globalData = Object.assign(app.globalData, storage);
    return storage;
  }

  /**
   * 保存系统全局数据
   * @param info
   * @private
   */
  _setStorage(info) {}

  /**
   *  系统session检测出口
   * @param param
   * @param preConfig
   * @returns {Promise<any>}
   * @private
   */
  _pageCheck(param, preConfig){
    let self = this;
    return new Promise((resolve, reject) => {
      self._interceptor(param, preConfig).then(data => {
        let localStorage = self._getStorage();
        self._pageIntercSuccess(param, preConfig).then(res => {
          localStorage = Object.assign(localStorage, data, res);
          resolve(localStorage);
        }).catch(e => {
          reject(e);
        })
      }).catch(e => {
        self._getStorage();
        reject(e);
      })
    })
  }

  /**
   * 系统session检测出口
   * @param param
   * @param preConfig
   * @returns {Promise<any>}
   * @private
   */
  _interceptor(param, preConfig) {
    var self = this;
    var userInfo = wx.getStorageSync('userInfo') || {};
    if (!param._needSession){
      return new Promise((resolve, reject) => {
        resolve();
      })
    } else {
      if (userInfo && userInfo.sessionId && !preConfig.reLogin){
        return new Promise((resolve, reject) => {
          if (preConfig.checkSession) {
            self._isSessionTimeout(userInfo.sessionId).then(function(res){
              resolve();
            }).catch(function(e) {
              self._wxLogin(param).then(data => {
                resolve(data);
              }).catch(error => {
                reject(error);
              });
            });
          } else {
            resolve();
          }
        })
      } else {
        return self._wxLogin(param);
      }
    }
  }

  /**
   * 判断session是否过期
   */
  _isSessionTimeout = function(sessionId){
    var self = this;
    return new Promise(function(resolve, reject){
      var param = {
        sessionId: sessionId,
        reload: true
      };
      self.$getSession(param, {hiddenError: true}).then(function(res){
        if (res.result) {
          self._setStorage(res);
          resolve();
        } else {
          console.log('getSession RESULT fail', res);
          reject({
            code: 1004,
            e: res
          });
        }
      }).catch(function(e){
        console.log('getSession API fail', e);
        reject({
          code: 1003,
          e: e
        });
      });
    })
  }

  /**
   * 微信登陆
   * @param param
   * @returns {Promise<any | never>}
   */
  _wxLogin(param) {
    let self = this;
    return self.$wx_login(param).then((data) => {
      return self._sysLogin(data);
    })
  }

  /**
   * 系统登陆
   * @param param
   * @returns {Promise<any>}
   */
  _sysLogin(param) {
    let self = this;
    return new Promise((resolve, reject) => {
      self.$wechatLogin({
        code: param.code,
        key: 'luck'
      }).then(function(res){
        if (res.openId) wx.setStorageSync('openId', res.openId);
        if (res.unionId) wx.setStorageSync('unionId', res.unionId);
        if (res.sessionKey) wx.setStorageSync('sessionKey', res.sessionKey);
        self._setStorage(res);
        if (!res.sessionId) {
          console.log('wechatLogin sessionId is null');
          reject({
            code: 1002,
            e: res
          });
        }
        else {
          resolve(res);
        }
      }).catch(e => {
        console.log('wechatLogin fail', e);
        reject({
          code: 1001,
          e: e
        });
      })
    })
  }

  /**
   * 页面check成功后调用
   * @param param
   * @param preConfig
   * @returns {Promise<any>}
   * @private
   */
  _pageIntercSuccess(param, preConfig) {
    return new Promise((resolve, reject) => {
      resolve();
    })
  }
}
