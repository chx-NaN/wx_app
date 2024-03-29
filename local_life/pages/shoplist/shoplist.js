// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: {},
    shopList: [],
    page: 1,
    pageSize: 10,
    total: 0,
    isloading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query: options
    }),
    this.getShopList()
  },

  //  以分页的形式获取商铺列表数据的方法
  getShopList(cb) {
    this.setData({
      isloading: true
    })

    // 展示 loading 效果
    wx.showLoading({
      title: '数据加载中...',
    })
    // 发起网络数据请求
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      method: 'GET',
      data: {
        _page: this.data.page,
        _limit: this.data.pageSize,
      },
      success: (res) => {
        // console.log(res);
        this.setData({
          shopList: [...this.data.shopList, ...res.data],
          total: res.header['X-Total-Count'] - 0
        })
      },
      complete: () => {
        wx.hideLoading()
        this.setData({
          isloading: false
        })
        // wx.stopPullDownRefresh()
        cb && cb()
      }   
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.title,
    })
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
    // 需要重置关键的数据
    this.setData({
      page: 1,
      shopList: [],
      total: 0
    })
    this.getShopList(() => {
      wx.stopPullDownRefresh()
    })
    // 重新发起数据请求
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // console.log("ok");
    if(this.data.page * this.data.pageSize >= this.data.total) {
      //  证明没有下一页数据了
      return wx.showToast({
        title: '数据已经加载完毕！',
        icon: "none",
      })
    }
    // 判断是否加载其他数据
    if(this.data.isloading) return
    // 页码值 +1
    this.setData({
      page: this.data.page + 1
    }),
    this.getShopList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})