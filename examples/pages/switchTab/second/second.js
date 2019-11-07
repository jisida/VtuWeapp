const app = getApp()
import ComponentPage from "../../Component";
class SwitchtabSecondPage extends ComponentPage {
  constructor(...args) {
    super(...args);
    super.$init({
      baseUrl: null,
      companyInfo: null,
      hiddenNavBar: true
    });
  }

  // 对外属性
  properties = {
    show: {
      type: Boolean,
      value: false
    }
  }

  lifetimes =  {
    attached() {
      this.getCompanyInfo()
    },
    moved() {},
    detached() {},
  }

  // 组件的方法
  methods = {

    bindscroll: function(e) {
      if (e.detail.scrollTop > 80 && this.data.hiddenNavBar) {
        this.setData({
          hiddenNavBar: false
        })
      } else if (e.detail.scrollTop < 80 && !this.data.hiddenNavBar) {
        this.setData({
          hiddenNavBar: true
        })
      }
    },

    /**
     * 获取公司信息
     */
    getCompanyInfo: function(){
      var self= this;
      switchtabSecondPage.$getCompanyInfo().then(res => {
        self.setData({
          baseUrl: res.baseUrl,
          companyInfo: res.companyInfo
        })
      })
    },

    $wx_toMiniProgram: function(e) {
      switchtabSecondPage.$wx_toMiniProgram(e)
    }
  }
}

var switchtabSecondPage = new SwitchtabSecondPage({className: 'SwitchtabSecondPage', visitor: false});
Component(switchtabSecondPage);
