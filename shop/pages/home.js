// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      slideshow: [{
          'id': 1,
          'img': 'http://192.168.0.105/wechat/slideshow_01.png',
      },{
          'id': 2,
          'img': 'http://192.168.0.105/wechat/slideshow_02.png',
      },{
          'id': 3,
          'img': 'http://192.168.0.105/wechat/slideshow_03.png',
      },{
          'id': 4,
          'img': 'http://192.168.0.105/wechat/slideshow_04.png',
      },],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      imageHeight: 0,
      goodsList: [{
          'id': 1,
          'name': '小迷糊玻尿酸补水黑膜',
          'desc': '让肌肤回归净润清透！',
          'price': 69,
          'origin_price': 299,
          'img': 'http://192.168.0.105/wechat/goods_001.jpg',
      },{
          'id': 2,
          'name': '小迷糊玻尿酸补水黑膜',
          'desc': '让肌肤回归净润清透！',
          'price': 69,
          'origin_price': 299,
          'img': 'http://192.168.0.105/wechat/goods_002.jpg',
      },{
          'id': 3,
          'name': '小迷糊玻尿酸补水黑膜',
          'desc': '让肌肤回归净润清透！',
          'price': 69,
          'origin_price': 299,
          'img': 'http://192.168.0.105/wechat/goods_003.jpg',
      },{
          'id': 4,
          'name': '小迷糊玻尿酸补水黑膜',
          'desc': '让肌肤回归净润清透！',
          'price': 69,
          'origin_price': 299,
          'img': 'http://192.168.0.105/wechat/goods_004.jpg',
      },{
          'id': 5,
          'name': '小迷糊玻尿酸补水黑膜',
          'desc': '让肌肤回归净润清透！',
          'price': 69,
          'origin_price': 299,
          'img': 'http://192.168.0.105/wechat/goods_005.jpg',
      },{
          'id': 6,
          'name': '小迷糊玻尿酸补水黑膜',
          'desc': '让肌肤回归净润清透！',
          'price': 69,
          'origin_price': 299,
          'img': 'http://192.168.0.105/wechat/goods_006.jpg',
      },{
          'id': 7,
          'name': '小迷糊玻尿酸补水黑膜',
          'desc': '让肌肤回归净润清透！',
          'price': 69,
          'origin_price': 299,
          'img': 'http://192.168.0.105/wechat/goods_007.jpg',
      },{
          'id': 8,
          'name': '小迷糊玻尿酸补水黑膜',
          'desc': '让肌肤回归净润清透！',
          'price': 69,
          'origin_price': 299,
          'img': 'http://192.168.0.105/wechat/goods_008.jpg',
      },],
  },
  imageLoad: function(e){
    let windowWidth = wx.getSystemInfoSync().windowWidth;
    let width = e.detail.width;
    let height = e.detail.height;
    this.setData({
        imageHeight: windowWidth * height / width,
    });
  },
  openThis: function(e){
      wx.navigateTo({
          url: '/pages/single?id='+e.currentTarget.dataset.id,
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