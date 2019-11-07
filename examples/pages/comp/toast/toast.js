import Toast from "../../../miniprogram_npm/vtuweapp/toast/vtu-index";
const app = getApp();
Page({
  data: {
  },

  alert1() {
    Toast('提示内容').then(data => {
      Toast('已关闭');
    })
  },

  alert2() {
    Toast('这是一条长文字提示，超过一定字数就会换行');
  },

  alert3() {
    Toast().loading('成功文案');
  },
  alert4() {
    Toast().success('成功文案');
  },

  alert5() {
    Toast().warning('警告文案');
  },

  alert6() {
    Toast().error('失败文案');
  },

  alert7() {
    Toast().alert({
      icon: 'iconfont icon-biaoxing',
      title: '自定义图标',
      rotate: true
    });
  },

  alert8() {
    Toast().alert({
      icon: 'iconfont icon-biaoxing',
      title: '带遮罩',
      mask: true
    });
  },

  alert9() {
    Toast().alert({
      icon: 'iconfont icon-biaoxing',
      title: '自定义关闭时间',
      duration: 5000
    }).then(data => {
      Toast('已关闭');
    })
  }
});
