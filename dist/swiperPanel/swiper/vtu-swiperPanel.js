import { VtuComponent } from '../../assets/package/component';
VtuComponent({
  externalClasses: ['swiper_class', 'swiper_item_class', 'swiper_item_class_scroll'],
  // 定义和使用组件间关系
  relations: {
    '../item/vtu-swiperPanel-item': {
      type: 'child',
      linked: function(target) {
        this.data.swiperList.push(target.data)
        this.setData({
          swiperList: this.data.swiperList
        })
      }
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    current: {
      type: Number,
      value: 0
    },
    height: {
      type: String,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperList: []
  },

  ready:function(){
  },

  /**
   * 组件的方法列表
   */
  methods: {
    select: function(e) {
      let index = e.detail.current
      this.setData({
        current: index
      })
      this.triggerEvent('change', {
        current: index
      });
    },
    scrolltoupper(e){
      let index = e.currentTarget.dataset.index
      let nodes = this.getRelationNodes('../item/vtu-swiperPanel-item');
      nodes[index].scrolltoupper({
        detail: e.detail,
        index: index
      })
    },
    scrolltolower(e){
      let index = e.currentTarget.dataset.index
      let nodes = this.getRelationNodes('../item/vtu-swiperPanel-item');
      nodes[index].scrolltolower({
        detail: e.detail,
        index: index
      })
    },
    scroll(e){
      let index = e.currentTarget.dataset.index
      let nodes = this.getRelationNodes('../item/vtu-swiperPanel-item');
      nodes[index].scroll({
        detail: e.detail,
        index: index
      })
    }
  }
})
