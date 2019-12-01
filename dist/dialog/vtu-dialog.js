import { VtuComponent } from '../assets/package/component';
VtuComponent({
  externalClasses: ['mask-class', 'center-class', 'content-class', 'footer-class'],
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
          this.openDialog();
        } else {
          this.closeDialog();
        }
      }
    },
    title: {
      type: String,
      value: null
    },
    summary: {
      type:String,
      value: null
    },
    content: {
      type: String,
      value: null
    },
    align: {
      type: String,
      value: "center"
    },
    buttonSize: {
      type: String,
      value: 'default'
    },
    buttons: {
      type: Array,
      value: []
    },
    verticalButtons: {
      type: Boolean,
      value: true
    },
    userContentSlot: {
      type: Boolean,
      value: false
    },
    userFooterSlot: {
      type: Boolean,
      value: false
    },
    contentHeight: {
      type: String,
      value: null
    },
    lockScroll: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    maskAnimation: null,
    centerAnimation: null,
    closeOnClickOverlay: false,
    showCancel: true,
    confirmLabel: '确定',
    cancelLabel: '取消'
  },

  ready:function(){
    let self = this
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * 打开对话框
     */
    openDialog: function() {
      var mask = wx.createAnimation({})
      mask.width("100%").step({ duration: 1 });
      mask.opacity(0.3).step({ duration: 300 });
      var center = wx.createAnimation({})
      center.width("80%").translate('-50%', '-50%').step({ duration: 1 }).opacity(1).scale(1.1, 1.1)
          .step({ duration: 100 }).scale(1, 1).step({ duration: 100 });
      this.setData({
        maskAnimation: mask.export(),
        centerAnimation: center.export(),
        show: true
      })
    },

    /**
     * 关闭对话框
     */
    closeDialog: function() {
      var mask = wx.createAnimation({})
      mask.opacity(0).step({ duration: 300 });
      mask.width(0).step({ duration: 1 });

      var center = wx.createAnimation({})
      center.opacity(0).translate('-50%', '-50%').scale(.8, .8)
          .step({ duration: 100 }).scale(0, 0)
          .step({ duration: 100 });

      this.setData({
        maskAnimation: mask.export(),
        centerAnimation: center.export(),
        show: false
      })

      this.triggerEvent('close');
    },

    btnClickEvent: function(e) {
      let index = e.currentTarget.dataset.data.index
      this.data.buttons[index].click(e)
      if (this.data.buttons[index].async) {
        this.setData({
          ["buttons[{0}].loading".format(index)]: true
        })
      }
    },

    getInit(){
      return {
        buttons: [],
        title: null,
        summary: null,
        content: [],
        align: "center",
        showCancel: true,
        cancelLabel: '取消',
        confirmLabel: '确定',
        verticalButtons: true,
        closeOnClickOverlay: false,
        userContentSlot: false,
        lockScroll: false
      }
    },

    /**
     * 提示类型
     * @param param
     */
    alert(param) {
      let self = this;
      if (!param.hasOwnProperty("showCancel") || param.showCancel) {
        param.buttons = [{
          type: 'primary',
          label: param.cancelLabel || this.data.confirmLabel,
          click: function() {
            self.closeDialog()
          }
        }]
      }
      param = Object.assign(this.getInit(), param)
      this.setData(param)
      this.openDialog()
    },

    /**
     * 确认类型
     * @param param
     */
    confirm(param) {
      let self = this;
      param.buttons = [{
        type: 'primary',
        label: param.confirmLabel,
        openType: param.confirmOpenType,
        async: param.confirmAsync || false,
        click: function(e) {
          if (param.success) param.success(e)
        }
      }]
      if (!param.hasOwnProperty("showCancel") || param.showCancel) {
        param.buttons.push({
          type: 'default',
          label: param.cancelLabel || this.data.cancelLabel,
          click: function(e) {
            if (param.fail) param.fail(e)
            self.closeDialog()
          }
        })
      }

      param = Object.assign(this.getInit(), param)
      delete param.confirmAsync
      delete param.confirmOpenType
      this.setData(param)
      this.openDialog()
    },

    /**
     * 自定义
     * @param param
     */
    open(param) {
      let self = this;
      param = Object.assign(this.getInit(), param)
      this.setData(param)
      this.openDialog()
    }
  }
})
