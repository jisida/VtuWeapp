
function getContext() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}

function getDialog(config = {}) {
  const context = config.context || getContext();
  let param = Object.assign({
    selector: 'Vtu-Dialog'
  }, config)
  let dialogObj = context.selectComponent("#" + param.selector);
  if (!dialogObj) {
    wx.showToast({
      title: "对话框加载错误",
      icon: 'none',
      duration: 2000
    });
    return
  }
  return dialogObj
}

export default function(id) {
  return {
    close: function(config = {}) {
      if(id) config.selector = id
      let dialog = getDialog(config)
      dialog.closeDialog(config)
    },
    alert: function(config = {}) {
      if(id) config.selector = id
      let dialog = getDialog(config)
      dialog.alert(config)
    },
    confirm: function(config = {}) {
      if(id) config.selector = id
      let dialog = getDialog(config)
      dialog.confirm(config)
    },
    open: function(config = {}) {
      if(id) config.selector = id
      let dialog = getDialog(config)
      dialog.open(config)
    }
  }
}
