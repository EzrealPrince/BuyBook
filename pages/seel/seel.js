// pages/seel/seel.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    search: false,
    BookName: '',
    TotalPrice: 0,
    SearchList: [],
    SeelBookList: [],
    complete: false,
  },
  search: function () {
    this.setData({
      search: true
    })
  },
  back: function () {
    this.setData({
      search: false
    })
  },
  addSeelBookList: function (e) {
    const index = e.currentTarget.dataset.index;
    console.log(index);
    let SearchList = this.data.SearchList;
    let SeelBookList = this.data.SeelBookList;
    SeelBookList.push(SearchList[index]);
    this.setData({
      SeelBookList: SeelBookList,
      search: false
    });
    this.getTotalPrice();
  },
  getTotalPrice: function () {
    let carts = this.data.SeelBookList;
    let total = 0;
    for (let i = 0; i < carts.length; i++) {
        total = total + carts[i].price 
    }
    this.setData({
      TotalPrice: total.toFixed(2)
    })
  },
  confirmseel: function () {
    wx.showModal({
      title: '确认卖出所选课本?',
      content: '',
      success: (res) => {
        if (res.confirm) {
          console.log('用户点击确定')
          app.globalData.seelList.push(this.data.SeelBookList);
          this.setData({
            SeelBookList: []
          });
          wx.showModal({
            title: '售单成功，快去看看您的售卖吧',
            content: '',
            success: () => {
              wx.navigateTo({
                url: '../myorder/myorder',
              })
            }
          })
          
        }
      }
    })
  },
  SearchBook: function (e) {
    this.setData({
      complete: true
    })
    const value = e.detail.value;
    console.log(value);
    wx.request({
      url: 'http://47.93.185.25:8000/api/book/seel',
      data: {
        bookname: value
      },
      method: 'POST',
      success: (res) => {
        console.log(res.data.bookList);
        this.setData({
          SearchList: res.data.bookList,
          complete: false
        });
      },
      fail: (res) => {
        console.log('error')
      }
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
   * 页面上拉触底事件的处理函数s
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})