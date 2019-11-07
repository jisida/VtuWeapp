const app = getApp();
import Mixin from "../../Mixin";
import Dialog from "../../../miniprogram_npm/vtuweapp/dialog/vtu-index";
class DialogPage extends Mixin{
  constructor(...args) {
    super(...args);
    super.$init({
      show: false
    })
  }

  /**
   * 预加载方法
   *
   */
  preShow(query, sysData, resolve, reject) {
    resolve();
  }

  alert1 = function() {
    Dialog().alert({
      title: '普通提示',
      content: '显示您要确定的内容信息'
    })
  }

  alert2 = function() {
    Dialog().alert({
      title: '普通提示',
      content: '显示您要确定的内容信息',
      showCancel: false
    })
  }

  alert3 = function() {
    Dialog().confirm({
      title: '确认对话框',
      content: '系统需要您的授权，请登录',
      confirmLabel: '登录',
      confirmOpenType: 'getUserInfo',
      cancelLabel: '不需要',
      success: function(e) {
        wx.showToast({
          title: "已确认",
          icon: 'none',
          duration: 2000
        });
      },
      fail: function() {
        wx.showToast({
          title: "已取消",
          icon: 'none',
          duration: 2000
        });
      }
    })
  }

  alert4 = function() {
    Dialog().open({
      title: '自定义对话框',
      content: '请选择付款方式',
      buttons: [
        {
          type: 'primary',
          label: '微信支付(异步)',
          async: true,
          click: function(e) {
            setTimeout(function() {
              Dialog().close()
            }, 2000)
          }
        },
        {
          type: 'danger',
          label: '支付宝支付',
          click: function(e) {
          }
        },
        {
          type: 'default',
          label: '取消',
          click: function(e) {
            Dialog().close()
          }
        }
      ]
    })
  }

  alert5 = function() {
    Dialog().confirm({
      title: '确认对话框',
      content: '系统需要您的授权，请登录',
      confirmLabel: '登录',
      confirmAsync: true,
      confirmOpenType: 'getUserInfo',
      cancelLabel: '不需要',
      closeOnClickOverlay: true,
      success: function(e) {
        setTimeout(function() {
          Dialog().close()
        }, 2000)
      },
      fail: function() {
        wx.showToast({
          title: "已取消",
          icon: 'none',
          duration: 2000
        });
      }
    })
  }
  alert6 = function() {
    Dialog().open({
      title: '自定义对话框',
      content: '请选择付款方式',
      verticalButtons: false,
      buttons: [
        {
          type: 'primary',
          label: '微信支付',
          icon: "iconfont icon-share",
          click: function(e) {
            setTimeout(function() {
              Dialog().close()
            }, 2000)
          }
        },
        {
          type: 'danger',
          label: '支付宝支付',
          click: function(e) {
          }
        },
        {
          type: 'default',
          label: '取消',
          click: function(e) {
            Dialog().close()
          }
        }
      ]
    })
  }

  alert7 = function() {
    this.setData({
      show: true
    })
  }

  closeCustomDialog = function() {
    Dialog("Vtu-Custom-Dialog").close()
  }
}

Page(new DialogPage({className: "DialogPage", path: '/pages/comp/dialog/dialog', noShow: true}));
