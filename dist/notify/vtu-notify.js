import { VtuComponent } from '../assets/package/component';
VtuComponent({
  externalClasses: ['icon-class', 'content-class', 'close-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    icon: {
      type: String,
      value: null
    },
    type: {
      type: String,
      value: "default"
    },
    showClose: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: null
    },
    bgColor: {
      type: String,
      value: null
    },
    content: {
      type: String,
      value: null
    },
    duration: {
      type: Number,
      value: 3000
    },
    textAlign: {
      type: String,
      value: "center"
    },
    unClose: {
      type: Boolean,
      value: false
    },
    rotate: {
      type: Boolean,
      value: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    showFlg: false,
    navBarHeight: 0,
    setTimeoutObj: null
  },

  ready:function(){
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * 打开
     */
    show: function() {
      let self = this
      let setTimeoutObj = null
      if (this.data.setTimeoutObj) clearTimeout(this.data.setTimeoutObj)
      if (!this.data.unClose) {
        setTimeoutObj = setTimeout(function() {
          self.close()
        }, self.data.duration)
      }
      this.setData({
        showFlg: true,
        setTimeoutObj: setTimeoutObj
      })

    },
    /**
     * 关闭
     */
    close: function() {
      let op = this.getInit();
      op.showFlg = false
      this.setData(op)
    },

    /**
     * 初始化配置
     */
    setOption: function(param) {
      param = Object.assign(this.getInit(), param)
      this.setData(param)
      this.show()
    },

    /**
     * 获取初始参数
     * @returns {{duration: number, showClose: boolean, color: null, bgColor: null, textAlign: string, icon: null, type: string, content: null}}
     */
    getInit: function() {
      return {
        icon: null,
        type: "default",
        showClose: false,
        color: null,
        bgColor: null,
        content: null,
        duration: 3000,
        textAlign: "center",
        unClose: false,
        rotate: false
      }
    },

    /**
     * 点击
     */
    click: function(e) {
      this.triggerEvent('click');
    },
  }
})
