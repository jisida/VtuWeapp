import { VtuComponent } from '../assets/package/component';
VtuComponent({
  externalClasses: ['mask-class', 'center-class', 'content-class', 'footer-class'],
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    mask: false,
    maskAnimation: null,
    centerAnimation: null,

    title: null,
    type: null,
    resolve: null,
    duration: 2000,
    timeout: null,
    rotate: false,
    show: false
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
      let self = this
      let timeout = null
      if (this.data.timeout) {
        clearTimeout(this.data.timeout)
      }
      if(this.data.type != 'loading') {
        timeout = setTimeout(function() {
          self.closeDialog()
        }, self.data.duration)
      }

      if (this.data.show) {
        this.setData({
          timeout: timeout,
          show: true
        })
      } else {
        var mask = wx.createAnimation({})
        mask.width("100%").step({ duration: 1 });
        mask.opacity(0.3).step({ duration: 300 });
        var center = wx.createAnimation({})
        center.width("120px").translate('-50%', '-50%').step({ duration: 1 }).opacity(1)
            .step({ duration: 100 }).step({ duration: 100 });
        this.setData({
          maskAnimation: this.data.mask ? mask.export() : null,
          centerAnimation: center.export(),
          timeout: timeout,
          show: true
        })
      }
    },

    /**
     * 关闭对话框
     */
    closeDialog: function() {
      var mask = wx.createAnimation({})
      mask.opacity(0).step({ duration: 300 });
      mask.width(0).step({ duration: 1 });
      var center = wx.createAnimation({})
      center.opacity(0).translate('-50%', '-50%').step({ duration: 100 }).width(0).step({ duration: 1 })
      this.setData({
        maskAnimation: mask.export(),
        centerAnimation: center.export(),
        show: false
      })
      if (this.data.resolve) this.data.resolve()
    },

    getInit(){
      return {
        type: null,
        title: null,
        resolve: null,
        mask: false,
        duration: 2000,
        maskAnimation: null,
        centerAnimation: null,
        rotate: false
      }
    },

    /**
     * 自定义
     * @param config
     */
    alert(config) {
      let self = this;
      return new Promise((resolve, reject) => {
        config = Object.assign(this.getInit(), {
          type: 'default',
          resolve: resolve
        }, config)
        self.setData(config)
        self.openDialog()
      })
    },

    /**
     * 成功提示
     * @param config
     */
    success(label) {
      let self = this;
      return new Promise((resolve, reject) => {
        let config = Object.assign({}, this.getInit(), {
          title: label,
          type: 'success',
          resolve: resolve
        })
        self.setData(config)
        self.openDialog()
      })
    },

    /**
     * 警告提示
     * @param config
     */
    warning(label) {
      let self = this;
      return new Promise((resolve, reject) => {
        let config = Object.assign({}, this.getInit(), {
          title: label,
          type: 'warning',
          resolve: resolve
        })
        self.setData(config)
        self.openDialog()
      })
    },

    /**
     * 失败提示
     * @param config
     */
    error(label) {
      let self = this;
      return new Promise((resolve, reject) => {
        let config = Object.assign({}, this.getInit(), {
          title: label,
          type: 'error',
          resolve: resolve
        })
        self.setData(config)
        self.openDialog()
      })
    },

    /**
     * 加载
     * @param config
     */
    loading(label) {
      let self = this;
      return new Promise((resolve, reject) => {
        let config = Object.assign({}, this.getInit(), {
          title: label,
          type: 'loading',
          resolve: resolve
        })
        self.setData(config)
        self.openDialog()
      })
    }
  }
})
