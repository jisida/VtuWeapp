const app = getApp();
import Mixin from "../../Mixin";
class LoadingPage extends Mixin{
  constructor(...args) {
    super(...args);
    super.$init({
      show1: false,
      value1: 3
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

  bindAsyncChange = function(e) {
    let self = this
    self.setData({
      show1: true
    })
    setTimeout(function() {
      self.setData({
        value1: e.detail,
        show1: false
      })
      wx.hideLoading();
    }, 2000)
  }

}

Page(new LoadingPage({className: "LoadingPage", path: '/pages/comp/loading/loading', noShow: true}));
