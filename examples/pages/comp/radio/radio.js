const app = getApp();
import Mixin from "../../Mixin";
class RadioPage extends Mixin{
  constructor(...args) {
    super(...args);
    super.$init({
      value1: 1,
      showProp: false
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

  change = function(e) {
    console.log(111, e)
    this.setData({
      value1: e.detail.value
    })
  }

  openRadioProp = function(){
    this.setData({
      showProp: true
    })
  }
}

Page(new RadioPage({className: "RadioPage", path: '/pages/comp/radio/radio', noShow: true}));
