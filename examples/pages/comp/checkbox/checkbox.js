Page({
  data: {
    value1: ['2', '4'],
    showProp: false
  },

  change: function(e) {
    this.setData({
      value1: e.detail.value
    })
  },

  openCheckboxProp: function(){
    this.setData({
      showProp: true
    })
  }
});
