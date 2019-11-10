Page({
  data: {
    value1: 1,
    showProp: false
  },

  change: function(e) {
    this.setData({
      value1: e.detail.value
    })
  },

  openRadioProp: function(){
    this.setData({
      showProp: true
    })
  }
});
