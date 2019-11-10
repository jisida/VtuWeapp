Page({
  data: {
    show1: false,
    value1: 3
  },

  bindAsyncChange: function(e) {
    let self = this
    self.setData({
      show1: true
    })
    setTimeout(function() {
      self.setData({
        value1: e.detail,
        show1: false
      })
      wx.hideLoading();
    }, 2000)
  }
});
