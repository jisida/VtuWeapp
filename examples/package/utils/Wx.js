export default {
    /**
     * 拨打电话
     * @param phoneNumber
     */
    $wx_callPhone: function (e) {
        let phoneNumber = e.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: phoneNumber
        });
    },

    /**
     * 复制文字
     * @param e
     */
    $wx_copyText: function(e){
        let text = e.currentTarget.dataset.text;
        wx.setClipboardData({
            data: text
        })
    },

    /**
     * 微信登录
     * @param args
     * @returns {Promise<any>}
     */
    $wx_login: function(args) {
        var self = this;
        return new Promise(function(resolve, reject) {
            wx.login({
                success: function(opt){
                    if(opt.code) {
                        Object.assign(opt, args)
                        resolve(opt)
                    } else {
                        wx.showToast({
                            title: "获取登录凭证失败！",
                            icon: 'error',
                            duration: 2000
                        });
                        reject();
                    }
                },
                fail: function(res){
                    wx.showToast({
                        title: "获取登录凭证接口调用失败！",
                        icon: 'none',
                        duration: 2000
                    });
                    reject();
                }
            });
        })
    },

    /**
     * 跳转小程序
     * @param e
     */
    $wx_toMiniProgram: function(e){
        let miniInfo = e.currentTarget?e.currentTarget.dataset.info : e;
        wx.navigateToMiniProgram({
            appId: miniInfo.appId,
            path: miniInfo.path
        })
    },

    /**
     * 更新系统版本
     */
    $wx_updateEdition: function() {
        const updateManager = wx.getUpdateManager();
        updateManager.onUpdateReady(function () {
            wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success: function (res) {
                    if (res.confirm) {
                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                        updateManager.applyUpdate()
                    }
                }
            })
        })
    },

    /**
     * 系统初始化参数设定
     */
    $wx_launch: function(app) {
        wx.getSystemInfo({
            success: function (res) {
                app.globalData.windowHeight = res.windowHeight;
                app.globalData.windowWidth = res.windowWidth;
                app.globalData.screenHeight = res.screenHeight;
                let menu = wx.getMenuButtonBoundingClientRect();
                let statusBarHeight = res.statusBarHeight;
                let titleBarHeight = parseInt(menu.height);
                let totalTopHeight = parseInt(menu.top) + titleBarHeight  + 5;
                app.globalData.statusBarHeight = statusBarHeight;
                app.globalData.totalTopHeight = totalTopHeight;
                app.globalData.titleBarHeight = titleBarHeight;
                app.globalData.menuButtonTop = menu.top;
                app.globalData.menuButtonRight = menu.right;
                app.globalData.menuButtonWidth = menu.width;
            },
            failure() {
                app.globalData.statusBarHeight = 0;
                app.globalData.titleBarHeight = 0
                app.globalData.totalTopHeight = 0;
            }
        })
    },

    /**
     * 选择图片
     * @param options
     */
    $wx_chooseImage: function(options) {
        return new Promise((resolve, reject) => {
            options = Object.assign({
                count: options&&options.count?options.count:1,
                sizeType: ['original', 'compressed'],
                sourceType: ['album', 'camera'],
                success: function(res) {
                    resolve(res);
                },
                fail: function(e) {
                    reject(e);
                }
            }, options)
            wx.chooseImage(options);
        })
    },

    /**
     * 获取图片信息
     * @param path
     * @returns {Promise<any>}
     */
    $wx_getImageInfo: function(path) {
        return new Promise((resolve, reject) => {
            wx.getImageInfo({
                src: path,
                success: function (e) {
                    resolve(e)
                }
            })
        })
    },

    /**
     * 预览图片
     * @param params
     */
    $wx_previewImage: function(e) {
        let currentUrl = e.currentTarget.dataset.url
        wx.previewImage({
            current: currentUrl,
            urls: [currentUrl]
        })
    },

    /**
     * 获取dom节点信息
     * @param className
     * @param query
     * @returns {Promise<any>}
     */
    $wx_getDomSize: function(className, query = wx.createSelectorQuery()){
        return new Promise((resolve, reject) => {
            query.select('.'+className).boundingClientRect(function (rect) {
                resolve(rect)
            }).exec();
        })
    },

    /**
     * 发送socket数据
     * @param key
     * @param obj
     * @returns {Promise<any>}
     */
    $wx_sendSocket: function(key, obj) {
        var self = this;

        var params = obj;
        params['$$key'] = key;

        return new Promise(function(resolve, reject){
            wx.sendSocketMessage({
                data: JSON.stringify(params),
                success: function () {
                    console.log("消息已成功发送至服务器");
                    resolve();
                },
                fail:function(res) {
                    console.log("socket message send fail", res)
                    reject();
                }
            });
        })
    },

    /**
     * 地址
     */
    $wx_showAddress (){
        let self = this
        return new Promise((resolve, reject) => {
            wx.getSetting({
                success(res) {
                    if (res.authSetting.hasOwnProperty("scope.address") && !res.authSetting['scope.address']) {
                        wx.openSetting()
                    }else{
                        wx.chooseAddress({
                            success: function(e){
                                resolve(e)
                            },
                            fail(e){
                                reject(e);
                            }
                        });
                    }
                },
                fail(res){
                    reject(e);
                }
            })
        })
    },
}
