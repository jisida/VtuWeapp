import { VtuComponent } from '../assets/package/component';
VtuComponent({
  externalClasses: ['sheet-class', 'sheet-ok-class', 'sheet-cancel-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    // 显示
    show: {
      value: false,
      type: Boolean,
      observer: function(flg){
        if (flg){
          this.show();
        } else {
          this.hidden();
        }
      }
    },
    // 点击遮罩是否关闭菜单
    closeOnClickOverlay: {
      type: Boolean,
      value: true,
      observer: function(flg){
        if (!flg){
          this.setData({
            showCancel: true
          })
        }
      }
    },
    // 是否显示遮罩层
    showOverlay: {
      type: Boolean,
      value: true
    },
    // 是否显示取消按钮
    showCancel: {
      type: Boolean,
      value: true
    },
    cancelLabel: {
      type: String,
      value: "取消"
    },
    // 菜单列表
    sheetList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    maskAnimation: null,
    centerAnimation: null
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * 选择菜单事件
     * @param e
     */
    onSelect: function(e) {
      let self = this;
      let item = e.currentTarget.dataset.item;
      let index = e.currentTarget.dataset.index
      if (!item.async) {
        this.close()
      } else if (this.data.sheetList[index].hasOwnProperty('loading')){
        this.setData({
          ['sheetList[{0}].loading'.format(index)]: true
        })
      }
      this.triggerEvent('select', {
        detail: item,
        index: index,
        openValue: e.detail
      });
    },

    /**
     * 显示菜单
     *
     */
    show: function(){
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
    hidden: function(){
      var mask = wx.createAnimation({})
      mask.opacity(0).step({ duration: 500 })
      mask.width("0px").step({ duration: 1 })

      var center = wx.createAnimation({})
      center.bottom(-1000).step({ duration: 300 })

      for (let i = 0; i < this.data.sheetList.length; i++) {
        this.data.sheetList[i].loading = false
      }
      this.setData({
        maskAnimation: mask.export(),
        centerAnimation: center.export(),
        sheetList: this.data.sheetList
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
      this.triggerEvent('close');
    },

    /***
     * 点击蒙版
     */
    closeByMask: function() {
      this.triggerEvent('mask');
      if (this.data.closeOnClickOverlay) this.close()
    },

    getUserInfo: function(e) {
      this.triggerEvent('getuserinfo', e.detail);
    },
    getPhoneNumber: function(e) {
      this.triggerEvent('getphonenumber', e.detail);
    },
    contact: function(e) {
      this.triggerEvent('contact', e.detail);
    },
    error: function(e) {
      this.triggerEvent('error', e.detail);
    },
    opensetting: function(e) {
      this.triggerEvent('opensetting', e.detail);
    },
    launchapp: function(e) {
      this.triggerEvent('launchapp', e.detail);
    }
  }
})
