// pages/common/auth.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  setUserInfo: function(e){
    if (e.detail.errMsg !== "getUserInfo:ok"){
      console.log("授权被拒绝");
      return false;
    }
    let data = e.detail.userInfo;
    data["session"] = app.globalData.session;
    wx.request({
      url: app.globalData.baseApi + "user/info",
      method: "POST",
      header: {"Content-Type":"application/x-www-form-urlencoded"},
      data: data,
      success(res){
        if (res.data.code == 200){
          wx.navigateBack({
            delta: 1
          })
        }
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