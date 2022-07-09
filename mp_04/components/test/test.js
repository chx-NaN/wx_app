// components/test/test.js
Component({
  options: {
    styleIsolation:"shared"
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    count:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount() {
      this.setData({
        count: this.data.count + 1
      })
      this._showToast()
    },
    _showToast() {
      wx.showToast({
        title: 'count值为：' + this.data.count,
        icon: 'none'
      })
    }
  }
})
