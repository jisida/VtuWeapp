const app = getApp();
import ComponentPage from "../../Component";
let utils = require('../../Utils.js');
import regeneratorRuntime from '../../../package/lib/regenerator-runtime/runtime.js'
class SwitchtabFirstPage extends ComponentPage {
    constructor(...args) {
        super(...args);
        super.$init({
            list: [],
            loading: true,
            userList: [],
            userLuckLoading: true,
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

        button: function() {
            wx.navigateTo({
                url: "/pages/comp/button/button"
            });
        },
        cell: function() {
            wx.navigateTo({
                url: "/pages/comp/cell/cell"
            });
        },
        color: function() {
            wx.navigateTo({
                url: "/pages/comp/color/color"
            });
        },
        background: function() {
            wx.navigateTo({
                url: "/pages/comp/background/background"
            });
        },
        gilds: function() {
            wx.navigateTo({
                url: "/pages/comp/grids/grids"
            });
        },
        navbar: function() {
            wx.navigateTo({
                url: "/pages/comp/navBar/navBar"
            });
        },
        tabs: function() {
            wx.navigateTo({
                url: "/pages/comp/tab/tab"
            });
        },
        badge: function() {
            wx.navigateTo({
                url: "/pages/comp/badge/badge"
            });
        },
        panel: function() {
            wx.navigateTo({
                url: "/pages/comp/panel/panel"
            });
        },
        progress: function() {
            wx.navigateTo({
                url: "/pages/comp/progress/progress"
            });
        },
        steps: function() {
            wx.navigateTo({
                url: "/pages/comp/steps/steps"
            });
        },
        sheet: function() {
            wx.navigateTo({
                url: "/pages/comp/sheet/sheet"
            });
        },
        rate: function() {
            wx.navigateTo({
                url: "/pages/comp/rate/rate"
            });
        },
        stepper: function() {
            wx.navigateTo({
                url: "/pages/comp/stepper/stepper"
            });
        },
        divider: function() {
            wx.navigateTo({
                url: "/pages/comp/divider/divider"
            });
        },
        swiper: function() {
            wx.navigateTo({
                url: "/pages/comp/swiper/swiper"
            });
        },
        loading: function() {
            wx.navigateTo({
                url: "/pages/comp/loading/loading"
            });
        },
        loadMore: function() {
            wx.navigateTo({
                url: "/pages/comp/loadMore/loadMore"
            });
        },
        noticeBar: function() {
            wx.navigateTo({
                url: "/pages/comp/noticeBar/noticeBar"
            });
        },
        notify: function() {
            wx.navigateTo({
                url: "/pages/comp/notify/notify"
            });
        },
        avatar: function() {
            wx.navigateTo({
                url: "/pages/comp/avatar/avatar"
            });
        },
        swiperPanel: function() {
            wx.navigateTo({
                url: "/pages/comp/swiperPanel/swiperPanel"
            });
        },
        radio: function() {
            wx.navigateTo({
                url: "/pages/comp/radio/radio"
            });
        },
        checkbox: function() {
            wx.navigateTo({
                url: "/pages/comp/checkbox/checkbox"
            });
        },
        tabBar: function() {
            wx.navigateTo({
                url: "/pages/comp/tabBar/tabBar"
            });
        },
        dialog: function() {
            wx.navigateTo({
                url: "/pages/comp/dialog/dialog"
            });
        },
        layout: function() {
            wx.navigateTo({
                url: "/pages/comp/layout/layout"
            });
        },
        switch: function() {
            wx.navigateTo({
                url: "/pages/comp/switch/switch"
            });
        },
        collapse: function() {
            wx.navigateTo({
                url: "/pages/comp/collapse/collapse"
            });
        },
        tag: function() {
            wx.navigateTo({
                url: "/pages/comp/tag/tag"
            });
        },
        empty: function() {
            wx.navigateTo({
                url: "/pages/comp/empty/empty"
            });
        },
        input: function() {
            wx.navigateTo({
                url: "/pages/comp/input/input"
            });
        },
        toast: function() {
            wx.navigateTo({
                url: "/pages/comp/toast/toast"
            });
        },
        prop: function() {
            wx.navigateTo({
                url: "/pages/comp/prop/prop"
            });
        },
        imgPicker: function() {
            wx.navigateTo({
                url: "/pages/comp/imgPicker/imgPicker"
            });
        },
        shadow: function() {
            wx.navigateTo({
                url: "/pages/comp/shadow/shadow"
            });
        },
        search: function() {
            wx.navigateTo({
                url: "/pages/comp/search/search"
            });
        },
        slide: function() {
            wx.navigateTo({
                url: "/pages/comp/slide/slide"
            });
        }
    };
}

var switchtabFirstPage = new SwitchtabFirstPage({className: 'SwitchtabFirstPage', visitor: false});
Component(switchtabFirstPage);
