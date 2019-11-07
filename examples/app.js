import wxUtils from '/package/utils/Wx'
App({
  globalData: {
    appId: 'wxabee6c54c10ef7e0',
    appName: 'vtuUI'
  },

  onLaunch: function () {
    var self = this;
    wxUtils.$wx_updateEdition();
    wxUtils.$wx_launch(this);
  }
})
