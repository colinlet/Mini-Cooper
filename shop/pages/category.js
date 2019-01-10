// pages/category.js
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    menu: [],
    activeIndex: 0,
    submenu: [],
  },
  tapItem: function(e) {
    let _this = this;
    this.data.menu.forEach(function (item,index) {
       if (item.id === e.currentTarget.dataset.id){
         _this.setData({
             activeIndex: index,
         });
         _this.getData(item.id);
       }
    });
  },
  openThis: function(e){
    let params = '?id='+this.data.activeIndex;
        params += '&item_id='+e.currentTarget.dataset.item_id;
        params += '&title='+e.currentTarget.dataset.name;
    wx.navigateTo({
        url: '/pages/category/list'+params,
    })
  },
  getData: function(pid){
    let _this = this;
    wx.request({
        url: app.globalData.baseApi+"category/getList",
        method: "GET",
        data: {
            pid: pid
        },
        success(res){
            if (res.data.code == 200){
                if (pid == 0) {
                    _this.setData({
                        menu: res.data.data.list,
                    });
                    if (res.data.data.list.length > 0) {
                        _this.getData(_this.data.menu[0].id); //初始加载子列表
                    }
                }else{
                    _this.setData({
                        submenu: res.data.data.list,
                    })
                }
            }
        },
        fail(){

        }
      });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var _this = this
      wx.getSystemInfo({
          success: function(res) {
              _this.setData({
                  winHeight: res.windowHeight
              });
          }
      });
      this.getData(0);
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