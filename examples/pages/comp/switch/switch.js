const app = getApp();
import Mixin from "../../Mixin";
class SwitchPage extends Mixin{
  constructor(...args) {
    super(...args);
    super.$init({
      value: true
    })
  }

  /**
   * 预加载方法
   *
   */
  preShow(query, sysData, resolve, reject) {
    resolve();
  }

  bindChange = function(e) {
    this.setData({
      value: e.detail.value
    })
  }

  bindAsyncChange = function(e) {
    let self = this
    setTimeout(function() {
      self.setData({
        value: e.detail.value
      })
    }, 2000)
  }
}

Page(new SwitchPage({className: 'SwitchPage', path: '/pages/comp/switch/switch', noShow: true}));
