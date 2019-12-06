import { VtuComponent } from '../../assets/package/component';
VtuComponent({

  externalClasses: ['icon-class', 'checkbox-class', 'checkbox-icon-class', 'label-class'],

  // 定义和使用组件间关系
  relations: {
    '../checkbox/vtu-checkbox': {
      type: 'child',
      linked: function(target) {
        this.data.checkboxList.push(target.data)
        this.setData({
          checkboxList: this.data.checkboxList
        })
      }
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    model: {
      type: Array,
      value: [],
      observer: function () {
        this.arrangeData();
      }
    },
    align: {
      type: String,
      value: "left"
    },
    activeColor: {
      type: String,
      value: null
    },
    checkboxIcon: {
      type: String,
      value: 'vtu-icon vtu-icon-duoxuan1'
    },
    activeCheckboxIcon: {
      type: String,
      value: "vtu-icon vtu-icon-duoxuan"
    },
    activeCheckboxColor: {
      type: String,
      value: null
    },
    max: {
      type: Number,
      value: 0
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
    checkboxList: []
  },

  ready:function(){
    this.arrangeData()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    arrangeData() {
      for (let i = 0; i < this.data.checkboxList.length; i++) {
        if (this.data.model.indexOf(this.data.checkboxList[i].value) > -1) {
          this.data.checkboxList[i].checked = true
        } else {
          this.data.checkboxList[i].checked = false
        }
      }
      this.setData({
        checkboxList: this.data.checkboxList
      })
    },
    checkboxChange(e){
      let value = e.currentTarget.dataset.value
      let index = this.data.model.indexOf(value)
      if (index > -1) {
        this.data.model.splice(index, 1)
      } else {
        if (this.data.max &&this.data.model.length >= this.data.max) {
          wx.showToast({
            title: "最多可选择{0}个选项！".format(this.data.max),
            icon: 'none',
            duration: 2000
          });
          return
        }
        this.data.model.push(value)
      }
      this.setData({
        model: this.data.model
      })
      this.arrangeData()
      this.triggerEvent('change', {
        value: this.data.model
      });
    }
  }
})
