const app = getApp();
import Mixin from "../../Mixin";
class SwiperPage extends Mixin{
  constructor(...args) {
    super(...args);
    super.$init({
      current: 1,
      imageList: [
        {
          url: 'https://activity.vtuzx.com/doc/vtuUI/weapp/swiper/1.png',
          mode: "widthFix"
        },
        {
          url: 'https://activity.vtuzx.com/doc/vtuUI/weapp/swiper/2.png',
          mode: "widthFix"
        },
        {
          url: 'https://activity.vtuzx.com/doc/vtuUI/weapp/swiper/3.png',
          mode: "widthFix"
        },
        {
          url: 'https://activity.vtuzx.com/doc/vtuUI/weapp/swiper/4.png',
          mode: "widthFix"
        },
        {
          url: 'https://activity.vtuzx.com/doc/vtuUI/weapp/swiper/5.png',
          mode: "widthFix"
        }
      ],
      imageList2: [
        {
          url: 'https://activity.vtuzx.com/doc/vtuUI/weapp/swiper/2.png',
          content: '红米7大电量18个月质保智能学生老年人全网通手机小米官方旗舰店redmi7A官网正品xiaomi红米note7',
          mode: "widthFix"
        },
        {
          url: 'https://activity.vtuzx.com/doc/vtuUI/weapp/swiper/4.png',
          content: 'OPPO K3 oppok3手机全新机新款上市oppok3限量超薄oppoa5手机 a7x r17oppor15x 0ppok3r90pp0k1',
          mode: "widthFix"
        },
        {
          url: 'https://activity.vtuzx.com/doc/vtuUI/weapp/swiper/1.png',
          content: '12期分期可减540当天发Huawei/华为 P30手机官方旗舰店正品p30荣耀p30pro直降mate20x新款5g全网通p10 p20pro',
          mode: "widthFix"
        },
        {
          url: 'https://activity.vtuzx.com/doc/vtuUI/weapp/swiper/3.png',
          content: '【选送小米27W快充头】Xiaomi/小米 Redmi K20Pro骁龙855红米K20手机官方旗舰弹出全面屏4800万广角三摄note7',
          mode: "widthFix"
        },
        {
          url: 'https://activity.vtuzx.com/doc/vtuUI/weapp/swiper/5.png',
          content: '可12期免息【抢360券+送无线充】xiaomi/小米9手机plus官方旗舰店骁龙855透明尊享版九Mix4红米K20小米9学生',
          mode: "widthFix"
        }
      ],
      windowWidth: wx.getSystemInfoSync().windowWidth
    })
  }

  /**
   * 预加载方法
   *
   */
  preShow(query, sysData, resolve, reject) {
    var self = this;
    var initData = {
      loading: false
    }
    resolve(initData);
  }

  bindChange = function(e) {
    this.setData({
      current: e.detail.current
    })
  }
}

Page(new SwiperPage({className: "SwiperPage", path: '/pages/comp/swiper/swiper', noShow: true}));
