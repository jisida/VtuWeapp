const app = getApp();
import Mixin from "../../Mixin";
class TagPage extends Mixin{
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

  click = function(e) {
    wx.showToast({
      title: "正在删除[{0}]{1}标签".format(e.detail.label, e.detail.index),
      icon: 'none',
      duration: 2000
    });
  }
}

Page(new TagPage({className: "TagPage", path: '/pages/comp/tag/tag', noShow: true}));
