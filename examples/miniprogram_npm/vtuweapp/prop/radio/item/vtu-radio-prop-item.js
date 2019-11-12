import { VtuComponent } from '../../../assets/package/component';
VtuComponent({
  // 定义和使用组件间关系
  relations: {
    '../prop/vtu-radio-prop': {
      type: 'parent',
      linked: function(target) {
        // 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
      },
      linkChanged: function(target) {
        // 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
      },
      unlinked: function(target) {
        // 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
      }
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
