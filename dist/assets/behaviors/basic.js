
const baseProperties = {
  id: String,                                   // ID
  name: String,                                 // name
  slot: String,                                 // 插槽
  icon: { type: String, value: null },          // 图标
  circle: { type: Boolean, value: false },      // 圆形
  round: { type: Boolean, value: false },       // 圆角
  card: { type: Boolean, value: false },        // 卡片
  shadow: { type: String, value: null },        // 阴影
  disabled: { value: false, type: Boolean },    // 禁用
  border:{ value: false, type: Boolean },       // 边框
  borderLeft:{ value: false, type: Boolean },   // 左边框
  borderRight:{ value: false, type: Boolean },  // 右边框
  borderTop:{ value: false, type: Boolean },    // 上边框
  borderBottom:{ value: false, type: Boolean }, // 下边框
  borderStyle:{ value: null, type: String },    // 边框
  borderLeftStyle:{ value: null, type: String },   // 左边框
  borderRightStyle:{ value: null, type: String },  // 右边框
  borderTopStyle:{ value: null, type: String },    // 上边框
  borderBottomStyle:{ value: null, type: String }, // 下边框
  borderColor: { type: String, value: null },   // 边框颜色
  borderSize: { type: Number, value: 1 },       // 边框宽度
  style: { type: String, value: "" },       // 边框宽度,
  zIndex: { type: Number, value: 0 },       // 边框宽度
}

/**
 * 基础组件配置
 * @type {wx.ExtendedComponent<wx.Component<any, {data: ObjectConstructor, id: StringConstructor, slot: StringConstructor}>, any, {bindClick(*): void}, {data: ObjectConstructor, id: StringConstructor, slot: StringConstructor}>}
 */
export const basic = function () {
  return {
    properties: Object.assign({}, baseProperties),
    methods: {
      bindClick(e) {
        this.triggerEvent('click', e.currentTarget.dataset || e.detail);
      }
    },
    data: {
      commonStyle: {},
      commonClass: ""
    },
    observers: {
      "borderStyle, borderLeftStyle, borderRightStyle, borderTopStyle, borderBottomStyle, borderColor, borderSize, style": function() {
        let style = ";"
        if (this.data.style) {
          style += this.data.style + ';'
        }
        if (this.data.borderStyle) {
          style += "border: " + this.data.borderStyle + ';'
        }
        if (this.data.borderLeftStyle) {
          style += "border-left: " + this.data.borderLeftStyle + ';'
        }
        if (this.data.borderRightStyle) {
          style += "border-right: " + this.data.borderRightStyle + ';'
        }
        if (this.data.borderTopStyle) {
          style += "border-top: " + this.data.borderTopStyle + ';'
        }
        if (this.data.borderBottomStyle) {
          style += "border-bottom: " + this.data.borderBottomStyle + ';'
        }
        if (this.data.borderColor) {
          style += "border-color: " + this.data.borderColor + ';'
        }
        if (this.data.borderSize) {
          style += "border-size: " + this.data.borderSize + ';'
        }
        this.setData({
          commonStyle: style
        })
      },
      "border, borderLeft, borderRight, borderTop, borderBottom, shadow, round, card, circle": function() {
        let classStr = ""
        if (this.data.border) {
          classStr += " border--border "
        }
        if (this.data.borderLeft) {
          classStr += " border--left "
        }
        if (this.data.borderRight) {
          classStr += " border--right "
        }
        if (this.data.borderTop) {
          classStr += " border--top "
        }
        if (this.data.borderBottom) {
          classStr += " border--bottom "
        }
        if (this.data.shadow) {
          classStr += " shadow-" + this.data.shadow + ' '
        }
        if (this.data.round) {
          classStr += " is-round "
        }
        if (this.data.card) {
          classStr += " is-card "
        }
        if (this.data.circle) {
          classStr += " is-circle "
        }
        this.setData({
          commonClass: classStr
        })
      }
    }
  }
}

/**
 * 加载组件配置
 * @type {wx.ExtendedComponent<wx.Component<any, {rotate: {type: BooleanConstructor, value: boolean}, img: {type: StringConstructor, value: null}, show: {type: BooleanConstructor, value: boolean}, icon: {type: StringConstructor, value: string}, label: {type: StringConstructor, value: string}, fill: {type: BooleanConstructor, value: boolean}, labelColor: {type: StringConstructor, value: null}, mode: {type: StringConstructor, value: string}, fillScreen: {type: BooleanConstructor, value: boolean}, bgColor: {type: StringConstructor, value: string}, round: {type: BooleanConstructor, value: boolean}, iconColor: {type: StringConstructor, value: null}, height: {type: StringConstructor, value: string}}>, any, {}, {rotate: {type: BooleanConstructor, value: boolean}, img: {type: StringConstructor, value: null}, show: {type: BooleanConstructor, value: boolean}, icon: {type: StringConstructor, value: string}, label: {type: StringConstructor, value: string}, fill: {type: BooleanConstructor, value: boolean}, labelColor: {type: StringConstructor, value: null}, mode: {type: StringConstructor, value: string}, fillScreen: {type: BooleanConstructor, value: boolean}, bgColor: {type: StringConstructor, value: string}, round: {type: BooleanConstructor, value: boolean}, iconColor: {type: StringConstructor, value: null}, height: {type: StringConstructor, value: string}}>}
 */
