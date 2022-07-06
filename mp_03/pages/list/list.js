// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 通过编程式导航，跳转到 message 页面
  gotoMessage() {
    wx.switchTab({
      url: '/pages/message/message',
    })
  },

  // 通过编程式导航，跳转到 info 页面
  gotoInfo() {
    wx.navigateTo({
      url: '/pages/info/info',
    })
  },

  // 通过编程式导航，返回到上一页
  gotoBack() {
    wx.navigateBack()
  },

  // 通过编程式导航，跳转到 info2 页面
  gotoInfo2() {
    wx.navigateTo({
      url: '/pages/info/info?name=ls&age24',
    })
  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // options 就是导航传递过来的参数对象
    console.log(options);
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})