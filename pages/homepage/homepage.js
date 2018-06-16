let app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    article: []
  },
  articleDetail: function (e) {
    const index = e.currentTarget.dataset.index;
    let article = this.data.article[index];
    app.globalData.articleDetail = article;
    wx.navigateTo({
      url: '../articleDetail/articleDetail',
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
    wx.request({
      url: 'http://47.93.185.25:8000/api/jingyantieList',
        method: 'POST',
        success: (res) => {
          console.log(res.data.jingyantieList);
          this.setData({
            article: res.data.jingyantieList,
          });
        },
        fail: (res) => {
          wx.showModal({
            title: '加载失败，点击重试',
            content: '',
          })
        },
    })
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