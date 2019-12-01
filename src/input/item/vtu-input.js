import { VtuComponent } from '../../assets/package/component';
VtuComponent({
  externalClasses: ['title-class', 'content-class', 'input-class', 'textarea-class'],
  // 定义和使用组件间关系
  relations: {
    '../group/vtu-input-group': {
      type: 'parent'
    }
  },
  builtBehaviors: ['wx://form-field'],
  /**
   * 组件的属性列表
   */
  properties: {
    /** 标题 */
    title: {
      value: null,
      type: String
    },
    /** icon颜色 */
    titleColor: {
      value: null,
      type: String
    },
    /** 图标icon */
    icon: {
      value: null,
      type: String
    },
    /** icon颜色 */
    iconColor: {
      value: null,
      type: String
    },
    /** 显示值 */
    value: null,
    /** 显示值颜色 */
    valueColor: {
      value: null,
      type: String
    },
    /** 类型  default / input / inputNumber / switch / picker */
    type: {
      value: "default",
      type: String
    },
    /** 展示箭头  默认 false*/
    arrow: {
      value: false,
      type: Boolean
    },
    /** input-type 文本框原生类型 text, number 数字, idcard 身份证, digit 带小数点*/
    inputType: {
      value: "text",
      type: String
    },
    /** 占位符 */
    placeholder: {
      value: "",
      type: String
    },
    /** 文本位置 */
    textAlign: {
      value: "right",
      type: String
    },
    /** 详细描述 */
    content: {
      value: null,
      type: String
    },
    /** 底部边框 */
    border: {
      value: false,
      type: Boolean
    },
    /** 设置键盘右下角按钮的文字，仅在type='text'时生效 */
    confirmType: {
      value: null,
      type: String
    },
    /** 点击键盘右下角按钮时是否保持键盘不收起 */
    confirmHold: {
      value: false,
      type: Boolean
    },
    /** 最大输入长度，设置为 -1 的时候不限制最大长度 */
    maxlength: {
      value: null,
      type: Number
    },
    /** 是否禁用 */
    disabled: {
      value: false,
      type: Boolean
    },
    /** 键盘弹起时，是否自动上推页面 */
    adjustPosition: {
      value: true,
      type: Boolean
    },
    /** 获取焦点 */
    focus: {
      value: false,
      type: Boolean
    },
    /** 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 */
    cursorSpacing: {
      value: 0,
      type: Number
    },
    /** 选择器类型 */
    mode: {
      value: "selector",
      type: String
    },
    /**  */
    range: {
      value: [],
      type: Array
    },
    /** 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容 */
    rangeKey: {
      value: null,
      type: String
    },
    /**  */
    start: {
      value: null,
      type: String
    },
    /**  */
    end: {
      value: null,
      type: String
    },
    slot: {
      value: null,
      type: String
    },
    // 面板标题
    panelHeader: {
      type: Boolean,
      value: false
    },
    autoHeight: {
      type: Boolean,
      value: false
    },
    /** 标题位置 */
    titleAlign: {
      type: String,
      value: "left"
    },
    showConfirmBar: {
      type: Boolean,
      value: true
    },
    must: {
      type: Boolean,
      value: false
    },
    textHeight: {
      type: String,
      value: null
    },
    showMaxLabel: {
      type: Boolean,
      value: true
    },
    status: {
      type: String,
      value: null
    },
    message: {
      type: String,
      value: null
    },
    clearable: {
      type: Boolean,
      value: false
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
    bindinput: function(e) {
      this.setData({
        value: e.detail.value
      })
      this.triggerEvent('input', e.detail);
    },
    bindclear: function(e) {
      this.setData({
        value: null
      })
      this.triggerEvent('clear', e.detail);
    },
    bindkeyboardheightchange: function(e) {
      this.triggerEvent('keyboardheightchange', e.detail);
    },
    bindconfirm: function(e) {
      this.triggerEvent('confirm', e.detail);
    },
    bindblur: function(e) {
      this.triggerEvent('blur', e.detail);
    },
    bindfocus: function(e) {
      this.triggerEvent('focus', e.detail);
    },
    bindchange: function(e) {
      this.triggerEvent('change', e.detail);
    },
    bindcolumnchange: function(e) {
      this.triggerEvent('columnchange', e.detail);
    },
    bindlinechange: function(e) {
      this.triggerEvent('linechange', e.detail);
    },
    bindtap: function(e) {
      this.triggerEvent('click');
    }
  }
})
