import Toast from "../../../miniprogram_npm/vtuweapp/toast/vtu-index";
import Mixin from "../../Mixin";
class ButtonPage extends Mixin{
  constructor(...args) {
    super(...args);
    super.$init({
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

  click = function(e) {
    Toast("您点击了" + e.currentTarget.dataset.label)
  }
}

Page(new ButtonPage({className: 'ButtonPage', path: '/pages/comp/button/button', noShow: true}));
