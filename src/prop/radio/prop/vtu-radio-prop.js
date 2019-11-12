import { VtuComponent } from '../../../assets/package/component';
VtuComponent({
  externalClasses: ['icon-class', 'radio-class', 'radio-icon-class', 'label-class'],

  // 定义和使用组件间关系
  relations: {
    '../item/vtu-radio-prop-item': {
      type: 'child',
      linked: function(target) {
        this.data.radioList.push(target.data)
        this.setData({
          radioList: this.data.radioList
        })
      }
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    model: {
      type: String,
      value: null,
      observer(val) {
        this.setData({
          oldModel: val
        })
      }
    },
    align: {
      type: String,
      value: "left"
    },
    activeColor: {
      type: String,
      value: null
    },
    radioIcon: {
      type: String,
      value: 'iconfont icon-danxuan'
    },
    activeRadioIcon: {
      type: String,
      value: "iconfont icon-danxuanfill"
    },
    activeRadioColor: {
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
    slot: {
      type: String,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    radioList: [],
    oldModel: null
  },

  ready:function(){
    let self = this
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
      center.bottom(0).step({ duration: 300 })
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
      center.bottom(-1000).step({ duration: 300 })

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
        show: false,
        oldModel: this.data.model
      })
    },
    change: function(e) {
      this.setData({
        oldModel: e.detail.value
      })
    },
    confirm: function() {
      this.triggerEvent('change', {
        value: this.data.oldModel
      });
      this.close()
    }
  }
})
