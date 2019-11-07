const app = getApp()
import Navigator from "./Navigator";
import regeneratorRuntime from '../lib/regenerator-runtime/runtime.js'
export default class BasePage {
  constructor(...args) {
    this.data = {
      loading: true,
      statusBarHeight: app.globalData.statusBarHeight,
      titleBarHeight: app.globalData.titleBarHeight,
      totalTopHeight: app.globalData.totalTopHeight,
      menuButtonTop: app.globalData.menuButtonTop,
      menuButtonRight: app.globalData.menuButtonRight,
      menuButtonWidth: app.globalData.menuButtonWidth,
      windowHeight: app.globalData.windowHeight,
      windowWidth: app.globalData.windowWidth,
      containerHeight:  app.globalData.windowHeight - app.globalData.totalTopHeight - 50,
      containerHeightNoTab:  app.globalData.screenHeight - app.globalData.totalTopHeight,
      userInfo: null,
      pageHisCount: 0,
      _needSession: true,
      _needRegister: true,
      _page: {},
      firstLoad: true
    };
    if (args.length) {
      const name = args[0].className;
      if(args[0].path) this.data.classPath = args[0].path;
      if (name) {
        this.data.className = name;
        Navigator.putPage(name, this);
      }
      if (!args[0].noShow) {
        let pageClass = this;
        pageClass.onShow = function() {
          pageClass.onShowSuper.call(pageClass, this);
        }
      }
      if (args[0].visitor) {
        this.data._needSession = false
      }
      if (args[0].hasOwnProperty('register')) {
        this.data._needRegister = args[0].register
      }
    }
  }

  /**
   * 设置监听器
   */
  setWatcher = function () {
    let page = this;
    let data = page.data;
    let watch = page.watch;
    if (!watch) return;
    Object.keys(watch).forEach(v => {
      let key = v.split('.'); // 将watch中的属性以'.'切分成数组
      let nowData = data; // 将data赋值给nowData
      for (let i = 0; i < key.length - 1; i++) { // 遍历key数组的元素，除了最后一个！
        nowData = nowData[key[i]]; // 将nowData指向它的key属性对象
      }
      let lastKey = key[key.length - 1];
      // 假设key==='my.name',此时nowData===data['my']===data.my,lastKey==='name'
      let watchFun = watch[v].handler || watch[v]; // 兼容带handler和不带handler的两种写法
      let deep = watch[v].deep; // 若未设置deep,则为undefine
      this.observe(nowData, lastKey, watchFun, deep, page); // 监听nowData对象的lastKey
    })
  }

