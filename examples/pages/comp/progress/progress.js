const app = getApp();
Page({
  data: {
    number1: 10,
    number2: 75,
    number3: 30,
    number4: 60,
    number5: 90,
    number6: 75,
  },

  plus() {
    this.setData({
      number1: this.data.number1 + 10,
      number2: this.data.number2 + 10,
      number3: this.data.number3 + 10,
      number4: this.data.number4 + 10,
      number5: this.data.number5 + 10,
      number6: this.data.number6 + 10
    })
  },

  minus() {
    this.setData({
      number1: this.data.number1 - 10,
      number2: this.data.number2 - 10,
      number3: this.data.number3 - 10,
      number4: this.data.number4 - 10,
      number5: this.data.number5 - 10,
      number6: this.data.number6 - 10
    })
  }
});
