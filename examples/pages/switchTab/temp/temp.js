const app = getApp();
import Mixin from "../../Mixin";
let utils = require('../../Utils.js');
class SwitchtabTempPage extends Mixin{
    constructor(...args) {
        super(...args);
        super.$init({
            selected: 0,
            firstLoad: true,

            menuMask: null,
            menuLiMask1: null,
            menuLiMask2: null,
            menuLiMask3: null,
            showMenu: false
        });
    }

    /**
     * 页面显示/切入前台时触发。
     *
     */
    onShow = function(){
        this.data.firstLoad = false;
    }

    onLoad = function(e) {
        if (e && e.inviteId) {
            wx.setStorageSync('inviteId', e.inviteId);
        }
        if (e && e.luckId) {
            this.toLuckDrawDetailPage({
                luckId: e.luckId
            })
        }
    }

    /**
     * 下拉刷新
     */
    onPullDownRefresh = function () {
        wx.stopPullDownRefresh();
    }

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide = function() {
        this.closeMenuAnimation();
    }

    /**
     * 切换tab导航
     * @param e
     */
    switchTab = function (e){
        this.setData({
            selected: e.detail.current,
        })
    }

    /**
     * 点击底部tab
     * @param e
     */
    changeTab = function (e) {
        const data = e.currentTarget.dataset

        const url = data.path
        for (let i = 0; i < this.data.tabList.length; i++){
            this.data.tabList[i].animation = null
        }
        var icon = wx.createAnimation({})
        icon.scale(0.5, 0.5).step({ duration: 100 });
        icon.scale(1, 1).step({ duration: 100 });
        this.data.tabList[data.index].animation = icon.export()
        this.setData({
            selected: data.tab,
            tabList: this.data.tabList
        })
    }

    /**
     * 打开提货菜单
     */
    showCenterMenu = function() {
        var menuMask = wx.createAnimation({})
        menuMask.width("100%").step({ duration: 1 });
        menuMask.opacity(0.95).step({ duration: 300 });
        var menuLiMask1 = wx.createAnimation({
            timingFunction: 'ease-out'
        })
        menuLiMask1.left('15%').bottom(80).step({ duration: 300 });
        var menuLiMask2 = wx.createAnimation({
            timingFunction: 'ease-out'
        })
        menuLiMask2.right('15%').bottom(80).step({ duration: 300 });
        var menuLiMask3 = wx.createAnimation({
            timingFunction: 'ease-out'
        })
        menuLiMask3.bottom(80).step({ duration: 300 });

        this.setData({
            tabList: this.data.tabList,
            menuMask: menuMask.export(),
            menuLiMask1: menuLiMask1.export(),
            menuLiMask2: menuLiMask2.export(),
            menuLiMask3: menuLiMask3.export(),
            showMenu: true
        })
    }

    /**
     * 关闭菜单
     */
    closeMenuAnimation = function() {
        var menuMask = wx.createAnimation({})
        menuMask.opacity(0).step({ duration: 300 })
        menuMask.width("0px").step({ duration: 1 })
        var menuLiMask1 = wx.createAnimation({
            timingFunction: 'ease-out'
        })
        menuLiMask1.left('50%').bottom(-150).step({ duration: 300 });
        var menuLiMask2 = wx.createAnimation({
            timingFunction: 'ease-out'
        })
        menuLiMask2.right('50%').bottom(-150).step({ duration: 300 });
        var menuLiMask3 = wx.createAnimation({
            timingFunction: 'ease-out'
        })
        menuLiMask3.bottom(-150).step({ duration: 300 });

        this.setData({
            menuMask: menuMask.export(),
            menuLiMask1: menuLiMask1.export(),
            menuLiMask2: menuLiMask2.export(),
            menuLiMask3: menuLiMask3.export(),
            showMenu: false
        })
    }

    /**
     * 属性监听
     * @type {{showBMP(*=): void}}
     */
    watch = {
    }
}

var switchtabTempPage = new SwitchtabTempPage({className: 'SwitchtabTempPage', noShow: true});
Page(switchtabTempPage);
