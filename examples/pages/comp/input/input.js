Page({
  data: {
    input: null,
    switch: true,

    pickerIndex: 0,
    pickerArray1: [{type: 1, label: '选项一'}, {type: 2, label: '选项二'}, {type: 3, label: '选项三'}],
    pickerTime:  null,
    pickerRegion: [],
    pickerDate: null,

    radioVal: 1,
    showRadioProp: false
  },

  pickerChange: function(e) {
    this.setData({
      pickerIndex: parseInt(e.detail.value)
    })
  },

  pickerDateChange: function(e) {
    this.setData({
      pickerDate: e.detail.value
    })
  },

  pickerTimeChange: function(e) {
    this.setData({
      pickerTime: e.detail.value
    })
  },

  pickerRegionChange: function(e) {
    this.setData({
      pickerRegion: e.detail.value
    })
  },

  showRadioEvent: function() {
    this.setData({
      showRadioProp: true
    })
  },

  radioChange: function(e){
    this.setData({
      radioVal: e.detail.value
    })
  }
});
