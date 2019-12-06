Page({
  data: {
  },

  slideopen: function (e) {
    wx.showToast({
      title: "菜单打开",
      icon: 'none',
      duration: 2000
    });
  },

  slideclose: function (e) {
    wx.showToast({
      title: "菜单关闭",
      icon: 'none',
      duration: 2000
    });
  }
});
