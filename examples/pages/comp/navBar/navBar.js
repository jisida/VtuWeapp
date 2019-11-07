const app = getApp();
Page({
  data: {
    style: 7,
    tabValue: 'name2',
    contBarHeight: 0
  },

  radioChange (e) {
    this.setData({
      style: e.detail.value
    })
  },

  headLoad (e) {
    this.setData({
      contBarHeight: e.detail.contBarHeight
    })
  }
});
