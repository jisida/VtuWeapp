const app = getApp();
Page({
  data: {
    value1: 0
  },

  next1 (){
    this.setData({
      value1: this.data.value1>2?0: this.data.value1 + 1
    })
  }
});
