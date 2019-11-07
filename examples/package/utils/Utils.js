/**
 * 判断是否以特定字符开始
 * @param str
 * @returns {boolean}
 */
String.prototype.startWith=function(str){
    var reg=new RegExp("^"+str);
    return reg.test(this);
}

/**
 * 判断是否以特定字符结尾
 * @param str
 * @returns {boolean}
 */
String.prototype.endWith=function(str){
    var reg=new RegExp(str+"$");
    return reg.test(this);
}

/**
 * 字符串格式化
 *
 * @param args 匹配值
 */
String.prototype.format = function (args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if(args[key]!=undefined){
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg= new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}

/**
 * 日期格式化
 *
 * @param fmt 日期格式 例：yyyy-MM-dd hh:mm:ss
 */
Date.prototype.format = function (fmt) {
    var o = {
        "yyyy" : this.getYear(),                   	  // 年
        "MM" : this.getMonth() + 1,                   // 月份
        "dd" : this.getDate(),                        // 日
        "hh" : this.getHours(),                       // 小时
        "mm" : this.getMinutes(),                     // 分
        "ss" : this.getSeconds(),                     // 秒
        "q" : Math.floor((this.getMonth() + 3) / 3),  // 季度
        "S"  : this.getMilliseconds()                 // 毫秒
    };
    if(/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

/**
 * promise finally方法
 *
 * @param callback 回调方法
 */
Promise.prototype.finally = function (callback) {
    var Promise = this.constructor;
    return this.then(
        function (value) {
            Promise.resolve(callback()).then(
                function () {
                    return value;
                }
            );
        },
        function (reason) {
            Promise.resolve(callback()).then(
                function () {
                    throw reason;
                }
            );
        }
    );
}

export default {
    /**
     * 修改属性
     * @param e
     */
    $_setPropVal: function(e){
        let key = e.currentTarget.dataset.key;
        let val = e.currentTarget.dataset.val;

        let range = e.currentTarget.dataset.range;
        if (range) {
            let index = parseInt(e.currentTarget.dataset.index);
            key = range + "["+index+"]." + key;
        }
        this.setData({
            [key]: val
        })
    },

    /**
     * 文本框内容变更
     * @param e
     */
    $_bindInput: function(e) {
        var key = e.currentTarget.dataset.key;
        var type = e.currentTarget.dataset.type;
        var value = e.detail.value;
        switch(type){
            case 'number':
                value = parseInt(value);
                break;
            default:
                break;
        }

        let range = e.currentTarget.dataset.range;
        if (range) {
            let index = parseInt(e.currentTarget.dataset.index);
            key = range + "["+index+"]." + key;
        }
        this.setData({
            [key]: value
        })
    },

    /**
     * 数字格式化
     * @param number
     * @param decimal
     * @returns {number}
     */
    $_numberFormat: (number, decimal = 2) => {
        if(isNaN(number)) return 0
        return parseFloat(parseFloat(number).toFixed(decimal));
    },

    /**
     * 数字加减号
     * @param e
     */
    $_inputNumber: function(e) {
        var key = e.currentTarget.dataset.key;
        var value = parseInt(e.currentTarget.dataset.value);
        let range = e.currentTarget.dataset.range;
        let type = e.currentTarget.dataset.type;
        if (range) {
            let index = parseInt(e.currentTarget.dataset.index);
            key = range + "["+index+"]." + key;
        }
        this.setData({
            [key]: type == 'a' ? ++value : (--value < 0 ? 0 : value)
        })
    },

    /**
     * 日期格式化
     *
     */
    $_formateDate: function (time, second) {
        var now = new Date;
        var that = new Date(time);
        if (that.getFullYear () == now.getFullYear ()
            && that.getMonth () == now.getMonth ()
            && that.getDate () == now.getDate () - 1)
        {
            return '昨天' + that.format('hh:mm'+(second?":ss":''));
        }
        if (that.getFullYear () == now.getFullYear ()
            && that.getMonth () == now.getMonth ()
            && that.getDate () == now.getDate ())
        {
            return that.format('hh:mm'+(second?":ss":''));
        }
        if (that.getFullYear () == now.getFullYear ()
            && that.getMonth () == now.getMonth ()
            && that.getDate () == now.getDate () - 2)
        {
            return '前天' + that.format('hh:mm'+(second?":ss":''));
        }

        if (that.getFullYear () == now.getFullYear ()
            && that.getMonth () == now.getMonth ()
            && that.getDate () != now.getDate ())
        {
            return that.format('MM-dd');
        }

        if (that.getFullYear () == now.getFullYear ()
            && that.getMonth () != now.getMonth ())
        {
            return that.format('MM-dd hh:mm'+(second?":ss":''));
        }

        if (that.getFullYear () != now.getFullYear ())
        {
            return that.format('yy-MM-dd hh:mm'+(second?":ss":''));
        }
        return that.format('yy-MM-dd hh:mm'+(second?":ss":''));
    },

    $_calcDate: function(date = new Date(), day, formate) {
        var date1 = new Date(date);
        let time1= date1.getFullYear()+"-"+(date1.getMonth()+1)+"-"+date1.getDate();//time1表示当前时间
        var date2 = new Date(date1);
        date2.setDate(date1.getDate()+day);
        if (formate) date2 = date2.format(formate)
        console.log(date2)
        return date2;
    },

    /**
     * 姓名*号格式化
     *
     * @param name 姓名
     */
    $_maskName: function(name){
        let len = name.length;
        if (len < 2) {
            return name;
        }
        if (len === 2) {
            return name[0] + "*";
        }
        let res = name[0];
        for (let i = 1; i < len - 1; i++) {
            res += "*";
        }
        res += name[len - 1];
        return res;
    },

    /**
     * 滚动到底部
     * @param id 面板ID
     */
    pageScrollToBottom: function (id) {
        wx.createSelectorQuery().select(id).boundingClientRect(function (rect) {
            // 使页面滚动到底部
            wx.pageScrollTo({
                scrollTop: rect.height
            })
        }).exec()
    },

    /**
     * 计算canvas文字段落高度
     * @param ctx
     * @param content
     * @param maxWidth
     * @param lineHeight
     * @returns {{height: number, lineArray: Array}}
     */
    calcCanvasContent(ctx, content, maxWidth, lineHeight) {
       let lineArray  = [], y = 0, textHeight = 10
        var contentArray = content.split('\n');
        for (var i = 0; i < contentArray.length; i++) {
            let contentItem = contentArray[i], lineWidth = 0, line = ""
            if (!contentItem) continue
            for (var j = 0; j < contentItem.length; j++) {
                lineWidth += ctx.measureText(contentItem[j]).width;
                line += contentItem[j]
                if (lineWidth > maxWidth || j == contentItem.length-1) {
                    lineArray.push({
                        label: line,
                        y: y
                    })
                    lineWidth = 0;
                    line = ""
                    y += lineHeight + textHeight
                }
            }
            if (i < contentArray.length-1) {
                y += lineHeight
            }
        }

        return {
            height: y,
            lineArray: lineArray
        }
    },

    /**
     *  描画圆角矩形
     * @param {CanvasContext} ctx canvas上下文
     * @param {number} x 圆角矩形选区的左上角 x坐标
     * @param {number} y 圆角矩形选区的左上角 y坐标
     * @param {number} w 圆角矩形选区的宽度
     * @param {number} h 圆角矩形选区的高度
     * @param {number} r 圆角的半径
     */
    createRoundRectCanvas(ctx, x, y, w, h, r) {
        // 开始绘制
        ctx.beginPath()
        // 左上角
        ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5)

        // border-top
        ctx.moveTo(x + r, y)
        ctx.lineTo(x + w - r, y)
        ctx.lineTo(x + w, y + r)
        // 右上角
        ctx.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2)

        // border-right
        ctx.lineTo(x + w, y + h - r)
        ctx.lineTo(x + w - r, y + h)
        // 右下角
        ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5)

        // border-bottom
        ctx.lineTo(x + r, y + h)
        ctx.lineTo(x, y + h - r)
        // 左下角
        ctx.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI)

        // border-left
        ctx.lineTo(x, y + r)
        ctx.lineTo(x + r, y)

        // 这里是使用 fill 还是 stroke都可以，二选一即可，但是需要与上面对应
        ctx.fill()
        // ctx.stroke()
        ctx.closePath()
        // 剪切
        ctx.clip()
    },


    /**
     * 计算剩余时间
     *
     * @param now 当前时间
     * @param end 比较时间
     */
    calcTimeDistance(now, end) {
        const nowTime = now.getTime();
        const endTime = end.getTime();
        const remainSec = endTime - nowTime;
        let h = Math.floor(remainSec / 1000 / 3600);
        const m = Math.floor((remainSec - h * 1000 * 3600) / 1000 / 60);
        const s = Math.floor((remainSec - h * 1000 * 3600 - m * 1000 * 60) / 1000);
        let d = 0;
        if (h > 24) {
            d = Math.floor(h / 24);
            h = h % 24;
        }
        return {
            d: d === 0 ? '' : (d + ''),
            h: (h + '').length === 1 ? '0' + h : h,
            m: (m + '').length === 1 ? '0' + m : m,
            s: (s + '').length === 1 ? '0' + s : s
        };
    }
}
