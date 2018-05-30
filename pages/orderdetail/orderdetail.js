// pages/orderdetail/orderdetail.js\
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order: [],
    totalprice: 0,
    address: {}
  },
  confirm: function() {
    wx.request({
      url: 'http://47.93.185.25:8000/api/order/add',
      data: {
        address: app.globalData.address,
        order: app.globalData.order,
        totalprice: app.globalData.totalprice,
      },
      method: 'POST',
      success: (res, req) => {
        console.log(res.data);
        wx.showModal({
          title: '确认下单?',
          content: '',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
              wx.navigateBack({
              });
              for(let i = 0;i < app.globalData.order.length;i++)
              {
                for(let j = 0;j < app.globalData.carts.length;j++)
                {
                  if (app.globalData.order[i].id == app.globalData.carts[j].id)
                  {
                    console.log('删除购物车');
                    app.globalData.confirmorder = true;
                    app.globalData.carts.splice(j,1);
                  }
                } //判断下单后删除原来购物车相关内容
              }
              let totalprice1 = {totalprice: 0};
              if (app.globalData.totalprice != 0){
                totalprice1.totalprice = app.globalData.totalprice;
                app.globalData.order.push(totalprice1)
                app.globalData.orderindex.push(app.globalData.order);
              }
              app.globalData.totalprice = 0;
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        });
        
       
      }, 
      fail: (res, req) => {
        wx.showModal({
          title: '下单成功',
          content: '',
          showCancel: false
        });
        wx.navigateTo({
          url: '../cart/cart',
        })
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
    var self = this;
    /**
     * 获取本地缓存 地址信息
     */
    wx.getStorage({
      key: 'address',
      success: function (res) {
        self.setData({
          hasAddress: true,
          address: res.data
        })
      }
    })
     this.setData ({
       totalprice: app.globalData.totalprice,
       order: app.globalData.order
     });
     console.log(app.globalData.order);
     /* wx.request({
       url: 'http://47.93.185.25:8000/api/order/add',
       method: 'POST',
       data: {
         order: this.order,
         totalprice: this.totalprice
       },
       success: (res) => {
          console.log(res.data)
          this.setData({
            person: res.data
          })
       },
     }) */
     
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