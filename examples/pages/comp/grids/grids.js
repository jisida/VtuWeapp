const app = getApp();
Page({
  data: {
    value1: 0
  },

  click(e) {
    console.log(111111, e)
    wx.showToast({
      title: "点击第！" + e.detail.index + "个,参数：" + e.currentTarget.dataset.label,
      icon: 'none',
      duration: 2000
    });
  }
});
