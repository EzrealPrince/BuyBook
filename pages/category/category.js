// pages/category/category.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bookname: '',
    bookList: [],
    msg: '',
  },
  formSubmit: function(e) {
    const value = e.detail.value;
     console.log(value.bookname);
     if(value.bookname) {
       wx.request({
         url: 'http://47.93.185.25:8000/api/book/search',
         data: {
           bookname: value.bookname
         },
         method: 'POST',
         success: (res) => {
           console.log(res.data.bookList);
           this.setData({
             bookList: res.data.bookList,
             bookname: ''
           });
         },
         fail: (res) => {
           console.log('error')
         }
       })
     }else {
       wx.showModal({
         title: '提示',
         content: '查询不能为空',
         showCancel: false
       })
     }
     
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
  bookdetail: function (e) {
    const index = e.currentTarget.dataset.index; 
    console.log('index' + index);
    console.log(this.data.bookList)
    console.log(this.data.bookList[index])
    let book = this.data.bookList[index];
    app.globalData.book = book;
    wx.navigateTo({
      url: '../bookdetail/bookdetail',
    })
  },
  clickViewKaoyan: function() {
    this.onShow();

},  
  clickViewJingguan: function() {
    wx.request({
      url: 'http://47.93.185.25:8000/api/book/type',
      data: {
        booktype: '经管'
      },
      method: 'POST',
      success: (res) => {
        console.log(res.data.bookList);
        this.setData({
          bookList: res.data.bookList,
        });  
      },
      fail: (res) => {
        console.log('error')
      } 
    })
  },
  clickViewTumu: function () {
    
  },
  clickViewCailiao: function () {
    app.globalData.booktype = '材料';
    wx.request({
      url: 'http://47.93.185.25:8000/',
    })
  },
  clickViewJixie: function () {

  },
  clickViewZidonghua: function () {

  },
  clickViewJisuanji: function () {
    wx.request({
      url: 'http://47.93.185.25:8000/api/book/type',
      data: {
        booktype: '计算机'
      },
      method: 'POST',
      success: (res) => {
        console.log(res.data.bookList);
        this.setData({
          bookList: res.data.bookList,
        });
      },
      fail: (res) => {
        console.log('error')
      }
    })
  },
  clickViewShuilishuidian: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.request({
      url: 'http://47.93.185.25:8000/api/book/type',
      data: {
        booktype: '计算机'
      },
      method: 'POST',
      success: (res) => {
        console.log(res.data.bookList);
        this.setData({
          bookList: res.data.bookList,
        });
      },
      fail: (res) => {
        console.log('error')
      }
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