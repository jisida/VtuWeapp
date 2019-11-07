const app = getApp();
import Mixin from "../../Mixin";
class CheckBoxPage extends Mixin{
  constructor(...args) {
    super(...args);
    super.$init({
      value1: ['2', '4'],
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
    this.setData({
      value1: e.detail.value
    })
  }

  openCheckboxProp = function(){
    this.setData({
      showProp: true
    })
  }
}

Page(new CheckBoxPage({className: "CheckBoxPage", path: '/pages/comp/checkbox/checkbox', noShow: true}));
