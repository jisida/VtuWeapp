import { VtuComponent } from '../assets/package/component';
import {behavior_divider} from '../assets/behaviors/basic';
VtuComponent({
  externalClasses: ['icon-class', 'img-class', 'label-class', 'load-label-class', 'load-end-label-class'],
  behaviors:  [{name: 'divider', behavior: behavior_divider()}],
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示
    show: {
      value: true,
      type: Boolean
    },
    loading: {
      value: false,
      type: Boolean
    },
    end: {
      value: false,
      type: Boolean
    },
    rotate: {
      type: Boolean,
      value: true
    },
    icon: {
      type: String,
      value: "vtu-icon vtu-icon-jiazai"
    },
    iconColor: {
      type: String,
      value: null
    },
    img: {
      type: String,
      value: null
    },
    imgMode: {
      type: String,
      value: "widthFix"
    },
    label: {
      type: String,
      value: null
    },
    loadLabel: {
      type: String,
      value: null
    },
    endLabel: {
      type: String,
      value: null
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadMoreData() {
      this.triggerEvent('load');
    }
  }
})
