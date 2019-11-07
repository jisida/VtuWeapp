const app = getApp();
Page({
  data: {
    type: 'name1'
  },

  change(e){
    this.setData({
      type: e.detail.name
    })
  }
});
