Page({
  data: {
    uploadImgPath1: "https://activity.vtuzx.com/doc/vtuUI/weapp/avatar/1.png",
    uploadImgPath2: "https://activity.vtuzx.com/doc/vtuUI/weapp/avatar/2.png"
  },

  select: function (e) {
    wx.showToast({
      title: "您点击了第！" + e.currentTarget.dataset.index + "个头像",
      icon: 'none',
      duration: 2000
    });
  },

  uploadImg1: function (e) {
    this.setData({
      uploadImgPath1: e.detail.path
    })
  },

  uploadImg2: function (e) {
    this.setData({
      uploadImgPath2: e.detail.path
    })
  }
});
