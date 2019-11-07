const app = getApp()
import BasePageInterc from "../package/pageInterc/PageInterc";
export default class PageInterc extends BasePageInterc{
  constructor(...args) {
    super(...args);
    super.$init({
      systemInfo: null
    })
  }

  /**
   * 页面共同数据整理
   * @param data
   * @returns {*}
   */
  _commonData = function(data){
    if (!data) data = {};
    data.pageHisCount = getCurrentPages().length;
    data.userInfo = app.globalData.userInfo || null;
    data.systemInfo = app.globalData.systemInfo || null;
    return data;
  }

  /**
   * 获取系统全局数据
   * @returns {{wxList: any | string | (string & CustomerWxPage.clickWx.data.wxList) | (string & Array) | (string & {}) | (CustomerWxPage.clickWx.data.wxList & string) | CustomerWxPage.clickWx.data.wxList | (CustomerWxPage.clickWx.data.wxList & Array) | (CustomerWxPage.clickWx.data.wxList & {}) | (Array & string) | (Array & CustomerWxPage.clickWx.data.wxList) | Array | (Array & {}) | ({} & string) | ({} & CustomerWxPage.clickWx.data.wxList) | ({} & Array) | {}, userInfo: any | string | wx.UserInfo | null | any | string | {} | ComponentPopupPanel.properties.userInfo, unionId: any | string | any | string | {}, sessionKey: any | string, openId: any | string | null | any | string | {}, sys_audio: any | string | boolean | * | string, curWx: any | string, sys_msgRemind: any | string | boolean | * | string, sys_vibrate: any | string | boolean | * | string}}
   * @private
   */
  _getStorage() {
    let storage = {
      openId: wx.getStorageSync('openId') || app.globalData.openId,
      unionId: wx.getStorageSync('unionId') || app.globalData.unionId,
      userInfo: wx.getStorageSync('userInfo') || app.globalData.userInfo,
      sessionKey: wx.getStorageSync('sessionKey') || app.globalData.sessionKey,
      systemInfo: wx.getStorageSync('systemInfo') || app.globalData.systemInfo
    }
    app.globalData = Object.assign(app.globalData, storage);
    return {
      userInfo: app.globalData.userInfo,
      systemInfo: app.globalData.systemInfo
    }
  }

  /**
   * 保存系统全局数据
   * @param info
   * @private
   */
  _setStorage(info) {
    let userInfo = null;
    if (info.sessionId){
      userInfo = {
        userId: info._clientId,
        userName: info.name,
        sessionId: info.sessionId,
        avatarUrl: info.avatarUrl,
        sex: info.sex,
        subscribe: info.subscribe,
        createLuckCount: info.createLuckCount,
        joinLuckCount: info.joinLuckCount,
        winLuckCount: info.winLuckCount,
        tel: info.tel,
        qr: info.qr,
        wechat: info.wechat
      }
    }
    let systemInfo = {
      inputAddressMaxDays: info.inputAddressMaxDays,
      openLuckByNumberMaxDays: info.openLuckByNumberMaxDays,
      luckSendGoodsMaxDays: info.luckSendGoodsMaxDays
    }
    wx.setStorageSync('systemInfo', systemInfo);
    wx.setStorageSync('userInfo', userInfo);
  }
}
