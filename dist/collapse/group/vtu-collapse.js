import { VtuComponent } from '../../assets/package/component';
VtuComponent({
  // 定义和使用组件间关系
  relations: {
    '../item/vtu-collapse-item': {
      type: 'child'
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    accordion: {
      type: Boolean,
      value: false
    },
    current: {
      type: Number,
      optionalTypes: [Array, String, Object],
      value: null
    },
    color: {
      type: String,
      value: null
    },
    activeColor: {
      type: String,
      value: null
    },
    gutter: {
      type: String,
      value: 0
    }
  },
  observers: {
    'current': function() {
      this.init()
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  ready:function(){
    this.init()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init: function() {
      let self = this
      let nodes = this.getRelationNodes('../item/vtu-collapse-item');
      nodes.map((v, i)=>{
        if (this.data.current != null) {
          let flg = false;
          if (!self.data.accordion) {
            let current = self.data.current
            if (typeof current == 'string' || typeof current == 'number'){
              current = [parseInt(current)]
            }
            if (current.indexOf(i) > -1) {
              flg = true
            } else {
              flg = false
            }
          } else {
            if (typeof self.data.current == 'number' && self.data.current == i) {
              flg = true
            }
          }
          nodes[i].setFlg(flg)
        }
        nodes[i].setConfig({
          current: i,
          color: self.data.color,
          activeColor: self.data.activeColor,
          gutter: self.data.gutter
        })
      })
    },
    change: function(index) {
      let self = this
      let current = null
      if(self.data.accordion) {
        if (parseInt(self.data.current) == index) {
          current = ""
        } else {
          current = index
        }
      } else {
        current = self.data.current
        if (current == null) current = []
        if (typeof current == 'string' || typeof current == 'number'){
          current = [parseInt(current)]
        }
        if (current.indexOf(index) > -1) {
          current.splice(current.indexOf(index), 1)
        } else {
          current.push(index)
        }
      }
      self.setData({
        current: current
      })
      this.triggerEvent('change', current);
    }
  }
})
