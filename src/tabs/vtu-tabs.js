import { VtuComponent } from '../assets/package/component';
VtuComponent({
  externalClasses: ['tab-class', 'tab-li-class', 'tab-active-class', 'tab-content-class'],
  // 定义和使用组件间关系
  relations: {
    '../tab/vtu-tab': {
      type: 'descendant',
      linked: function(target) {
        this.data.tabList.push(target.data)
        this.setData({
          tabList: this.data.tabList
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
      type: String,
      observer: function(value, value2){
        if (value != value2) {
          this.changeContent()
          this.changeLine()
        }
      }
    },
    current: {
      value: -1,
      type: Number,
      observer: function(value, value2){
        if (value != value2 && this.data.tabList.length > 0) {
          this.setData({
            value: this.data.tabList[value].name
          })
        }
      }
    },
    // 平均分布，自动撑开
    isAverage: {
      value: true,
      type: Boolean
    },
    // 滚动阈值，设置标签数量超过多少个可滚动
    swipeThreshold: {
      value: 4,
      type: Number
    },
    // 默认字体颜色
    color: {
      value: null,
      type: String
    },
    // 选中字体颜色
    activeColor: {
      value: null,
      type: String
    },
    // 默认背景颜色
    bgColor: {
      value: null,
      type: String
    },
    // 选中背景颜色
    activeBgColor: {
      value: null,
      type: String
    },
    // 是否显示线段
    line: {
      value: true,
      type: Boolean
    },
    // 底部线段颜色
    lineColor: {
      value: null,
      type: String
    },
    // 是否显示导航底部边框
    border: {
      value: true,
      type: Boolean
    },
    // 元素位置
    itemAlign: {
      value: "left",
      type: String
    },
    // 圆角
    round: {
      type: Boolean,
      value: false
    },
    // 适应父类高度
    fill: {
      type: Boolean,
      value: false
    },
    fixed: {
      type: Boolean,
      value: false
    },
    fixedTop: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabList: [],
    lineAnimation: null,
    tabLeft: 0
  },

  ready:function(){
    let self = this

    if(!this.data.value && (this.data.current || this.data.current == 0)) {
      this.setData({
        value: this.data.tabList[this.data.current].name
      })
    }
    var nodes = this.getRelationNodes('../tab/vtu-tab')
    this.createSelectorQuery().select("#Vtu_Tabs").boundingClientRect(function (rect) {
      self.setData({
        tabLeft: rect.left
      })
      self.changeLine()
    }).exec()
    this.changeContent()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateTabs: function(target) {
      let hasItem = false
      for (let i = 0; i < this.data.tabList.length; i++) {
        if (this.data.tabList[i].name == target.data.name) {
          this.data.tabList[i] = target.data
          hasItem = true
          break
        }
      }
      if (hasItem) {
        this.setData({
          tabList: this.data.tabList
        })
      }
    },
    select: function(e) {
      let item = e.currentTarget.dataset.item
      let index = e.currentTarget.dataset.index
      this.setData({
        value: item.name,
        current: index
      })
      this.triggerEvent('change', {
        name: item.name,
        current: index
      });
    },

    changeContent: function() {
      let self = this
      let nodes = this.getRelationNodes('../tab/vtu-tab');
      nodes.map((v, i)=>{
        nodes[i]._active(self.data.value == v.data.name)
      })
    },

    changeLine: function() {
      let self = this
      if (!this.data.line) return
      let id = "menu_" + this.data.value
      self.createSelectorQuery().in(this)['selectAll'](".Vtu_Tabs_Tab_Li").boundingClientRect(function (rects) {
        let active = 0
        for (let i = 0; i < rects.length; i++) {
          if (id == rects[i].id) {
            active = i;
            break
          }
        }
        let rect = rects[active]
        var left = rects
          .slice(0, active)
          .reduce(function (prev, curr) { return prev + curr.width; }, 0);
        if(rect) {
          let width = rect.width * 0.5;
          left += (rect.width - width) / 2 + (rects[0].left > 0 ?(rects[0].left - self.data.tabLeft):0);
          var line = wx.createAnimation({})
          line.width(width).left(left).step({ duration: 300 })
          self.setData({
            lineAnimation: line.export()
          })
        }
      }).exec()
    }
  }
})
