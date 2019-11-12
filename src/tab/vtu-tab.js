import { VtuComponent } from '../assets/package/component';
VtuComponent({
  // 定义和使用组件间关系
  relations: {
    '../tabs/vtu-tabs': {
      type: 'ancestor'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 标签名称
    label: {
      type: String,
      value: null
    },
    // 标签名称
    name: {
      type: String,
      value: null
    },
    // 图标
    icon: {
      type: String,
      value: null
    },
    // 图标颜色
    iconColor: {
      type: String,
      value: null
    },
    // 图标大小
    iconSize: {
      type: String,
      value: null
    },
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
    badgeIcon: {
      type: String,
      value: null
    }
  },
  observers: {
    'label, name, icon, iconColor, iconSize, badge, badgeMax, badgeType, badgeRound, badgeCircle, badgeColor, badgeIsDot, badgeIcon': function(numberA, numberB) {
      const parent = this.getRelationNodes('../tabs/vtu-tabs')[0];
      if (parent) {
        parent.updateTabs(this);
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    show: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _active:function(arg){
      this.setData({
        show: !!arg
      })
    }
  }
})