export const behavior_loading = function () {
  return {
    properties: Object.assign({}, baseProperties, {
      show: { value: false, type: Boolean },                                 // 是否显示
      icon: { type: String,  value: "vtu-icon vtu-icon-jiazai" },           // 默认ICON
      iconColor: { type: String, value: null },                             // ICON颜色
      img: { type: String, value: null },                                   // 加载图片src
      mode: { type: String, value: "widthFix" },                            // 模式
      label: { type: String, value: "加载中..." },                          // 加载文字
      bgColor: { type: String, behavior_badge: "transparent" },                      // 加载面板背景
      rotate: { type: Boolean, value: true },                               // 图标是否旋转
      labelColor: { type: String, value: null },                            // 加载文字颜色
      height: { type: String, value: "80px" },                              // 加载面板高度
      fill: { value: false, type: Boolean },                                // 是否填充父类面板
      fillScreen: { value: false, type: Boolean }                           // 是否填满屏幕
    }),
    methods: {}
  }
}

/**
 * button组件配置
 * @type {wx.ExtendedComponent<wx.Component<any, {openType: StringConstructor}>, any, {bindGetUserInfo(*): void, bindGetPhoneNumber(*): void, bindError(*): void, bindContact(*): void, bindOpenSetting(*): void, bindLaunchApp(*): void}, {openType: StringConstructor}>}
 */
export const behavior_button = function () {
  return {
    properties: {
      /** 按钮类型 default / primary / success / warning / danger  默认 default*/
      type: { value: "default", type: String },
      /** 按钮尺寸 default / medium / small / mini  默认 default*/
      size: { value: "default", type: String },
      /** 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。*/
      lang: { value: "en", type: String },
      /** 按钮宽度*/
      width: { value: null, type: String },
      /** 按钮开放能力 **/
      openType: String,
      /** 加载中文本**/
      loadingText:{ value: null, type: String },
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
      showMessageCard:{ value: null, type: String },
      /** 朴素按钮  默认 false*/
      plain: { value: false, type: Boolean },
      /** 加载中  默认 false*/
      loading: { value: false, type: Boolean },
      /** inlineBlock  默认 false*/
      inlineBlock: { value: false, type: Boolean },
      /** 自定义按钮背景色**/
      bgColor:{ value: null, type: String },
      /** 自定义文字颜色**/
      fontColor:{ value: null, type: String },
      /** 用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件 **/
      formType:{ value: null, type: String },

    },
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
  }
}

/**
 * badge组件配置
 * @type {wx.ExtendedComponent<wx.Component<any, {openType: StringConstructor}>, any, {bindGetUserInfo(*): void, bindGetPhoneNumber(*): void, bindError(*): void, bindContact(*): void, bindOpenSetting(*): void, bindLaunchApp(*): void}, {openType: StringConstructor}>}
 */
export const behavior_badge = function () {
  return {
    properties: Object.assign({}, baseProperties, {
      value: {
        type: String,
        value: null,
        observer: function(value){
          let val = parseInt(value)
          if (!isNaN(val) && value.indexOf("+") < 0 && this.data.max) {
            if (val > this.data.max) {
              val = this.data.max + '+'
            }
            this.setData({
              value: val
            })
          }
        }
      },
      /** 是否显示 */
      show: {  type: Boolean, value: true },
      /** 数值最大上限 */
      max: { type: Number, value: 0 },
      /** 字体颜色 **/
      color: { type: String, value: null },
      /** 徽章背景颜色 **/
      bgColor: { type: String, value: null },
      /** 是否是小红点 **/
      isDot: { type: Boolean, value: false },
      /** 顶部距离 **/
      top: { type: String, value: '-10px' },
      /** 右部距离 **/
      right: { type: String, value: null },
      /**  是否使用插槽 **/
      userSlot: { type: Boolean, value: false },
      /**  形状 **/
      shape: { type: String, value: "bubble" }
    }),
    methods: {}
}
}

/**
 * divider分割线组件配置
 * @type {wx.ExtendedComponent<wx.Component<any, {openType: StringConstructor}>, any, {bindGetUserInfo(*): void, bindGetPhoneNumber(*): void, bindError(*): void, bindContact(*): void, bindOpenSetting(*): void, bindLaunchApp(*): void}, {openType: StringConstructor}>}
 */
export const behavior_divider = function() {
  return {
    properties: Object.assign({}, baseProperties, {
      // 是否为虚线
      dash: { type: Boolean, value: false },
      // 位置
      align: { type: String, value: "center" },
      // icon
      icon: { type: String, value: null },
      // 背景颜色
      bgColor: { type: String, value: "#fff" },
      // 字体颜色
      fontColor: { type: String, value: null },
      // 线条颜色
      lineColor: { type: String, value: "#ddd" },
      // 分割线宽度
      width: { type: String, value: null },
      //圆角
      round: { type: Boolean, value: false },
      // 字体加粗
      bold: { type: Boolean, value: false }
    }),
    methods: {}
  }
}