  /**
   * 监听属性 并执行监听函数
   */
  observe = function (obj, key, watchFun, deep, page) {
    var val = obj[key];
    // 判断deep是true 且 val不能为空 且 typeof val==='object'（数组内数值变化也需要深度监听）
    if (deep && val != null && typeof val === 'object') {
      Object.keys(val).forEach(childKey => { // 遍历val对象下的每一个key
        this.observe(val, childKey, watchFun, deep, page); // 递归调用监听函数
      })
    }
    var that = this;
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      set: function (value) {
        // 用page对象调用,改变函数内this指向,以便this.data访问data内的属性值
        if (value !== val){
          watchFun.call(page, value, val); // value是新值，val是旧值
        }
        val = value;
        if (deep) { // 若是深度监听,重新监听该对象，以便监听其属性。
          that.observe(obj, key, watchFun, deep, page);
        }
      },
      get: function () {
        return val;
      }
    })
  }

  /**
   * 预加载
   * @param query
   */
  $onNavigator(query) {
    Object.assign(this.data, {
      _page: query
    })
    this.$put('myInfo-'+ this.data.className, this.preLoad.bind(this), this.data);
  };

  $init(originData) {
    Object.assign(this.data = this.data ? this.data: {}, originData);
    this.$origin = JSON.parse(JSON.stringify(this.data));
    Object.freeze(this.$origin);
  }

  /**
   * 生命周期函数--监听页面显示
   * @param this    实例对象
   * @param proto    原型对象
   */
  onShowSuper(proto) {
    app.globalData.curPageObj = proto;
    this.initData.call(this, proto);
  }
  onShow = function(){
    app.globalData.curPageObj = this;
  }

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad = function(){
    this.setWatcher();
  }

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {}

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {}

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    if (this.data.className) {
      let clazz = Navigator.getPage(this.data.className);
      if (!clazz || !clazz.$origin) {
        console.error('请先在页面的constructor方法中注入init(data)，以避免出现不必要的错误');
        return;
      }
      clazz.data = JSON.parse(JSON.stringify(clazz.$origin));
    }
  }

  /**
   * 滚动事件
   * @param e
   */
  onPageScroll = function(e){}

  /**
   * 上拉触底
   */
  onReachBottom= function(){}

  $setData = function(data) {
    if (this.setData) {
      this.setData(data);
      // let clazz = Navigator.getPage(this.data.className);
      // Object.assign(clazz.data, data);
    } else {
      Object.assign(this.data = this.data ? this.data: {}, data);
    }
  };

  $route = async function (params) {
    params = Object.assign({
      path: '',
      query: {},
      className: '',
      switchTab: false,
      navigateBack: false,
      redirectTo: false,
      reLaunch: false,
      needSession: false
    }, params)

    await this.$beforeRoute(params)
    let args = '';
    if (Object.keys(params.query).length) {
      args = '?';
      for (let i in params.query) {
        if (params.query.hasOwnProperty(i)) {
          args += i + '=' + params.query[i] + '&';
        }
      }
      args = args.substring(0, args.length - 1);
    }

    let clazz = Navigator.getPage(params.className);
    if (clazz && clazz.data.classPath) params.path = clazz.data.classPath
    if (clazz && clazz.$onNavigator) {
      if (!params.navigateBack) {
        if (this.data.className) clazz.data.fromClassName = this.data.className
        if (this.data.classPath) clazz.data.fromClassPath = this.data.classPath
      }
      clazz.$onNavigator && clazz.$onNavigator(params.query);
    }
    if (params.switchTab) {
      wx.switchTab({
        url: `${params.path + args}`
      })
      wx.navigateBack();
    } else if (params.redirectTo) {
      wx.redirectTo({
        url: `${params.path + args}`
      })
    } else if (params.reLaunch) {
      wx.reLaunch({
        url: `${params.path + args}`
      })
    } else if (params.navigateBack) {
      wx.navigateBack();
    } else {
      wx.navigateTo({
        url: `${params.path + args}`
      });
    }
  };

  $back = function(query) {
    let clazz = Navigator.getPage(this.data.className);
    this.$route({
      path: clazz.data.fromClassPath,
      className: clazz.data.fromClassName,
      query: query,
      navigateBack: true
    });
  }

  $put = function(key, fun, args) {
    if (key && fun) {
      BasePage.prototype._pageValues[`$ {this.data.className} ? $ {key}`] = BasePage._$delay(this, fun, args);
    }
  };

  $take = function(key) {
    if (key) {
      const promise = BasePage.prototype._pageValues[`$ {this.data.className} ? $ {key}`];
      delete BasePage.prototype._pageValues[`$ {this.data.className} ? $ {key}`];
      return promise;
    }
    return null;
  };

  static _$delay(context, cb, args) {
    return new Promise((resolve, reject) =>{
      context.resolve = resolve;
      context.reject = reject;
      BasePage.prototype.currentPageContext = context;
      cb && cb(context, args, resolve, reject);
    });
  }

  $resolve = function(data) {
    const context = BasePage.prototype.currentPageContext; !! context && !!context.resolve && context.resolve(data);
    BasePage.prototype.currentPageContext = null;
  };

  $reject = function(data, error) {
    const context = BasePage.prototype.currentPageContext; !! context && !!context.reject && !!context.reject(data, error);
    BasePage.prototype.currentPageContext = null;
  };

  /**
   * 页面共同数据整理
   * @param data
   * @returns {*}
   */
  _commonData = function(data){
    if (!data) data = {};
    data.pageHisCount = getCurrentPages().length;
    return data;
  }

  /**
   * 数据初始化
   * @param this    实例对象
   * @param proto    原型对象
   *
   */
  initData(proto){
    var self = this;
    const takeData = self.$take('myInfo-' + proto.data.className);
    let successFunction = function(data) {
      data = self._commonData(data);
      proto.setData(data, function() {
        if(proto.onPreLoad) proto.onPreLoad(data);
      })
    }
    if (!takeData){
      self.preLoad.call(self, proto, proto.data, function(data){
        successFunction(data)
      }, function(e) {});
    } else {
      takeData.then((data) =>{
        successFunction(data)
      })
    }
  }


  /**
   * 路由拦截
   * @param params
   * @returns {Promise<boolean>}
   */
  $beforeRoute = async function (params) {
    if (params.needSession && !app.globalData.userInfo) {
      let obj = (params.obj || this)
      await this.openWechatLogin.call(obj)
    }
    // return new Promise((resolve, reject) => {
    //   resolve()
    // })
  }

  /**
   * 打开微信登录
   * @param callBack
   */
  openWechatLogin = function(config) {
    let self = this
    return new Promise((resolve, reject) => {
      let dialog = self.selectComponent("#dialog");
      if (dialog) {
        dialog.openWechatLogin({
          success: function() {
            resolve(config)
          }
        });
      } else {
        wx.showToast({
          title: '页面未加载dialog组件',
          icon: 'none',
          duration: 2000
        });
      }
    })
  }
}

import Router from "../../pages/Router";
import Axios from "../../pages/Axios";
import Utils from "../utils/Utils";
import Wx from "../utils/Wx";
const assignObj = Object.assign(Router, Axios, Utils, Wx);
Object.setPrototypeOf(BasePage.prototype, assignObj);
BasePage.prototype._pageValues = {};
BasePage.prototype.currentPageContext = null;
