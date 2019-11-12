import { VtuComponent } from '../assets/package/component';
VtuComponent({
  externalClasses: ["swiper-class", "swiper-item-class", "swiper-item-img-class", 'swiper-content-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: 'default',
      observer: function(value){
        if (value == 'card') {
          this.setData({
            circular: true
          })
        }
      }
    },
    // 图片列表
    list: {
      value: [],
      type: Array
    },
    // 是否显示面板指示点
    indicatorDots: {
      type: Boolean,
      value: false
    },
    // 指示点颜色
    indicatorColor: {
      type: String,
      value: "rgba(0, 0, 0, .3)"
    },
    // 当前选中的指示点颜色
    indicatorActiveColor: {
      type: String,
      value: "rgba(109,109,109,0.76)"
    },
    // 是否自动切换
    autoplay: {
      type: Boolean,
      value: false
    },
    // 当前所在滑块的 index
    current: {
      type: Number,
      value: 0
    },
    // 自动切换时间间隔
    interval: {
      type: Number,
      value: 5000
    },
    // 滑动动画时长
    duration: {
      type: Number,
      value: 500
    },
    // 是否采用衔接滑动
    circular: {
      type: Boolean,
      value: false
    },
    // 滑动方向是否为纵向
    vertical: {
      type: Boolean,
      value: false
    },
    // 指定 swiper 切换缓动动画类型
    easingFunction: {
      type: String,
      value: "default"
    },
    // 同时显示的滑块数量
    displayMultipleItems: {
      type: Number,
      value: 1
    },
    dotType: {
      type: String,
      value: "default"
    },
    // 背景颜色
    dotFontColor: {
      type: String,
      value: "#fff"
    },
    // 轮播图高度
    height: {
      type: String,
      value: "200px"
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  ready:function(){
    let self = this
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change: function(e) {
      this.setData({
        current: e.detail.current
      })
      this.triggerEvent('change', {
        current: e.detail.current
      });
    },
    animationfinish: function(e) {
      this.triggerEvent('animationfinish', e.detail);
    },
    transition: function(e) {
      this.triggerEvent('transition', e.detail);
    }
  }
})
