const app = getApp();
import Mixin from "../../Mixin";
import Notify from "../../../miniprogram_npm/vtuweapp/notify/vtu-index";
class NotifyPage extends Mixin{
  constructor(...args) {
    super(...args);
    super.$init({
      value2: 'name1'
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

  onLoad = function() {
  }

  open1 = function() {
    Notify( {
      content: "通知内容",
      type: 'success',
      icon: "iconfont icon-biaoxing"
    })
  }

  open2 = function() {
    Notify( {
      content: "危险通知",
      type: 'error',
      showClose: true
    })
  }

  open3 = function() {
    Notify( {
      content: "警告通知",
      type: 'warning'
    })
  }

  open4 = function() {
    Notify( {
      content: "信息通知",
      type: 'info'
    })
  }

  open5 = function() {
    Notify( {
      content: "信息通知",
      type: 'info',
      bgColor: 'red',
      color: "#fff",
      textAlign: 'left',
      unClose: true
    })
    setTimeout(function() {
      Notify().close()
    }, 2000)
  }

  open6 = function() {
    Notify( {
      content: "加载中...",
      type: 'loading'
    })
    setTimeout(function() {
      Notify().close()
      Notify( {
        content: "加载成功",
        type: 'success'
     })
    }, 2000)
  }
}

Page(new NotifyPage({className: "NotifyPage", path: '/pages/comp/notify/notify', noShow: true}));
