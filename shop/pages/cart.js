// pages/cart.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
      app: app.globalData,
      selectStatus: 1,
      sum: 0,
      total: 0,
      active: 0,
  },
  goMall: function(){
    wx.switchTab({
      url: '/pages/home',
    })
  },
  selectAll: function(){
    let appData = this.data.app;
    let sum = 0;
    appData.cartList.forEach(function(item, index){
      item.selectStatus = item.selectStatus == '../static/img/cart_goods_01.png' ? '../static/img/cart_goods_02.png' : '../static/img/cart_goods_01.png';
      sum += (item.number * item.price);
      app.globalData.cartList[index].selectStatus = item.selectStatus;
    });
    this.setData({
      app: appData,
      selectStatus: this.data.selectStatus == 1 ? 2 : 1,
      sum: this.data.selectStatus == 1 ? sum : 0,
      total: this.data.selectStatus == 1 ? appData.cartList.length : 0,
      active: this.data.selectStatus == 1 ? 1 : 0,
    });
  },
  selectThis: function(e){
    let appData = this.data.app;
    let selectAll = 2;
    let sum = 0;
    let total = 0;
    appData.cartList.forEach(function(item, index){
      if (e.currentTarget.dataset.id == item.id){
        item.selectStatus = item.selectStatus == '../static/img/cart_goods_01.png' ? '../static/img/cart_goods_02.png' : '../static/img/cart_goods_01.png';
        app.globalData.cartList[index].selectStatus = item.selectStatus;
      }
      if (item.selectStatus == '../static/img/cart_goods_01.png') selectAll = 1;
      if (item.selectStatus == '../static/img/cart_goods_02.png'){
        sum += (item.number * item.price);
        total++;
      }
    });
    this.setData({
       app: appData,
       selectStatus: selectAll,
       sum: sum,
       total: total,
       active: total > 0 ? 1 : 0,
    });
  },
  payThis: function(){
    if (this.data.total < 1) return false;
    wx.navigateTo({
      url: '/pages/cart/balance',
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
    let appData = app.globalData;
    appData.cartList.forEach(function(item){
      if (!item.selectStatus) {
          item.selectStatus = '../static/img/cart_goods_01.png';
      }
    });
    this.setData({
      app: appData
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
});