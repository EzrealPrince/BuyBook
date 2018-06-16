// pages/myorder/myorder.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    orderindex: [],
    hasorderindex: false,
    seelList: [],
    hasSeelList: false,
    state: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  myOrder: function () {
    this.setData({
      state: 0,

    })
  },
  mySeel: function () {
    this.setData({
      state: 1,
      seelList: app.globalData.seelList
    })
    console.log(this.data.seelList)
    if(app.globalData.seelList.length > 0)
    {
      this.setData({
        hasSeelList: true
      })
    }
  },
  myConfirm: function () {
    this.setData({
      state: 2
    })
  },
  onLoad: function (options) {
    if (app.globalData.orderindex.length > 0) {
      if (app.globalData.orderindex[app.globalData.orderindex.length - 1].length > 2) {
         this.setData({
           orderindex: app.globalData.orderindex,
           hasorderindex: true
         })
         console.log("多本书"+this.data.orderindex);
       }
       else {
         this.setData({
           orderindex: app.globalData.orderindex,
           hasorderindex: true
         })
       }
    }
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