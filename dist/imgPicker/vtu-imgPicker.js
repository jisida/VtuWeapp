import { VtuComponent } from '../assets/package/component';
import {behavior_loading} from '../assets/behaviors/basic';
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
        success: function(res) {
          var tempFilePath = [];
          for (var i = 0; i < res.tempFilePaths.length; i++) {
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
    }
  }
})
