const app = getApp();
import Mixin from "../../Mixin";
class LoadMorePage extends Mixin{
  constructor(...args) {
    super(...args);
    super.$init({
      loading: false
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

  bindLoad = function() {
    this.setData({
      loading: true
    })
  }
}

Page(new LoadMorePage({LoadMorePage: LoadMorePage, path: '/pages/comp/loadMore/loadMore', noShow: true}));
