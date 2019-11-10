Page({
  data: {
    value2: 'name1',

    tabTop: 0,
    navBarHeight: 0,
    tabFixed: false
  },

  onLoad: function() {
    this.getTabTop()
  },

  navBarLoad: function(e) {
    this.setData({
      navBarHeight: e.detail.navBarHeight
    })
  },

  /**
   * 获取高度
   */
  getTabTop: function() {
    let self = this
    self.createSelectorQuery().select("#fixTab").boundingClientRect(function (res) {
      self.setData({
        tabTop: res.top -self.data.navBarHeight
      })
    }).exec()
  },

  /**
   * 监听页面滚动事件
   */
  onPageScroll: function(e) {
    if (e.scrollTop > this.data.tabTop && !this.data.tabFixed) {
      this.setData({
        tabFixed: true
      })
    } else if (e.scrollTop <= this.data.tabTop && this.data.tabFixed) {
      this.setData({
        tabFixed: false
      })
    }
  },

  change(e) {
    this.setData({
      value2: e.detail.name
    })
  }
});
