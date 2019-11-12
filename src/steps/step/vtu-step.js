import { VtuComponent } from '../../assets/package/component';
VtuComponent({
  // 定义和使用组件间关系
  relations: {
    '../steps/vtu-steps': {
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
    // 步骤名称
    title: {
      type: String,
      value: null
    },
    // 唯一标识
    name: {
      type: String,
      value: null
    },
    // 步骤描述
    des: {
      type: String,
      value: null
    },
    // 状态 wait / success / warning / error
    status: {
      type: String,
      value: null
    },
    // 图标
    icon: {
      type: String,
      value: null
    },
    // 激活图标
    activeIcon: {
      type: String,
      value: null
    },
    // 默认颜色
    color: {
      type: String,
      value: null
    },
    // 激活颜色
    activeColor: {
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
