// pages/home.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
      slideshow: [],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      imageHeight: 0,
      goodsList: [],
      page: 1,
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
          url: '/pages/category/single?id='+e.currentTarget.dataset.id,
      })
  },
  getSlideshow: function(){
    let _this = this;
    wx.request({
        url: app.globalData.baseApi + "home/slideshow",
        method: "GET",
        success(res){
            if (res.data.code == 200){
                _this.setData({
                    slideshow: res.data.list
                });
            }
        }
    });
  },
  getList: function(){
    let _this = this;
    wx.request({
        url: app.globalData.baseApi + "home/list",
        method: "GET",
        data: {page: _this.data.page},
        success(res){
            if (res.data.code == 200){
                if (_this.data.page == 1){
                    wx.stopPullDownRefresh();
                }
                let list = _this.data.goodsList;
                if (_this.data.page == 1){
                    list = res.data.data.list;
                } else {
                    res.data.data.list.forEach(function(item){
                        list.push(item)
                    });
                }
                _this.setData({
                    goodsList: list,
                    page: _this.data.page + 1,
                })
            }
        },
        fail(){
            wx.stopPullDownRefresh();
        }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.startPullDownRefresh();
    this.getSlideshow();
    this.getList();
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
    this.setData({
        page: 1,
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      console.log("上拉");
      this.getList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
});