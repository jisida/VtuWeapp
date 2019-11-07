import { VtuComponent } from '../assets/package/component';
VtuComponent({
  externalClasses: ['custom-class', 'content-class', 'icon-class', 'image-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    src: {
      type: String,
      value: null
    },
    smooth: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: null
    },
    bgColor: {
      type: String,
      value: null
    },
    size: {
      type: String,
      value: "default"
    },
    content: {
      type: String,
      value: null
    },
    width: {
      type: String,
      value: null
    }
  }
})
