const app = getApp();
import Mixin from "../../Mixin";
class SwiperPanelPage extends Mixin{
  constructor(...args) {
    super(...args);
    super.$init({
      current: 3
    })
  }

  /**
   * 预加载方法
   *
   */
  preShow(query, sysData, resolve, reject) {
    var self = this;
    resolve();
  }

  onLoad = function() {
  }

  change = function(e) {
    this.setData({
      current: e.detail.current
    })
  }

  bindscrolltoupper = function(e) {
    console.log(e)
    let param = e.detail
    wx.showToast({
      title: "Tab{0}滚动到顶部！".format(param.index+1),
      icon: 'none',
      duration: 2000
    });
  }

  bindscrolltolower = function(e) {
    console.log(e)
    let param = e.detail
    wx.showToast({
      title: "Tab{0}滚动到底部！".format(param.index+1),
      icon: 'none',
      duration: 2000
    });
  }
}

Page(new SwiperPanelPage({className: "SwiperPanelPage", path: '/pages/comp/swiperPanel/swiperPanel', noShow: true}));
