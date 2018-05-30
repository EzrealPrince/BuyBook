// pages/cart/cart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],
    hasList: false,
    totalPrice: 0,
    selectAll: true
  },
  
  bindViewTOrder: function () {
    app.globalData.order = [];
    let carts = this.data.carts;
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected == true) {
        app.globalData.order.push(carts[i]);
      }
    }
    wx.navigateTo({
      url: '../orderdetail/orderdetail'
    })
  },
  
  getTotalPrice: function() {
    let carts = this.data.carts;
    let total = 0;
    for(let i = 0;i < carts.length; i++)
    {
      if(carts[i].selected != false)
      {
        total = total + carts[i].price * carts[i].num;
      }
    }
    this.setData({
      carts: carts,
      totalPrice: total.toFixed(2)
    })
    app.globalData.totalprice = total.toFixed(2);
  },

  selectList: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    const selected = carts[index].selected;
    carts[index].selected = !selected;
    if(selected == true)
    {
      this.selectAll = false;
    }
    this.setData({
      carts: carts,
    });
    this.getTotalPrice();
  },

  selectListAll: function() {
    let carts = this.data.carts;
    for(let i = 0;i < carts.length;i++)
    {
      carts[i].selected = true;
    }
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  addnumber: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  subnumber: function (e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  deleteitem: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index,1);
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
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
    if(app.globalData.carts.length > 0)
    {
      this.setData({
        hasList: true,
        carts: app.globalData.carts
      });
      this.getTotalPrice();
      console.log(app.globalData.carts);
    }
    else {
      if(app.globalData.confirmorder == true)
      {
        this.setData({
          hasList: false,
          carts: app.globalData.carts,
        });
        app.globalData.confirmorder = false;
        this.getTotalPrice();
      }
    }
        
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