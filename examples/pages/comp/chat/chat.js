const app = getApp();
Page({
  data: {
    inputFocus: false,
    biaoqingList: (function(){
      let list = app.globalData.biaoqingList, result = [];
      for (let i = 0; i < list.length; i++){
        if ( i % 21 == 0){
          if (!result[parseInt(i/21)] || result[parseInt(i/21)].length <= 0) result[parseInt(i/21)] = [];
        }
        result[parseInt(i/21)].push(list[i]);
      }
      return result;
    }()),
    showBMP: false,
    showBQ: false,
    showMENU:false,

    playMsgInfo: null,
    recordSendLock: true,
    showRecord: false,
    startRecord: false,
    startRecordPoint: null,
    cancelRecord: false,
    recordBarText: '按住 说话',
    recordDialogText: '手指上划，取消发送',
    recorderManager: wx.getRecorderManager(),
  },


  /**
   * 显示图片预览面板
   * @param event
   */
  previewImage: function(event){
    var src = event.currentTarget.dataset.src;
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: [src] // 需要预览的图片http链接列表
    })
  },

  /**
   * 选择表情
   * @param e
   */
  selectBQ: function(e) {
    var self = this;
    self.setData({
      messageText: (self.data.messageText?self.data.messageText:'') + e.currentTarget.dataset.bq.symbol
    })
  },

  /**
   * 聊天文本框内容改变事件
   * @param e
   */
  inputChangeEvent: function(e){
    this.setData({
      messageText: e.detail.value
    })
  },

  /**
   * 聊天文本框获取焦点事件
   */
  inputFocusEvent: function(){
    this.setData({
      inputFocus: true,
      showBQ: false,
      showMENU: false,
      startRecord: false
    })
  },

  /**
   * 聊天文本框失去焦点事件
   * @param e
   */
  inputBlurEvent: function(e){
    var self = this;
    if (self.data.os){
      self.setData({
        inputFocus: false,
        os: false
      })
      return;
    }
    self.setData({
      inputFocus: false,
      showBMP: false
    })
  },

  /**
   * 点击聊天表情开关
   * @param e
   */
  clickBQ: function(e){
    var self = this;
    self.setData({
      os: self.data.inputFocus ? true : false,
      inputFocus: self.data.showBQ?true:false,
      showBMP: !self.data.showBQ?true:false,
      showBQ: !self.data.showBQ,
      showMENU: false,
      showRecord:false
    }, function() {
    })
  },

  /**
   * 点击聊天菜单开关
   */
  clickMENU: function(){
    var self = this;
    this.setData({
      os: self.data.inputFocus ? true : false,
      inputFocus: this.data.showMENU?true:false,
      showBMP: !this.data.showMENU?true:false,
      showMENU: !this.data.showMENU,
      showBQ: false,
      showRecord:false
    }, function() {
    })
  },

  /**
   * 点击语音按钮
   */
  clickRecord: function (){
    var self = this;

    this.setData({
      os: self.data.inputFocus ? true : false,
      inputFocus: this.data.showRecord,
      showBMP: false,
      showRecord:!this.data.showRecord,
      showBQ: false,
      showMENU:false
    }, function() {
    })
  },

  /**
   * 隐藏聊天底部信息面板
   */
  hiddenBar: function(){
    if (this.data.showBMP){
      this.setData({
        showBMP: false,
        showMENU: false,
        showBQ: false,
        showRecord: false
      })
    }
  },

  /**
   * 开始说话
   * @param e
   */
  startReordEvent: function(e) {
    //记录长按时开始点信息，后面用于计算上划取消时手指滑动的距离。
    wx.vibrateShort();
    this.setData({
      startRecord: true,
      recordBarText: '松开 结束',
      cancelRecord: false,
      startRecordPoint: e.touches[0],
      recordSendLock: false
    })
    this.data.recorderManager.start(); //开始录音
  },

  cancelRecordEvent: function() {
    this.setData({
      startRecord: false,
      cancelRecord: false,
      recordBarText: '按住 说话'
    })
    this.data.recorderManager.stop(); //结束录音
  },

  handleTouchMove: function(e) {
    //touchmove时触发
    var moveLenght = e.touches[e.touches.length - 1].clientY - this.data.startRecordPoint.clientY; //移动距离
    if (Math.abs(moveLenght) > 50) {
      this.setData({
        recordBarText: '松开手指，取消发送',
        recordDialogText: '松开手指，取消发送',
        cancelRecord: true,
        recordSendLock: true
      })
    } else {
      this.setData({
        recordBarText: '松开 结束',
        recordDialogText: '手指上划，取消发送',
        cancelRecord: false,
        recordSendLock: false
      })
    }
  }
});
