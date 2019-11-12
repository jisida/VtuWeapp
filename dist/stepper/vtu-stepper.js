import { VtuComponent } from '../assets/package/component';
VtuComponent({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      value: 0,
      type: Number
    },
    min: {
      value: -99999999999999999999,
      type: Number
    },
    max: {
      value: 99999999999999999999999,
      type: Number
    },
    // 步数
    step: {
      value: 1,
      type: Number
    },
    /** 按钮尺寸 medium  / small   默认 medium*/
    size: {
      value: "medium",
      type: String
    },
    /** 输入框默认 placeholder*/
    placeholder: {
      value: null,
      type: String
    },
    //禁用文本框
    disableInput: {
      type: Boolean,
      value: false
    },
    //禁用
    disabled: {
      type: Boolean,
      value: false
    },
    // 异步变更，为 true 时值不变化，仅触发事件
    async: {
      type: Boolean,
      value: false
    },
    //输入框宽度，须指定单位
    inputWidth: {
      type: String,
      value: "50px"
    },
    // 是否显示增加按钮
    showPlus: {
      type: Boolean,
      value: true
    },
    // 是否显示减少按钮
    showMinus: {
      type: Boolean,
      value: true
    },
    // 只允许输入整数
    integer: {
      type: Boolean,
      value: false
    },
    // 增加按钮样式
    plusBtnType: {
      type: String,
      value: "default"
    },
    // 减少按钮样式
    minusBtnType: {
      type: String,
      value: "default"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindChange: function(e) {
      let value = parseFloat(e.detail.value);
      if (!this.data.async) {
        this.setData({
          value: value
        })
      }
      this.triggerEvent('change', value);
    },
    bindconfirm: function(e) {
      this.triggerEvent('confirm', e);
    },
    bindblur: function(e) {
      this.triggerEvent('blur', e);
    },
    bindfocus: function(e) {
      this.triggerEvent('focus', e);
    },
    addNum: function() {
      let value = this.data.value + this.data.step
      if (!this.data.async) {
        this.setData({
          value: value
        })
      }
      this.triggerEvent('change', value);
      this.triggerEvent('plus', value);
    },

    minusNum: function() {
      let value = this.data.value - this.data.step
      if (!this.data.async) {
        this.setData({
          value: value
        })
      }
      this.triggerEvent('change', value);
      this.triggerEvent('minus', value);
    }
  }
})
