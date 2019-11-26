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
  methods: {}
})
