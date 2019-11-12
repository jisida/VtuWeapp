import { VtuComponent } from '../assets/package/component';
VtuComponent({
  externalClasses: ['icon-class', 'label-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    fontColor: {
      type: String,
      value: null
    },
    bgColor: {
      type: String,
      value: null
    },
    type: {
      type: String,
      value: "default"
    },
    size: {
      type: String,
      value: "small"
    },
    shape: {
      type: String,
      value: "round"
    },
    status: {
      type: String,
      value: null
    },
    icon: {
      type: String,
      value: null
    },
    delete: {
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
