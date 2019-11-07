const app = getApp();
import Mixin from "../../../Mixin";
class MinipgPage extends Mixin{
  constructor(...args) {
    super(...args);
    super.$init({
      baseUrl: null,
      companyInfo: null,
    })
  }

  /**
   * 预加载方法
   *
   */
  preShow(query, sysData, resolve, reject) {
    resolve();
  }

  onPreLoad = function(){
    console.log(11111)
    this.getCompanyInfo()
  }

  /**
   * 获取公司信息
   */
  getCompanyInfo = function(){
    var self= this;
    this.$getCompanyInfo().then(res => {
      self.setData({
        baseUrl: res.baseUrl,
        companyInfo: res.companyInfo
      })
    })
  }

  $wx_toMiniProgram = function(e) {
    this.$wx_toMiniProgram(e)
  }
}

Page(new MinipgPage({className: "MinipgPage", path: '/pages/comp/other/minipg/minipg', visitor: true}));
