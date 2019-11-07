import { VtuComponent } from '../../assets/package/component';
VtuComponent({
  externalClasses: ['custom-class'],

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

    // 徽章
    badge: null,
    badgeMax: {
      type: Number,
      value: 0
    },
    // 类型 primary / success / warning / danger / info
    badgeType: {
      type: String,
      value: "danger"
    },
    //圆角
    badgeRound: {
      type: Boolean,
      value: false
    },
    //圆形
    badgeCircle: {
      type: Boolean,
      value: true
    },
    //颜色
    badgeColor: {
      type: String,
      value: null
    },
    // 小红点
    badgeIsDot: {
      type: Boolean,
      value: false
    },
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
  }
})
