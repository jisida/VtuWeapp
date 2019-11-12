import { VtuComponent } from '../assets/package/component';
VtuComponent({
  externalClasses: ['line-class', "label-class"],
  /**
   * 组件的属性列表
   */
  properties: {
    // 进度值
    value: {
      value: 0,
      type: Number,
      observer: function(val, oldVal){
        if (val > 100) {
          val = 100
        } else if (val < 0) {
          val = 0
        }
        this.setData({
          value: val
        })
        this.animationEvent(oldVal)
      }
    },
    // 进度条类型 line/circle/dashboard
    type: {
      type: String,
      value: 'line'
    },
    // 高度
    strokeWidth: {
      value: "15px",
      type: String
    },
    //进度条显示文字内置在进度条内（只在 type=line 时可用）
    textInside: {
      type: Boolean,
      value: false
    },
    // 颜色
    color: {
      type: String,
      value: null
    },
    // 是否显示进度条文字内容
    showText: {
      type: Boolean,
      value: true
    },
    // 进度条当前状态 success/error/warning
    status: {
      type: String,
      value: null
    },
    // 是否为条纹
    stripe: {
      type: Boolean,
      value: false
    },
    fontColor: {
      type: String,
      value: null
    },
    // 圆环条背景
    circleBgColor: {
      type: String,
      value: "#ddd"
    },
    // 圆环中心区域背景
    circleCenterColor: {
      type:String,
      value: "transparent"
    },
    circleDiam: {
      type: Number,
      value: 100
    },
    circleBorderSize: {
      type: Number,
      value: 5
    },
    userSlot: {
      value: false,
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    widthAnimation: null,
    leftRotate: -225,
    rightRotate: -225
  },

  ready:function(){
    let self = this
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * 显示动画
     */
    animationEvent: function(oldVal){
      let self = this
      let process = this.data.value
      if(self.data.type == 'line') {
        let process = this.data.value;
        var animation = wx.createAnimation({})
        animation.width(process + '%').step({ duration: 400 })
        this.setData({
          widthAnimation: animation.export()
        })
      } else if (self.data.type == 'circle') {
        if (oldVal > 50 && process < 50) {
          this.setData({
            leftRotate: -225,
          })
          setTimeout(function() {
            self.setData({
              rightRotate: -225 + (process / 100 * 360)
            })
          }, 500)
        } else if (oldVal < 50 && process > 50) {
          this.setData({
            rightRotate: -45
          })
          setTimeout(function() {
            self.setData({
              leftRotate: -225 + ((process - 50) / 100 * 360),
            })
          }, 500)
        } else {
          if (process > 50) {
            this.setData({
              leftRotate: -225 + ((process - 50) / 100 * 360),
              rightRotate: -45
            })
          } else {
            this.setData({
              leftRotate: -225,
              rightRotate: -225 + (process / 100 * 360)
            })
          }
        }
      }
    }
  }
})
