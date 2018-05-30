Page({
  /**
   * 页面的初始数据
   */
  data: {
    homepageList: [
    ],
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
    this.setData({
      homepageList: [
        {
          listImg: "/images/gaoshu.png",
          content: "高等数学（上册）",
          listPrice: "￥19"
        },

        {
          listImg: "/images/bainian.png",
          content: "百年孤独",
          listPrice: "￥28"
        },

        {
          listImg: "/images/bianyi.png",
          content: "编译原理",
          listPrice: "￥31"
        },

        {
          listImg: "/images/wulianwang.png",
          content: "物联网导论",
          listPrice: "￥22.5"
        },
      ]
    });
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