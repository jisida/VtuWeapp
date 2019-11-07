const app = getApp();
Page({
  data: {
  },
  change (e) {
    wx.showToast({
      title: "当前选择{0}".format(e.detail.toString()),
      icon: 'none',
      duration: 2000
    });
  }
});
