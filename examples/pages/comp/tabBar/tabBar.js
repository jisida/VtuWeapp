Page({
  data: {
    current: 0,
    type: 1,
    swiperHeight: 0,
    windowHeight: wx.getSystemInfoSync().windowHeight
  },

  navBarLoad: function(e) {
    this.setData({
      swiperHeight: this.data.windowHeight - e.detail.navBarHeight - 55
    })
  },

  change: function(e) {
    this.setData({
      current: e.detail.current
    })
  },

  radioChange: function(e) {
    this.setData({
      type: e.detail.value
    })
  }
});
