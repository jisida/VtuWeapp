import { VtuComponent } from '../../assets/package/component';
VtuComponent({
  externalClasses: ['icon-class', 'radio-class', 'radio-icon-class', 'label-class'],
  // 定义和使用组件间关系
  relations: {
    '../radio/vtu-radio': {
      type: 'child',
      linked: function(target) {
        this.data.radioList.push(target.data)
        this.setData({
          radioList: this.data.radioList
        })
      }
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    model: {
      type: String,
      value: null
    },
    align: {
      type: String,
      value: "left"
    },
    activeColor: {
      type: String,
      value: null
    },
    radioIcon: {
      type: String,
      value: 'vtu-icon vtu-icon-danxuan'
    },
    activeRadioIcon: {
      type: String,
      value: "vtu-icon vtu-icon-danxuanfill"
    },
    activeRadioColor: {
      type: String,
      value: null
    },
    direction: {
      type: String,
      value: "vertical"
    },
    horizontalNumber: {
      type: Number,
      value: 3
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    radioList: []
  },

  ready:function(){
    let self = this
  },

  /**
   * 组件的方法列表
   */
  methods: {
    radioChange(e){
      let value = e.currentTarget.dataset.value
      if (value != this.data.model) {
        this.setData({
          model: value
        })
        this.triggerEvent('change', {
          value: value
        });
      }
    }
  }
})
