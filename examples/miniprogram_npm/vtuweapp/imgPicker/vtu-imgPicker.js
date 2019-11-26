import { VtuComponent } from '../assets/package/component';
import regeneratorRuntime from '../assets/package/regenerator-runtime/runtime.js'
VtuComponent({
  externalClasses: ['content-class', 'footer-class', 'loading-class', 'title-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    col: {
      type: Number,
      value: 3
    },
    list: {
      type: Array,
      value: []
    },
    mode: {
      type: String,
      value: "aspectFill"
    },
    uploadIcon: {
      type: String,
      value: "vtu-icon vtu-icon-shangchuantupian"
    },
    count: {
      type: Number,
      value: 9
    },
    sizeType: {
      type: Array,
      value: ['original', 'compressed']
    },
    sourceType: {
      type: Array,
      value: ['album', 'camera']
    },
    preview: {
      type: Boolean,
      value: true
    },
    delete: {
      type: Boolean,
      value: true
    },
    maxSize: {
      type: Number,
      value: 0
    },
    maxWidth: {
      type: Number,
      value: 0
    },
    maxHeight: {
      type: Number,
      value: 0
    }
  },
  methods: {

    /**
     * 选择图片
     */
    chooseImg() {
      let self = this
      wx.chooseImage({
        count: self.data.count - self.data.list.length,
        sourceType: self.data.sourceType,
        sizeType: self.data.sizeType,
        success: async function (res) {
          var tempFilePath = [];
          for (var i = 0; i < res.tempFilePaths.length; i++) {
            let fileSize = parseInt(res.tempFiles[i].size / 1024)
            if (self.data.maxSize && res.tempFiles[i] && self.data.maxSize < fileSize) {
              let maxSizeStr = self.data.maxSize + 'kb'
              if (self.data.maxSize >= 1024) maxSizeStr = parseFloat((self.data.maxSize / 1024).toFixed(2)) + "M"
              wx.showToast({
                title: "上传图片不能大于" + maxSizeStr,
                icon: 'none',
                duration: 2000
              })
              return
            }

            if (self.data.maxWidth || self.data.maxHeight) {
              let tempInfo = await self.getImageInfo(res.tempFilePaths[i])
              if (self.data.maxWidth && tempInfo.width > self.data.maxWidth) {
                wx.showToast({
                  title: "上传图片宽度不能大于" + self.data.maxWidth + "px",
                  icon: 'none',
                  duration: 2000
                })
                return
              }
              if (self.data.maxHeight && tempInfo.height > self.data.maxHeight) {
                wx.showToast({
                  title: "上传图片高度不能大于" + self.data.maxHeight + "px",
                  icon: 'none',
                  duration: 2000
                })
                return
              }
            }

            tempFilePath.push({
              url: res.tempFilePaths[i]
            });
          }
          const newtempFilePaths = self.data.list.concat(tempFilePath);
          self.setData({
            list: newtempFilePaths
          })
          let detail = {
            current: tempFilePath,
            all: newtempFilePaths
          };
          self.triggerEvent('change', detail);
        }
      });
    },

    /**
     * 预览图片
     * @param e
     */
    previewImage (e) {
      let index = e.currentTarget.dataset.index
      let item = e.currentTarget.dataset.item
      if (this.data.preview) {
        let urls = []
        this.data.list.forEach(item => {
          urls.push(item.url)
        })
        wx.previewImage({
          current: item.url,
          urls: urls
        })
      }
      this.triggerEvent('preview', {
        current: item,
        all: this.data.list,
        index: index
      });
    },

    /**
     * 删除图片
     * @param e
     */
    deleteItem (e) {
      let index = e.currentTarget.dataset.index
      let item = e.currentTarget.dataset.item
      if (this.data.delete) {
        this.data.list.splice(index, 1)
        this.setData({
          list: this.data.list
        })
        this.triggerEvent('remove', {
          current: item,
          all: this.data.list,
          index: index
        });
      }
    },

    /**
     * 获取图片信息
     * @param path
     * @returns {Promise<any>}
     */
    getImageInfo: function(path) {
      return new Promise((resolve, reject) => {
        wx.getImageInfo({
          src: path,
          success: function (e) {
            resolve(e)
          }
        })
      })
    },
  }
})
