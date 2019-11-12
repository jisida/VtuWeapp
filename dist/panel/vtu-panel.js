import { VtuComponent } from '../assets/package/component';
import {behavior_loading} from '../assets/behaviors/basic';
VtuComponent({
  externalClasses: ['content-class', 'footer-class', 'loading-class', 'title-class'],
  behaviors:  [{name: 'l', behavior: behavior_loading()}],
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否使用 footer slot
    useFooterSlot: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: null
    },
    // 简洁模式
    simple: {
      type: Boolean,
      value: false
    },
    bgColor: {
      type: String,
      value: null
    }
  }
})
