const app = getApp();
import Mixin from "../../Mixin";
class PropPage extends Mixin{
  constructor(...args) {
    super(...args);
    super.$init({
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
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

  showProp1 = function(e) {
    this.setData({
      show1: true
    })
  }
  showProp2 = function(e) {
    this.setData({
      show2: true
    })
  }
  showProp3 = function(e) {
    this.setData({
      show3: true
    })
  }
  showProp4 = function(e) {
    this.setData({
      show4: true
    })
  }
  showProp5 = function(e) {
    this.setData({
      show5: true
    })
  }
}

Page(new PropPage({className: "PropPage", path: '/pages/comp/prop/prop', noShow: true}));
