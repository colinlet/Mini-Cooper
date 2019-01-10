// pages/user.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {}
  },
  openThis: function(e){
      wx.navigateTo({
          url: e.currentTarget.dataset.page,
      })
  },
  getInfo: function(){
      let _this = this;
      wx.request({
          url: app.globalData.baseApi + "user/info",
          method: "GET",
          data: {session: app.globalData.session},
          success(res) {
              if (res.data.code == 200){
                  if (res.data.data.nick_name.length > 0){
                      let zero = "1000000";
                      let midStr = new String(res.data.data.mid);
                      if (midStr.length < zero.length){
                          midStr = zero.substring(0, zero.length - midStr.length) + midStr;
                          res.data.data.mid = new Number(midStr);
                      }
                      _this.setData({
                          user: res.data.data
                      })
                  }else{
                      wx.navigateTo({
                          url: '/pages/common/auth',
                      })
                  }
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
    this.getInfo();
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