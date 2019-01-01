// pages/balance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buyList: [{
      'id': 1,
      'name': '小迷糊玻尿酸补水黑膜',
      'price': 69,
      'img': 'http://192.168.0.105/wechat/goods_001.jpg',
      'number': 1,
    },{
      'id': 1,
      'name': '小迷糊玻尿酸补水黑膜',
      'price': 69,
      'img': 'http://192.168.0.105/wechat/goods_001.jpg',
      'number': 1,
    }],
  },
  changeAddress: function(){
    wx.navigateTo({
      url: '/pages/user/address',
    })
  },
  payThis: function(){
      wx.showModal({
          title: '提示',
          content: '支付还未接入，暂时无法进行结算',
          success(res) {
              if (res.confirm) {
                  console.log('用户点击确定')
              } else if (res.cancel) {
                  console.log('用户点击取消')
              }
          }
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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