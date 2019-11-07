import { VtuComponent } from '../../assets/package/component';
VtuComponent({
  externalClasses: ['hover-class'],
  // 定义和使用组件间关系
  relations: {
    '../row/vtu-layout-row': {
      type: 'parent'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    span: {
      type: Number,
      value: 12
    },
    // 栅格左侧的间隔格数
    offset: {
      type: Number,
      value: 0
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    gutter: 0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    setGutter(gutter){
      this.setData({
        gutter: gutter
      })
    }
  }
})
