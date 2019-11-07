const app = getApp();
import Mixin from "../../Mixin";
class CellPage extends Mixin{
  constructor(...args) {
    super(...args);
    super.$init({
      switch: true
    })
  }

  /**
   * 预加载方法
   *
   */
  preShow(query, sysData, resolve, reject) {
    var self = this;
    var initData = {
      loading: false
    }
    resolve(initData);
  }

  getUserInfo = function(e) {
    wx.showToast({
      title: "获取用户信息成功！",
      icon: 'none',
      duration: 2000
    });
    console.log("getUserInfo: ", e)
  }

  getPhoneNumber = function(e) {
    wx.showToast({
      title: "获取用户手机号成功！",
      icon: 'none',
      duration: 2000
    });
    console.log("getPhoneNumber: ", e)
  }

  selectItem = function(e) {
    wx.showToast({
      title: "点击事件！参数："+e.currentTarget.dataset.label,
      icon: 'none',
      duration: 2000
    });
    console.log(11111111, e)
  }
}

Page(new CellPage({className: 'CellPage', path: '/pages/comp/cell/cell', noShow: true}));
