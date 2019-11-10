Page({
  data: {
    imgList: [
      {
        url: "https://activity.vtuzx.com/doc/vtuui/weapp/avatar/1.png"
      },
      {
        url: "https://activity.vtuzx.com/doc/vtuui/weapp/avatar/2.png"
      },
      {
        url: "https://activity.vtuzx.com/doc/vtuui/weapp/avatar/3.png"
      }
    ]
  },
  change: function (e) {
    wx.showToast({
      title: "添加了图片",
      icon: 'none',
      duration: 2000
    });
    console.log("添加了图片", e)
  },
  remove: function (e) {
    wx.showToast({
      title: "移除了图片",
      icon: 'none',
      duration: 2000
    });
    console.log("移除了图片", e)
  },
  preview: function (e) {
    wx.showToast({
      title: "预览了图片",
      icon: 'none',
      duration: 2000
    });
    console.log("预览了图片", e)
  }
});
