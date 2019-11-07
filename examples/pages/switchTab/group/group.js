const app = getApp()
import ComponentPage from "../../Component";
class SwitchtabGroupPage extends ComponentPage {
  constructor(...args) {
    super(...args);
    super.$init({
      hiddenNavBar: true
    });
  }

  // 对外属性
  properties = {
    show: {
      type: Boolean,
      value: false
    }
  }

  lifetimes =  {
    attached() {},
    moved() {},
    detached() {},
  }

  // 组件的方法
  methods = {

    bindscroll: function(e) {
      if (e.detail.scrollTop > 80 && this.data.hiddenNavBar) {
        this.setData({
          hiddenNavBar: false
        })
      } else if (e.detail.scrollTop < 80 && !this.data.hiddenNavBar) {
        this.setData({
          hiddenNavBar: true
        })
      }
    },

  }
}

var switchtabGroupPage = new SwitchtabGroupPage({className: 'SwitchtabGroupPage', visitor: false});
Component(switchtabGroupPage);
