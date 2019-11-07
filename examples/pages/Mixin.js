import PageInterc from "PageInterc";
export default class Mixin extends PageInterc{
  constructor(...args) {
    super(...args);
    super.$init({
      imageContent: [],
      activeMenuIndex: 0
    });
  }

  /**
   * 生命周期函数--监听页面显示
   * @param this    实例对象
   * @param proto    原型对象
   */
  onShowSuper(proto) {
    wx.setNavigationBarColor({
      frontColor: "#000000",
      backgroundColor: "#ffffff"
    })
    super.onShowSuper(proto||this);
  }

  /**
   * 自定义分享
   */
  onShareAppMessage = function (e) {
    return {
      title: "简单易用，色彩丰富的小程序组件库",
      imageUrl: "https://activity.vtuzx.com/common/companyInfo/app/wxabee6c54c10ef7e0/minipg.png"
    }
  }

  /**
   * 滑块切换
   * @param e
   */
  swiperBindChange = function(e){
    this.setData({
      activeMenuIndex: e.detail.current
    })
  }
}
