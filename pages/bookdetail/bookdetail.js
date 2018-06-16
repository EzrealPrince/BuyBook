// pages/bookdetail/bookdetail.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    book: {},
    bookname: '',
    selected: false,
    detail: true,
    chat: false,
    seel: false
  },
  clickDetail: function () {
     this.setData({
       detail: true,
       chat: false,
       seel: false
     })
  },
  clickChat: function () {
    this.setData({
      detail: false,
      chat: true,
      seel: false
    })
  },
  clickSeel: function () {
    this.setData({
      detail: false,
      chat: false,
      seel: true
    })
  },
  addcart: function () {
     app.globalData.book.selected = true;
     app.globalData.book.num = 1;
     if (app.globalData.carts.length == 0)
     {
       app.globalData.carts.push(app.globalData.book);
     }else{
     for(let i = 0;i < app.globalData.carts.length;i++)
     {
       if (app.globalData.book.id == app.globalData.carts[i].id){
         app.globalData.carts[i].num = app.globalData.carts[i].num + 1;
         i = 1000;
       }else {
         app.globalData.carts.push(app.globalData.book);
         i = 1000;
       }
     }
     }
     wx.switchTab({
       url: '/pages/cart/cart'
     })
  },
  addcollect: function () {
     var temp = this.data.selected;
     this.setData({
       selected: !temp
     })
  },
  confirm: function () {

  },
  tocart: function () {

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
      book: app.globalData.book
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
  onUnload: function (options) {
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