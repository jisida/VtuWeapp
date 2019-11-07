const app = getApp();
import utils from '../utils/Utils'
import sysConfig from '../../config/Config'
import regeneratorRuntime from '../lib/regenerator-runtime/runtime.js'
export default class Axios {
  constructor() { }
  baseUrl = sysConfig.httpUrl;
  config = {
    header: {
      "Content-Type": "application/json"
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    _opt: {
      loading: true
    }
  }

  /**
   *
   * @param config
   */
  create(config){
    this.config = Object.assign(this.config, config);
  }

  /**
   *
   * @type {{request(*): *, response(*): *}}
   */
  interceptors = {
    async request(config){
      return new Promise((resolve, reject) => {
        if (app.globalData.userInfo && app.globalData.userInfo.sessionId) {
          config.data.sessionId = app.globalData.userInfo.sessionId;
        }
        resolve(config)
      })
    },
    response: {
      success(res){
        return new Promise((resolve, reject) => {
          resolve(res);
        }).catch(e => {
          reject(e)
        })
      },
      error(e){
        return new Promise((resolve, reject) => {
          resolve(res);
        }).catch(e => {
          reject(e)
        })
      }
    }
  }

  /**
   *
   * @param data
   * @returns {Promise<any>}
   */
  async request(data, upload = false) {
    let self = this;
    let apiStartTime = new Date().getTime();
    let config = Object.assign(this.config, data);
    try {
      if (config._opts.confirm) {
        try {
          await this.beforeConfirm(config);
        } catch(e) {
          return new Promise((resolve, reject) => {
            reject()
          })
        }
      }
      config = await this.interceptors.request(config)
      this.componentStart(config);
      if (!config) {
        wx.hideLoading();
        return new Promise((resolve, reject) => {
          reject()
        })
      }
      return new Promise((resolve, reject) => {
        let api = config.url;
        config.url = self.baseUrl + config.url;
        config.success = function (res) {
          self.componentEnd(config);
          res = self.interceptors.response.success(Object.assign(config, {
            data: res
          })).then(rs => {
            let apiEndTime = new Date().getTime();
            console.log(api + " API TIME", apiEndTime - apiStartTime);
            console.log(api + " API RESULT", rs.data.data);
            resolve(rs.data.data);
          }).catch(e => {
            console.log(api + " SUCCESS API IS FAIL", e);
            if (config._opts.hiddenError){
              reject(e);
            } else {
              if (e && e.errMessage){
                wx.showToast({
                  title: e.errMessage,
                  icon: 'none',
                  duration: 2000
                });
              }
              reject(e);
            }
          })
        }
        config.fail = function (e) {
          console.log(api + " API IS FAIL", e);
          e = self.interceptors.response.error(Object.assign(config, {
            error: e
          }));
          reject(e);
        }
        config.complete = function(e) {}

        if (config._opts.upload) {
          config.filePath = config.data.file.path;
          config.name = config.data.uploadKey;
          config.formData = config.data;
          delete config.data;
          delete config.formData.file;
          delete config.formData.uploadKey;
          delete config.header;
          delete config.dataType;
          wx.uploadFile(config)
        } else {
          wx.request(config)
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * API调用前confirm处理
   * @param config
   * @returns {Promise<any>}
   */
  beforeConfirm (config) {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: '提示',
        confirmColor: sysConfig.style.mainColor,
        content: config._opts.confirmLabel || '确定操作吗？',
        success: function (res) {
          if (res.confirm){
            resolve();
          } else {
            reject();
          }
        }
      })
    })
  }

  /**
   *
   * @param config
   */
  componentStart(config) {
    if (config._opts.loading) {
      wx.showLoading({
        title: config._opts.loadingLabel || '处理中...'
      });
    }
  }

  /**
   *
   * @param config
   */
  componentEnd (config) {
    if(config._opts.successLabel) {
      wx.showToast({
        title: config._opts.successLabel,
        icon: 'none',
        duration: 2000
      });
    } else {
      wx.hideLoading();
    }
  }

  /**
   * json格式API
   * @param url
   * @param data
   * @param opts
   * @returns {Promise<any>}
   */
  $json(url, data, opts, that) {
    return this.request({
      method: "post",
      url: url,
      data: data,
      _opts: Object.assign({that: that}, opts)
    });
  }

  $upload(url, data, opts, that) {
    return this.request({
      url: url,
      data: data,
      _opts: Object.assign({that: that, upload: true}, opts)
    });
  }
}
