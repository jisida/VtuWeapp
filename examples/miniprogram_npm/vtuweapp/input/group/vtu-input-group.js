import { VtuComponent } from '../../assets/package/component';
VtuComponent({
  // 定义和使用组件间关系
  relations: {
    '../item/vtu-input': {
      type: 'child'
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    // 圆角
    round: {
      type: Boolean,
      value: false
    },
    bgColor: {
      type: String,
      value: "#Fff"
    },
    title: {
      type: String,
      value: null
    },
    // 卡片
    card: {
      type: Boolean,
      value: false
    },
    shadow: {
      type: String,
      value: null
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
  }
})
