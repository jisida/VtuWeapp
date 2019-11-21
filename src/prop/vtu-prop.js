import { VtuComponent } from '../assets/package/component';
VtuComponent({
  externalClasses: ['icon-class', 'radio-class', 'radio-icon-class', 'label-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: null
    },
    // 显示
    show: {
      value: false,
      type: Boolean,
      observer: function(flg){
        if (flg){
          this.showProp();
        } else {
          this.hiddenProp();
        }
      }
    },
    // 点击遮罩是否关闭菜单
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    },
    width: {
      type: String,
      value: null
    },
    height: {
      type: String,
      value: null
    },
    maxHeight: {
      type: String,
      value: "400px"
    },
    showCancel: {
      type: Boolean,
      value: false
    },
    cancelLabel: {
      type: String,
      value: '取消'
    },
    cancelType: {
      type: String,
      value: "default"
    },
    position: {
      type: String,
      value: "bottom"
    },
    closeable: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    checkboxList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 显示菜单
     *
     */
    showProp: function(){
      // 遮罩层动画
      var mask = wx.createAnimation({})
      mask.width("100%").step({ duration: 1 }).opacity(0.7).step({ duration: 500 });

      // 菜单层动画
      var center = wx.createAnimation({})
      center[this.data.position](0).step({ duration: 300 })
      this.setData({
        maskAnimation: mask.export(),
        centerAnimation: center.export()
      })
    },

    /**
     * 关闭菜单动画
     *
     */
    hiddenProp: function(){
      var mask = wx.createAnimation({})
      mask.opacity(0).step({ duration: 500 })
      mask.width("0px").step({ duration: 1 })

      var center = wx.createAnimation({})
      center[this.data.position](-1000).step({ duration: 300 })

      this.setData({
        maskAnimation: mask.export(),
        centerAnimation: center.export()
      })
    },

    /**
     * 关闭菜单
     *
     */
    close: function(){
      this.setData({
        show: false
      })
    }
  }
})
