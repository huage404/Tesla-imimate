// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentSwiperIndex: 0,
    swiperList: []
  },

  onSwiperChange(e){
    const {current} = e.detail;
    this.setData({
      currentSwiperIndex: current
    })
  },

  // 加载轮播图数据
  _loadSwiper(){
    this.db.collection('swiper').get().then(res => {
      console.log('ww', res.data);

      res.data.forEach((item) => {
        item.config.forEach((fig, index) => {
          const splitItems = fig.split('|');
          item.config[index] = {
            title: splitItems[0],
            subtitle: splitItems[1]
          }
        })
      })

      this.setData({
        swiperList: res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.db = wx.cloud.database();
    this._loadSwiper();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})