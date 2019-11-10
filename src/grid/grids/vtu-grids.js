import { VtuComponent } from '../../assets/package/component';
VtuComponent({
  externalClasses: ['item-class'],
  // 定义和使用组件间关系
  relations: {
    '../grid/vtu-grid': {
      type: 'child',
      linked: function(target) {
        this.data.gridList.push(target.data)
        this.setData({
          gridList: this.data.gridList
        })
      }
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    // 列数
    col: {
      value: 3,
      type: Number
    },
    // 边框
    border: {
      type: Boolean,
      value: false
    },
    // 图标颜色
    iconColor: {
      type: String,
      value: null
    },
    // 图标尺寸
    iconSize: {
      type: String,
      value: null
    },
    // 图标颜色
    fontColor: {
      type: String,
      value: null
    },
    // 图标尺寸
    fontSize: {
      type: String,
      value: null
    },
    imgWidth: {
      type: String,
      value: null
    },
    imgHeight: {
      type: String,
      value: null
    },
    imgMode: {
      type: String,
      value: "aspectFill"
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    gridList: []
  },

  ready:function(){
    let self = this
  },

  /**
   * 组件的方法列表
   */
  methods: {
    click: function(e) {
      let index = parseInt(e.currentTarget.dataset.index)
      let nodes = this.getRelationNodes('../grid/vtu-grid');
      if (nodes[index].data.disabled) return
      nodes[index].bindClick(e)
    },
  }
})
