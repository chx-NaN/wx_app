// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    colorList: [] //随机颜色列表
  },

  // 点击按钮 +1
  countAdd() {
    this.setData({
      count: this.data.count + 1
    })
  },

  //
  getColors() {
    wx.showLoading({
      title: '数据加载中...',     // 展示 loading 效果
    })

    // 发起请求，获取随机颜色值的数组
    wx.request({
      url: 'https://www.escook.cn/api/color',
      method: 'GET',
      success: ({data: res}) => {
        this.setData({
          colorList: [...this.data.colorList, ...res.data]
        })
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getColors()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // console.log("触发了下拉刷新");
    this.setData({
      count: 0
    })
    // 当数据重置成功之后，调用此函数，关闭下拉刷新效果
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("触发了上拉触底的事件");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})