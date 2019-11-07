// 路由设置
export default {
  /**
   * 首页
   *
   */
  toIndexPage:  function(){
    wx.reLaunch({
      url: '/pages/switchTab/temp/temp'
    });
  },

  /**
   * 关于页面
*/
  toAboutPage:  function(e){
    this.$route({query: {}, className: 'AboutPage'});
  },
}
