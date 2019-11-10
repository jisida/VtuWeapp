Page({
  data: {},
  click: function(e) {
    wx.showToast({
      title: "正在删除[{0}]{1}标签".format(e.currentTarget.dataset.label, e.currentTarget.dataset.index),
      icon: 'none',
      duration: 2000
    });
  }
});
