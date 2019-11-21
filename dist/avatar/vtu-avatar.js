import { VtuComponent } from '../assets/package/component';
VtuComponent({
  externalClasses: ['content-class', 'icon-class', 'image-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    src: {
      type: String,
      value: null
    },
    smooth: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: null
    },
    bgColor: {
      type: String,
      value: null
    },
    size: {
      type: String,
      value: "default"
    },
    content: {
      type: String,
      value: null
    },
    width: {
      type: String,
      value: null
    },
    upload: {
      type: Boolean,
      value: false
    },
    sizeType: {
      type: Array,
      value: ['original', 'compressed']
    },
    sourceType: {
      type: Array,
      value: ['album', 'camera']
    }
  },
  methods: {
    click(e) {
      let self = this
      if (this.data.upload){
        wx.chooseImage({
          count: 1,
          sourceType: self.data.sourceType,
          sizeType: self.data.sizeType,
          success: function(res) {
            self.triggerEvent('change', res.tempFiles[0]);
          }
        });
      } else {
        this.triggerEvent('click', e);
      }
    }
  }
})
