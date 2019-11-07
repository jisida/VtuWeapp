
function getContext() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}

function getToast(config = {}) {
  const context = config.context || getContext();
  let param = Object.assign({
    selector: 'Vtu-Toast'
  }, config)
  let toastObj = context.selectComponent("#" + param.selector);
  if (!toastObj) {
    wx.showToast({
      title: "轻提醒加载错误",
      icon: 'none',
      duration: 2000
    });
    return
  }
  return toastObj
}

export default function(config, time = 2000) {
  if (typeof config == 'string') {
    return new Promise((resolve, reject) => {
      wx.showToast({
        title: config,
        icon: 'none',
        duration: time
      })
      setTimeout(function() {
        resolve()
      }, time)
    })
  } else if (typeof config == 'object') {
    return new Promise((resolve, reject) => {
      wx.showToast(Object.assign({}, {
        icon: 'none',
        duration: time
      }, config))
      setTimeout(function() {
        resolve()
      }, time)
    })
  }
  return {
    success: function(label = null) {
      let toast = getToast()
      return toast.success(label)
    },
    warning: function(label = null) {
      let toast = getToast()
      return toast.warning(label)
    },
    error: function(label = null) {
      let toast = getToast()
      return toast.error(label)
    },
    loading: function(label = null) {
      let toast = getToast()
      toast.loading(label)
    },
    close: function(label = null) {
      let toast = getToast()
      toast.closeDialog()
    },
    alert: function(config) {
      let toast = getToast()
      return toast.alert(config)
    }
  }
}
