Page({
  data: {
    value1: 3
  },

  bindChange (e) {
    this.setData({
      value1: e.detail
    })
  },

  bindAsyncChange (e) {
    let self = this
    wx.showLoading({
      title: '处理中...'
    })
    setTimeout(function() {
      self.setData({
        value1: e.detail
      })
      wx.hideLoading();
    }, 2000)
  }
});
