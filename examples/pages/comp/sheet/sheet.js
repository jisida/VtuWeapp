const app = getApp();
import Mixin from "../../Mixin";
class SheetPage extends Mixin{
  constructor(...args) {
    super(...args);
    super.$init({
      show1: false,
      show2: false,

      sheetList1: [
        {
          label: '选项（异步）',
          desc: '确定删除吗?删除后无法恢复哦~',
          loading: false,
          async: true
        },
        {
          label: '禁用选项',
          disabled: true
        },
        {
          label: '删除',
          color: 'red',
          loading: false,
          icon: 'iconfont icon-picture-delet'
        }
      ],
      sheetList2: [
        {
          label: '分享',
          openType: 'share',
          icon: 'iconfont icon-share'
        },
        {
          label: '注册账号',
          openType: 'getUserInfo'
        },
        {
          label: '注册手机号',
          openType: 'getPhoneNumber'
        },
        {
          label: '打开客服',
          openType: 'contact'
        },
        {
          label: '打开授权设置页',
          openType: 'openSetting'
        },
        {
          label: '意见反馈',
          openType: 'feedback'
        }
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

  showSheet1 = function() {
    this.setData({
      show1: true
    })
  }

  showSheet2 = function() {
    this.setData({
      show2: true
    })
  }

  bindSelect1 = function(e) {
    let self = this
    let index = e.detail.index;

    switch (index) {
      case 0:
        setTimeout(function() {
          self.setData({
            show1: false
          })
        }, 1000)
        break;
      case 2:
        setTimeout(function() {
          self.setData({
            show1: false
          })
        }, 1000)
        break;
    }
  }

  getUserInfo = function(e) {
    wx.showToast({
      title: "获取用户信息成功！",
      icon: 'none',
      duration: 2000
    });
    console.log("getUserInfo: ", e)
  }

  getPhoneNumber = function(e) {
    wx.showToast({
      title: "获取用户手机号成功！",
      icon: 'none',
      duration: 2000
    });
    console.log("getPhoneNumber: ", e)
  }
}

Page(new SheetPage({className: 'SheetPage', path: '/pages/comp/sheet/sheet', noShow: true}));
