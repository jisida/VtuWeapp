const app = getApp();
import Mixin from "../../Mixin";
class NoticeBarPage extends Mixin{
  constructor(...args) {
    super(...args);
    super.$init({
      value2: 'name1',
      list: [
        {label: '您有500积分待使用，快去使用吧！'},
        {label: '您的积分可兑换商品，立即兑换'}
      ]
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

Page(new NoticeBarPage({className: "NoticeBarPage", path: '/pages/comp/noticeBar/noticeBar', noShow: true}));
