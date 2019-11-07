const app = getApp();
import Mixin from "../../Mixin";
class RatePage extends Mixin{
  constructor(...args) {
    super(...args);
    super.$init({
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

  bindChange = function(e) {
    this.setData({
      value1: e.detail
    })
  }

  bindAsyncChange = function(e) {
    let self = this
    wx.showLoading({
      title: '处理中...'
    })
    setTimeout(function() {
      self.setData({
        value1: e.detail
      })
      wx.hideLoading();
    }, 2000)
  }
}

Page(new RatePage({className: 'RatePage', path: '/pages/comp/rate/rate', noShow: true}));
