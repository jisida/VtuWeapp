const app = getApp();
Page({
  data: {
    loading: false
  },

  onLoad: function() {
    this.startLoading()
  },

  startLoading: function() {
    let self = this
    self.setData({
      loading: true
    })
    setTimeout(function() {
      self.setData({
        loading: false
      })
    }, 2000)
  }
});
