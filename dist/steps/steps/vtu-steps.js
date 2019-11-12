import { VtuComponent } from '../../assets/package/component';
VtuComponent({
  externalClasses: ['item-class'],
  // 定义和使用组件间关系
  relations: {
    '../step/vtu-step': {
      type: 'child',
      linked: function(target) {
        this.data.stepsList.push(target.data)
        this.setData({
          stepsList: this.data.stepsList
        })
      }
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    // 当前激活标签的索引
    value: {
      value: null,
      type: Number
    },
    // 默认步骤样式  number / spot / icon / square
    shape: {
      type: String,
      value: "number"
    },
    // 居中
    alignCenter: {
      type: Boolean,
      value: false
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
    },
    // 显示方向
    direction: {
      type: String,
      value: "horizontal"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    stepsList: []
  },

  ready:function(){
    let self = this
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})
