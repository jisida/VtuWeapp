import { VtuComponent } from '../../assets/package/component';
VtuComponent({
  externalClasses: ['custom-class', 'content-class', 'bar-class', 'item-class', 'icon-class', 'img-class', 'label-class'],

  // 定义和使用组件间关系
  relations: {
    '../item/vtu-tabbar-item': {
      type: 'child',
      linked: function(target) {
        this.data.tabbarList.push(target.data)
        this.setData({
          tabbarList: this.data.tabbarList
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
    // 背景颜色
    bgColor: {
      type: String,
      value: null
    },
    activeColor: {
      type: String,
      value: null
    },
    iconColor: {
      type: String,
      value: null
    },
    activeIconColor: {
      type: String,
      value: null
    },
    // 默认字体颜色
    fontColor:{
      type: String,
      value: null
    },
    activeFontColor: {
      type: String,
      value: null
    },
    // 颜色
    color:{
      type: String,
      value: null
    },
    // 颜色
    name:{
      type: String,
      value: null
    },
    mode: {
      type: String,
      value: 'single'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabbarList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    select(e){
      let index = e.currentTarget.dataset.index
      this.data.tabbarList[index].animation = null
      var icon = wx.createAnimation({})
      icon.scale(0.5, 0.5).step({ duration: 100 });
      icon.scale(1, 1).step({ duration: 100 });
      this.setData({
        current: index,
        ["tabbarList[{0}].animation".format(index)]: icon.export()
      })

      this.triggerEvent('change', {
        current: index
      });
    }
  }
})
