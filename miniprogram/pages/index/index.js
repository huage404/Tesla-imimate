// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentSwiperIndex: 0,
    swiperItems: [
      {
        title: 'ModelS',
        imageUrl: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g3/M07/0E/0C/ChMlWF7oPWqIRHTaAB_bE3vS5AYAAU0SgAWHWQAH9sr405.jpg',
        config: [
          {title: '647', subtitle: '公里续航'},
          {title: '647', subtitle: '公里续航'},
          {title: '647', subtitle: '公里续航'}
        ]
      },
      {
        title: 'ModelM',
        imageUrl: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g3/M07/0E/0C/ChMlWF7oPWqIRHTaAB_bE3vS5AYAAU0SgAWHWQAH9sr405.jpg',
        config: [
          {title: '600', subtitle: '公里续航'},
          {title: '600', subtitle: '公里续航'},
          {title: '600', subtitle: '公里续航'}
        ]
      },
      {
        title: 'ModelY',
        imageUrl: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g3/M07/0E/0C/ChMlWF7oPWqIRHTaAB_bE3vS5AYAAU0SgAWHWQAH9sr405.jpg',
        config: [
          {title: '500', subtitle: '公里续航'},
          {title: '500', subtitle: '公里续航'},
          {title: '500', subtitle: '公里续航'}
        ]
      }
    ]
  },

  onSwiperChange(e){
    const {current} = e.detail;
    this.setData({
      currentSwiperIndex: current
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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