import { VtuComponent } from '../../assets/package/component';
VtuComponent({
  externalClasses: ['title-class', 'content-class'],
  // 定义和使用组件间关系
  relations: {
    '../group/vtu-collapse': {
      type: 'parent'
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    /** 标题 */
    title: {
      value: null,
      type: String
    },
    /** 图标icon */
    icon: {
      value: null,
      type: String
    },
    iconColor: {
      value: null,
      type: String
    },
    titleColor: {
      value: null,
      type: String
    },
    open: {
      value: false,
      type: Boolean
    },
    name: {
      value: null,
      type: String
    },
    disabled: {
      value: false,
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0,
    color: null,
    activeColor: null,
    gutter: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setConfig: function(param) {
      this.setData(param)
    },
    setFlg: function(flg) {
      this.setData({
        open: flg
      })
    },
    clickItem: function() {
      let self = this
      let nodes = this.getRelationNodes('../group/vtu-collapse');
      nodes.map((v, i)=>{
        nodes[i].change(self.data.current)
      })
    }
  }
})
