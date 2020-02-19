import { VtuComponent } from '../../assets/package/component';
import {behavior_badge} from '../../assets/behaviors/basic';
VtuComponent({
  externalClasses: ['title-class', 'icon-class', 'content-class', ' value-class'],
  // 定义和使用组件间关系
  relations: {
    '../group/vtu-cell-group': {
      type: 'parent'
    }
  },
  behaviors:  [{name: 'badge', behavior: behavior_badge()}],

  /**
   * 组件的属性列表
   */
  properties: {
    /** 标题 */
    title: {
      value: null,
      type: String
    },
    /** 标题颜色 */
    titleColor: {
      value: null,
      type: String
    },
    /** 标题大小 */
    titleSize: {
      value: null,
      type: String
    },
    /** 标题样式 */
    titleStyle: {
      value: null,
      type: String
    },
    /** icon颜色 */
    iconColor: {
      value: null,
      type: String
    },
    /** 图标大小 */
    iconSize: {
      value: null,
      type: String
    },
    /** 图标样式 */
    iconStyle: {
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
    // 面板标题
    panelHeader: {
      type: Boolean,
      value: false
    },
    collapseOpen: {
      type: Boolean,
      value: false
    },
    height: {
      value: "45px",
      type: String
    },

    /** 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。*/
    lang: { value: "en", type: String },
    /** 按钮开放能力 **/
    openType: String,
    /** 会话来源，open-type="contact"时有效 **/
    sessionFrom:{ value: null, type: String },
    /** 会话内消息卡片标题，open-type="contact"时有效**/
    sendMessageTitle:{ value: null, type: String },
    /** 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效**/
    sendMessagePath:{ value: null, type: String },
    /** 会话内消息卡片图片，open-type="contact"时有效**/
    sendMessageImg:{ value: null, type: String },
    /** 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效**/
    appParameter:{ value: null, type: String },
    /** 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效**/
    showMessageCard:{ value: null, type: String }
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
