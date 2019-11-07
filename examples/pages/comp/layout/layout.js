const app = getApp();
import Mixin from "../../Mixin";
class LayoutPage extends Mixin{
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
    resolve();
  }
}

Page(new LayoutPage({className: "LayoutPage", path: '/pages/comp/layout/layout', noShow: true}));
