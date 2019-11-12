import { VtuComponent } from '../../assets/package/component';
import {behavior_badge} from '../../assets/behaviors/basic';
VtuComponent({
  behaviors:  [{name: 'badge', behavior: behavior_badge()}],
  // 定义和使用组件间关系
  relations: {
    '../grids/vtu-grids': {
      type: 'parent'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 内容
    label: {
      type: String,
      value: null
    },
    // 图标颜色
    iconColor: {
      type: String,
      value: null
    },
    // 图标尺寸
    iconSize: {
      type: String,
      value: null
    },
    // 图标颜色
    fontColor: {
      type: String,
      value: null
    },
    // 图标尺寸
    fontSize: {
      type: String,
      value: null
    },
    // 图片
    imgSrc: {
      type: String,
      value: null
    },
    imgWidth: {
      type: String,
      value: null
    },
    imgHeight: {
      type: String,
      value: null
    },
    imgMode: {
      type: String,
      value: "aspectFill"
    },
    hidden: {
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
  methods: {}
})
