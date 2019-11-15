import { VtuComponent } from '../assets/package/component';
VtuComponent({
  externalClasses: ['navbar-class', 'homebar-class', 'contbar-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    // 背景颜色
    bgColor: {
      type: String,
      value: '#f8f8f9'
    },
    // 字体颜色
    fontColor: {
      type: String,
      value: '#000000'
    },
    // 状态栏颜色
    statusColor: {
      type: String,
      value: null
    },
    // 标题内容
    title: {
      type: String,
      value: null
    },
    // 标题位置
    titleAlign: {
      type: String,
      value: 'center'
    },
    // 显示返回/home按钮
    showNavBtn: {
      type: Boolean,
      value: true
    },
    // 返回首页
    goHome: {
      type: Boolean,
      value: true
    },
    // 带home按钮的样式  defaule / cachet
    homeStyle: {
      type: String,
      value: 'default'
    },
    // 返回文字(仅对只有返回按钮的时候)
    backLabel: {
      type: String,
      value: null
    },
    // 图标
    icon: {
      type: String,
      value: null
    },
    // 使用slot
    useBarSlot: {
      type: Boolean,
      value: false
    },
    // slot居中
    slotCenter: {
      type: Boolean,
      value: false
    },
    zIndex: {
      type: Number,
      value: 1000
    },
    // 浮动i
    fixed: {
      type: Boolean,
      value: false
    },
    // 隐藏
    hidden: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    pageHisCount: 0,
    menuBtnTop: 0,
    menuBtnRight: 0,
    menuBtnWidth: 0,
    menuBtnHeight: 0,
    navBarHeight: wx.getStorageSync('navBarConfig') ? wx.getStorageSync('navBarConfig').navBarHeight : 80,
    windowWidth: 0,
    hiddenAnimation: null
  },

  ready:function(){
    let self = this
    let pageHisCount = getCurrentPages().length
    this.setData({
      pageHisCount: pageHisCount
    })
    let navBarConfig = wx.getStorageSync('navBarConfig')
    if (navBarConfig) {
      self.setData(navBarConfig)
      self.triggerEvent('load', {
        navBarHeight: navBarConfig.navBarHeight,
        contBarHeight: navBarConfig.menuBtnHeight
      });
    } else {
      wx.getSystemInfo({
        success: function (res) {
          let menu = wx.getMenuButtonBoundingClientRect();
          let navBarConfig = {
            windowWidth: res.windowWidth,
            menuBtnTop: menu.top,
            menuBtnRight: menu.right,
            menuBtnWidth: menu.width,
            menuBtnHeight: menu.height,
            navBarHeight: parseInt(menu.top) + menu.height  + 5
          }
          self.setData(navBarConfig)
          wx.setStorageSync('navBarConfig', navBarConfig);
          self.triggerEvent('load', {
            navBarHeight: navBarConfig.navBarHeight,
            contBarHeight: navBarConfig.menuBtnHeight
          });
        },
        failure() {
        }
      })
    }
    wx.setNavigationBarColor({
      frontColor: this.data.statusColor || this.data.fontColor,
      backgroundColor: "#ffffff"
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 设定默认关闭事件-返回上一页
     */
    pageClose: function(){
      let pages = getCurrentPages();
      if (pages.length <= 1){
        wx.reLaunch({
          url: '/pages/switchTab/temp/temp'
        });
      } else {
        wx.navigateBack();
      }
    },

    /**
     * 设定返回首页
     */
    toFirstPage: function(){
      let pages = getCurrentPages();
      console.log(pages);
      if (pages.length <= 1 || !pages[0].$origin.tabPage){
        wx.reLaunch({
          url: '/pages/switchTab/temp/temp'
        });
      } else {
        wx.navigateTo({
          url: "/" + pages[0].route
        });
      }
    }
  }
})
