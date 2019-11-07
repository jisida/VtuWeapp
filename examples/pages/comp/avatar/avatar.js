const app = getApp();
Page({
  data: {
  },

  select: function (e) {
    wx.showToast({
      title: "您点击了第！" + e.currentTarget.dataset.index + "个头像",
      icon: 'none',
      duration: 2000
    });
  }
});
