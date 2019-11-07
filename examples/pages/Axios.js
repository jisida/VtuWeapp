const app = getApp()
import Axios from "../package/axios/Axios";
const axios = new Axios();
import regeneratorRuntime from '../package/lib/regenerator-runtime/runtime.js'
// 请求拦截器
axios.interceptors.request = async function (config) {
  return new Promise(async (resolve, reject) => {
    try {
        if (config._opts.needSession && !app.globalData.userInfo){
            config = await config._opts.that.openWechatLogin(Object.assign({}, config))
        }
        if (app.globalData.userInfo && app.globalData.userInfo.sessionId) {
            config.data.sessionId = app.globalData.userInfo.sessionId;
        }
        resolve(config)
      resolve(config)
    } catch(e) {
      reject(e);
    }
  })
}

// 响应拦截器
axios.interceptors.response.success = function(res) {
  return new Promise((resolve, reject) => {
    if (res._opts.upload){
      res.data.data = JSON.parse(res.data.data)
    }
    if (!res.data.data.result){
      if (!res._opts.hiddenError){
        wx.showToast({
          title: res.data.data.errMessage,
          icon: 'none',
          duration: 2000
        });
      }
      reject(res.data.data);
    } else {
      resolve(res);
    }
  })
}
axios.interceptors.response.error = function(res) {
  if (res._opts.hiddenError){
    return res;
  }
  wx.showToast({
    title: res.error.errMsg,
    icon: 'none',
    duration: 2000
  });
  return res;
}

export default {
  // 用户注册
  $wechatRegister: function(data = {}, opts = {}) {
    return axios.$json("wechatRegister", data, opts, this)
  },
  // 获取session
  $getSession: function(data = {}, opts = {}) {
    return axios.$json("getSession", data, opts, this)
  },
  // 登录
  $wechatLogin: function(data = {}, opts = {}) {
    return axios.$json("wechatLogin", data, opts, this)
  },
  // 查询公司信息
  $getCompanyInfo: function(data = {}, opts = {}) {
    return axios.$json("getCompanyInfo", data, opts, this)
  },
  // 创建抽奖基本信息
  $createBaseLuck: function(data = {}, opts = {}) {
    return axios.$json("createBaseLuck", data, opts, this)
  },
  // 更新抽奖基本信息
  $updateBaseLuck: function(data = {}, opts = {}) {
    return axios.$json("updateBaseLuck", data, opts, this)
  },
  // 更新抽奖商品信息
  $uploadLuckPrize: function(data = {}, opts = {}) {
    return axios.$upload("uploadLuckPrize", data, opts, this)
  },
  // 查看抽奖详情
  $getLuckDetail: function(data = {}, opts = {}) {
    return axios.$json("getLuckDetail", data, opts, this)
  },
  // 参加抽奖
  $joinLuck: function(data = {}, opts = {}) {
    return axios.$json("joinLuck", data, opts, this)
  },
  // 查看发布抽奖记录
  $getCreateLuckList: function(data = {}, opts = {}) {
    return axios.$json("getCreateLuckList", data, opts, this)
  },
  // 查看获奖抽奖记录
  $getWinnerLuckList: function(data = {}, opts = {}) {
    return axios.$json("getWinLuckList", data, opts, this)
  },
  // 查看参与抽奖记录
  $getJoinLuckList: function(data = {}, opts = {}) {
    return axios.$json("getJoinLuckList", data, opts, this)
  },
  // 发布评论
  $createComment: function(data = {}, opts = {}) {
    return axios.$json("createComment", data, opts, this)
  },
  // 获取评论
  $getComment: function(data = {}, opts = {}) {
    return axios.$json("getCommentList", data, opts, this)
  },
  // 查看抽奖助力
  $getHelpLuckList: function(data = {}, opts = {}) {
    return axios.$json("getHelpLuckList", data, opts, this)
  },
  // 查看抽奖码列表
  $getCodeLuckList: function(data = {}, opts = {}) {
    return axios.$json("getCodeLuckList", data, opts, this)
  },
  // 抽奖的所有参与用户
  $getLuckJoinList: function(data = {}, opts = {}) {
    return axios.$json("getLuckJoinList", data, opts, this)
  },
  // 查看所有评论
  $getCommentList: function(data = {}, opts = {}) {
    return axios.$json("getCommentList", data, opts, this)
  },
  // 查看抽奖中奖者一览
  $getLuckWinnerList: function(data = {}, opts = {}) {
    return axios.$json("getLuckWinnerList", data, opts, this)
  },
  // 提醒未填写者
  $sendAddressNotice: function(data = {}, opts = {}) {
    return axios.$json("sendAddressNotice", data, opts, this)
  },
  // 上传临时图片
  $uploadTempImg: function(data = {}, opts = {}) {
    return axios.$upload("uploadTempImg", data, opts, this)
  },
  // 创建加粉账号
  $addAccount: function(data = {}, opts = {}) {
    return axios.$upload("addAccount", data, opts, this)
  },
  // 查询加粉账号列表
  $getAccountList: function(data = {}, opts = {}) {
    return axios.$json("getAccountList", data, opts, this)
  },
  // 查询加粉账号详情
  $getAccountDetail: function(data = {}, opts = {}) {
    return axios.$json("getAccountDetail", data, opts, this)
  },
  // 更新加粉账号图片
  $updateAccountByImage: function(data = {}, opts = {}) {
    return axios.$upload("updateAccountByImage", data, opts, this)
  },
  // 更细加粉账号
  $updateAccount: function(data = {}, opts = {}) {
    return axios.$json("updateAccount", data, opts, this)
  },
  // 填写奖品发货地址
  $inputLuckAddress: function(data = {}, opts = {}) {
    return axios.$json("inputLuckAddress", data, opts, this)
  },
  // 绑定手机号
  $bindPhone: function(data = {}, opts = {}) {
    return axios.$json("bindPhone", data, opts, this)
  },
  // 查看上首页的抽奖列表
  $getCompanyHomeLuckList: function(data = {}, opts = {}) {
    return axios.$json("getCompanyHomeLuckList", data, opts, this)
  },
  // 查看上首页的抽奖列表
  $getUserHomeLuckList: function(data = {}, opts = {}) {
    return axios.$json("getUserHomeLuckList", data, opts, this)
  },
  // 上传个人二维码图片
  $uploadContactQrImg: function(data = {}, opts = {}) {
    return axios.$upload("uploadContactQrImg", data, opts, this)
  },
  // 查看用户联系方式
  $getUserContact: function(data = {}, opts = {}) {
    return axios.$json("getUserContact", data, opts, this)
  },
  // 更新个人微信号
  $updateWechat: function(data = {}, opts = {}) {
    return axios.$json("updateWechat", data, opts, this)
  },
  // 申请首页推广支付
  $payToHome: function(data = {}, opts = {}) {
    return axios.$json("luckPayHome", data, opts, this)
  },
  // 获取海报二维码
  $createLuckPoster: function(data = {}, opts = {}) {
    return axios.$json("createLuckPoster", data, opts, this)
  },
}
