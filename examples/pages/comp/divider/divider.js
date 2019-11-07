const app = getApp();
import Mixin from "../../Mixin";
class SwiperPage extends Mixin{
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

Page(new SwiperPage({className: "SwiperPage", path: '/pages/comp/swiper/swiper', noShow: true}));
