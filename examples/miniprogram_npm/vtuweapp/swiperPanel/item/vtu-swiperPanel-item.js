import { VtuComponent } from '../../assets/package/component';
VtuComponent({
  // 定义和使用组件间关系
  relations: {
    '../swiper/vtu-swiperPanel': {
      type: 'parent'
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    // 当前激活标签的索引
    name: {
      type: String,
      value: null
    },
    scrollIntoView: {
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
    scrolltoupper(e){
      this.triggerEvent('scrolltoupper', e);
    },
    scrolltolower(e){
      this.triggerEvent('scrolltolower', e);
    },
    scroll(e){
      this.triggerEvent('scroll', e);
    }
  }
})
