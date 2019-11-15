Page({
  data: {
    value1: 3
  },

  bindChange: function(e) {
    this.setData({
      value1: e.detail.value
    })
  },

  bindAsyncChange: function(e) {
    let self = this
    wx.showLoading({
      title: '处理中...'
    })
    setTimeout(function() {
      self.setData({
        value1: e.detail.value
      })
      wx.hideLoading();
    }, 2000)
  }
});
