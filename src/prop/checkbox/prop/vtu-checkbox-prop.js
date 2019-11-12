import { VtuComponent } from '../../../assets/package/component';
VtuComponent({
  externalClasses: ['icon-class', 'radio-class', 'radio-icon-class', 'label-class'],
  // 定义和使用组件间关系
  relations: {
    '../item/vtu-checkbox-prop-item': {
      type: 'child',
      linked: function(target) {
        this.data.checkboxList.push(target.data)
        this.setData({
          checkboxList: this.data.checkboxList
        })
      },
      linkChanged: function(target) {
        // 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
      },
      unlinked: function(target) {
        // 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
      }
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    model: {
      type: Array,
      value: []
    },
    align: {
      type: String,
      value: "left"
    },
    activeColor: {
      type: String,
      value: null
    },
    checkboxIcon: {
      type: String,
      value: 'iconfont icon-duoxuan1'
    },
    activeCheckboxIcon: {
      type: String,
      value: "iconfont icon-duoxuan"
    },
    activeCheckboxColor: {
      type: String,
      value: null
    },
    max: {
      type: Number,
      value: 0
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
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    checkboxList: []
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
        show: false
      })
    },
    change: function(e) {
      this.setData({
        model: e.detail.value
      })
    },
    confirm: function() {
      this.triggerEvent('change', {
        value: this.data.model
      });
      this.close()
    }
  }
})
