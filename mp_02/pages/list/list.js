// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: 'init data',
    imgSrc: 'http://www.itheima.com/images/logo.png',
    randomNum: Math.random() * 10,
    randomNum1: Math.random().toFixed(2),// toFixed(2)保留两位小数
    count: 0,
    msg: "你好，",
    condition: 1,
    type: 1,
    userList: [
      { id: 1, name:'小红' },
      { id: 2, name:'小黄' },
      { id: 3, name:'小白' },
    ]
  },
  //定义按钮的事件处理函数
  btnTapHeader(e) {
    console.log(e);
  },
  // 修改count的值
  // +1 按钮的事件处理函数
  ChangeCount() {
    // console.log("ok");
    this.setData({
      count: this.data.count + 1
    })
  },
  btnTap2(e) {
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
    console.log(e.target.dataset);
    console.log(e.target.dataset.info);
  },
  //  文本框内容改变事件
  inputHeader(e) {
    // console.log(e.detail.value);
    this.setData({
      //  通过e.detail.value获取到文本框最后的值
      msg: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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