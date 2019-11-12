import { VtuComponent } from '../../assets/package/component';
VtuComponent({

  // 定义和使用组件间关系
  relations: {
    '../group/vtu-checkbox-group': {
      type: 'parent'
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: String,
      value: null
    },
    label: {
      type: String,
      value: null
    },
    icon: {
      type: String,
      value: null
    },
    disabled: {
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
  }
})
