// pages/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      cartList: [],
      cart_number: 0,
  },
  goMall: function(){
    wx.switchTab({
      url: '/pages/home',
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
      //初始化购物车信息
      try{
          const jsonStr = wx.getStorageSync('cart-list');
          if (!jsonStr) return true;
          this.setData({
              cartList: JSON.parse(jsonStr),
          });
      }catch(e){
          console.log(e.toString());
          return false;
      }
      let cartNum = 0;
      this.data.cartList.forEach(function(item){
          cartNum += item.number;
      });
      this.setData({
          cart_number: cartNum,
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