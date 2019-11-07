const app = getApp();
import Mixin from "../../Mixin";
class AccordionPage extends Mixin{
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
}

Page(new AccordionPage({className: "AccordionPage", path: '/pages/comp/accordion/accordion', noShow: true}));
