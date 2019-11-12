import { VtuComponent } from '../assets/package/component';
VtuComponent({
  /**
   * 组件的属性列表
   */
  properties: {
    src: {
      type: String,
      value: null
    },
    icon: {
      type: String,
      value: null
    },
    label: {
      type: String,
      value: null
    },
    describe: {
      type: String,
      value: null
    },
    height: {
      type: String,
      value: "200px"
    },
    imageWidth: {
      type: String,
      value: "150px"
    },
    imageHeight: {
      type: String,
      value: "150px"
    },
    iconSize: {
      type: String,
      value: "30px"
    },
    iconColor: {
      type: String,
      value: null
    },
    fill: {
      type: Boolean,
      value: false
    },
    fillScreen: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    click: function(e) {
      this.triggerEvent('click', e.currentTarget.dataset.data);
    }
  }
})
