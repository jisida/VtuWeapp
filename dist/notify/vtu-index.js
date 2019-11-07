
function getContext() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}

export default function(config){
  config = config || {}
  const context = config.context || getContext();
  let param = Object.assign({
    selector: 'Vtu_Notify',
    navbar: 'Vtu_Navbar'
  }, config)
  let notifyObj = context.selectComponent("#" + param.selector);
  let headerObj = context.selectComponent("#" + param.navbar);
  if (headerObj) {
    param.navBarHeight = headerObj.data.navBarHeight;
  }
  if (notifyObj) {
    if (param.type == 'loading' && !param.icon){
      param.icon = 'vtu-icon vtu-icon-jiazai'
      param.rotate = true
    }
    notifyObj.setOption(param)
    return notifyObj
  } else {
    console.error("Notify load is fail")
  }
}
