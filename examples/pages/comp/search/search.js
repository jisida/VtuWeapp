Page({
  data: {
    value1: 3
  },

  clear: function(e) {
    wx.showToast({
      title: "清除成功",
      icon: 'none',
      duration: 2000
    });
    console.log("清空成功")
  },

  focus: function(e) {
    wx.showToast({
      title: "获取焦点",
      icon: 'none',
      duration: 2000
    });
    console.log("获取焦点")
  },

  blur: function(e) {
    wx.showToast({
      title: "离开焦点",
      icon: 'none',
      duration: 2000
    });
    console.log("离开焦点")
  },

  confirm: function(e) {
    wx.showToast({
      title: "confirm成功",
      icon: 'none',
      duration: 2000
    });
    console.log("confirm成功")
  },
});
