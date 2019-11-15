import { VtuComponent } from '../assets/package/component';
VtuComponent({
  externalClasses: ['item-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      value: 0,
      type: Number
    },
    // 图标大小，需指定单位
    size: {
      value: "20px",
      type: String
    },
    // 总数
    count: {
      value: 5,
      type: Number
    },
    // 未选中时颜色
    color: {
      value: null,
      type: String
    },
    // 选中时颜色
    activeColor: {
      value: null,
      type: String
    },
    // 未选中时图标
    icon: {
      value: "vtu-icon vtu-icon-biaoxing",
      type: String
    },
    // 选中时图标
    activeIcon: {
      value: "vtu-icon vtu-icon-biaoxingfill",
      type: String
    },
    // 只读
    readonly: {
      type: Boolean,
      value: false
    },
    //禁用
    disabled: {
      type: Boolean,
      value: false
    },
    // 异步变更，为 true 时值不变化，仅触发事件
    asyncChange: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    bindChange: function(e) {
      let index = parseFloat(e.currentTarget.dataset.index) + 1;
      if(!this.data.asyncChange) {
        this.setData({
          value: index
        })
      }
      this.triggerEvent('change', {
        value: index
      });
    }
  }
})
