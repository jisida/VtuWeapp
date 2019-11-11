import { VtuComponent } from '../assets/package/component';
VtuComponent({
  externalClasses: [],
  /**
   * 组件的属性列表
   */
  properties: {
    // 搜索框占位
    placeholder: {
      type: String,
      value: "请输入搜索内容"
    },
    // 搜索栏背景色
    bgColor: {
      value: "#fff",
      type: String
    },
    // 搜索文本框背景色
    inputBgColor: {
      value: "#f9f9f9",
      type: String
    },
    height: {
      type: String,
      value: "50px"
    },
    searchIcon: {
      type: String,
      value: "vtu-icon vtu-icon-sousuo"
    },
    searchShape: {
      type: String,
      value: "round"
    },
    searchAlign: {
      type: String,
      value: "left"
    },
    fontSize: {
      type: String,
      value: "12px"
    },
    fontColor: {
      type: String,
      value: null
    },
    confirmType: {
      type: String,
      value: "search"
    },
    value: {
      type: String,
      value: null
    },
    clearable: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showClear: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindinput: function(e) {
      this.setData({
        value: e.detail.value
      })
      this.setData({
        showClear: this.data.value?true:false
      })
      this.triggerEvent('input', e.detail);
    },
    bindconfirm: function(e) {
      this.triggerEvent('confirm', e.detail);
    },
    bindblur: function(e) {
      this.setData({
        showClear: this.data.value?true:false
      })
      this.triggerEvent('blur', e.detail);
    },
    bindfocus: function(e) {
      this.triggerEvent('focus', e.detail);
    },
    clear: function(e) {
      this.setData({
        value: null,
        showClear: false
      })
      this.triggerEvent('clear', e.detail);
    }
  }
})
