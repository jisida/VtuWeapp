const app = getApp()
import ComponentPage from "../../Component";
let utils = require('../../Utils.js');
class SwitchtabThreePage extends ComponentPage {
  constructor(...args) {
    super(...args);
    super.$init({
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

    /**
     * 跳转我的参与
     */
    toMyJoinPage(){
      switchtabThreePage.toMyJoinPage();
    },

    /**
     * 跳转我的中奖
     */
    toMyWinPage(){
      switchtabThreePage.toMyWinPage();
    },

    /**
     * 跳转我的活动
     */
    toMyCreatePage(){
      switchtabThreePage.toMyCreatePage();
    },

    /**
     * 跳转我的加粉账号
     */
    toAccountListPage(e){
      switchtabThreePage.toAccountListPage(e, this);
    },

    /**
     * 跳转关于
     */
    toAboutPage(e){
      switchtabThreePage.toAboutPage();
    },

    /**
     * 跳转我的地址
     */
    showAddress(e){
      switchtabThreePage.$wx_showAddress();
    },

    /**
     * 联系方式
     */
    toContactPage(e){
      switchtabThreePage.toContactPage();
    },

    /**
     * 打开微信登录对话框
     */
    openWechatLoginBtn() {
      let self = this
      switchtabThreePage.openWechatLogin.call(this).then(data => {
        self.onShow()
      })
    },

    $wx_previewImage (e) {
      switchtabThreePage.$wx_previewImage(e)
    }
  }
}

var switchtabThreePage = new SwitchtabThreePage({className: 'SwitchtabThreePage', visitor: false});
Component(switchtabThreePage);
