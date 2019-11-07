import { VtuComponent } from '../assets/package/component';
VtuComponent({
  externalClasses: ['icon-class', 'content-class', 'close-class', 'img-class', 'label-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      value: true,
      type: Boolean
    },
    icon: {
      type: String,
      value: null
    },
    type: {
      type: String,
      value: "default"
    },
    showClose: {
      type: Boolean,
      value: false
    },
    scroll: {
      type: Boolean,
      value: false
    },
    speed: {
      type: Number,
      value: 1
    },
    color: {
      type: String,
      value: null
    },
    bgColor: {
      type: String,
      value: null
    },
    content: {
      type: String,
      value: null
    },
    direction: {
      type: String,
      value: "level"
    },
    noticeList: {
      type: Array,
      value: []
    },
    imgSrc: {
      type: String,
      value: null
    },
    imgMode: {
      type: String,
      value: "widthFix"
    },
    label: {
      type: String,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    marqueeDistance: 0, //初始滚动距离
    marquee_margin: 0,
    interval: 20,
    current: 0
  },

  ready:function(){
    let self = this
    if (this.data.scroll && this.data.direction == 'level'){
      let contentWidth = 0, contentPanel = 0
      self.createSelectorQuery().select("#Vtu_NoticeBar_Content").boundingClientRect(function (rect) {
        contentPanel = rect.width
        self.createSelectorQuery().select("#Vtu_NoticeBar_Content_Text").boundingClientRect(function (rect2) {
          contentWidth = rect2.width
          self.setData({
            length: contentWidth,
            windowWidth: contentPanel,
            marqueeDistance: contentPanel,
            marquee_margin: contentPanel
          });
          self.scrolltxt();
        }).exec()
      }).exec()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    scrolltxt: function () {
      var that = this;
      var length = that.data.length;//滚动文字的宽度
      var windowWidth = that.data.windowWidth;//屏幕宽度
      if (length > windowWidth) {
        var interval = setInterval(function () {
          var maxscrollwidth = length + that.data.marquee_margin;
          var crentleft = that.data.marqueeDistance;
          if (crentleft < maxscrollwidth && that.data.show) {//判断是否滚动到最大宽度
            that.setData({
              marqueeDistance: crentleft + that.data.speed
            })
          } else {
            that.setData({
              marqueeDistance: windowWidth // 直接重新滚动
            });
            clearInterval(interval);
            that.scrolltxt();
          }
        }, that.data.interval);
      } else {
        that.setData({marquee_margin: "1000"});//只显示一条不滚动右边间距加大，防止重复显示
      }
    },

      /**
     * 关闭
     */
    close: function() {
      this.setData({
        show: false
      })
    },
    swiperChange: function(e) {
      this.setData({
        current: e.detail.current
      })
    },
    click: function(e) {
      this.triggerEvent('click', {
        current: this.data.current
      });
    }
  }
})
