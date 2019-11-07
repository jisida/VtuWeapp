const app = getApp();
import Mixin from "../Mixin";
class AboutPage extends Mixin{
  constructor(...args) {
    super(...args);
    super.$init({
      baseUrl: null,
      companyInfo: null
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
    this.getCompanyInfo().then(data => {
      initData = Object.assign(initData, data)
      resolve(initData);
    })
  }

  /**
   * 获取公司信息
   */
  getCompanyInfo = function(){
    var self= this;
    return new Promise((resolve, reject) => {
      this.$getCompanyInfo().then(res => {
        resolve({
          baseUrl: res.baseUrl,
          companyInfo: res.companyInfo
        })
      })
    })
  }
}

Page(new AboutPage({className: 'AboutPage', path: '/pages/about/about', visitor: true}));
