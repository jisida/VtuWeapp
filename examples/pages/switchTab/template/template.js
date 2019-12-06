const app = getApp()
import ComponentPage from "../../Component";
class SwitchtabSecondPage extends ComponentPage {
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

    buyBar() {
      wx.navigateTo({
        url: "/pages/comp/shop/buyBar/buyBar"
      });
    },
    shopList() {
      wx.navigateTo({
        url: "/pages/comp/shop/list/list"
      });
    },
    newsList() {
      wx.navigateTo({
        url: "/pages/comp/news/list/list"
      });
    },
    comment() {
      wx.navigateTo({
        url: "/pages/comp/list/comment/list"
      });
    },
    chat() {
      wx.navigateTo({
        url: "/pages/comp/list/chat/list"
      });
    },
    chatDetail() {
      wx.navigateTo({
        url: "/pages/comp/chat/chat"
      });
    },
    minipg() {
      wx.navigateTo({
        url: "/pages/comp/other/minipg/minipg"
      });
    },
    title() {
      wx.navigateTo({
        url: "/pages/comp/other/title/title"
      });
    }
  }
}

var switchtabSecondPage = new SwitchtabSecondPage({className: 'SwitchtabSecondPage', visitor: false});
Component(switchtabSecondPage);
