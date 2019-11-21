import { VtuComponent } from '../../assets/package/component';
import {behavior_badge} from '../../assets/behaviors/basic';
VtuComponent({
  behaviors:  [{name: 'badge', behavior: behavior_badge()}],
  // 定义和使用组件间关系
  relations: {
    '../tabbar/vtu-tabbar': {
      type: 'parent'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    icon: {
      type: String,
      value: null
    },
    activeIcon: {
      type: String,
      value: null
    },
    src: {
      type: String,
      value: null
    },
    activeSrc: {
      type: String,
      value: null
    },
    fontColor: {
      type: String,
      value: null
    },
    activeFontColor: {
      type: String,
      value: null
    },
    iconColor: {
      type: String,
      value: null
    },
    activeIconColor: {
      type: String,
      value: null
    },
    activeColor: {
      type: String,
      value: null
    },
    large: {
      type: Boolean,
      value: false
    },
    activeBgColor: {
      type: String,
      value: null
    },
    label: {
      type: String,
      value: null
    },
    iconFontSize: {
      type: String,
      value: null
    },
    animation: null,
    name: {
      type: String,
      value: null
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
    click: function (e) {
      this.triggerEvent('click', e);
    }
  }
})
