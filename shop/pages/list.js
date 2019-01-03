// pages/list.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
      id: 0,
      page: 1,
      goodsList: [],
  },
  openThis: function(e){
    wx.navigateTo({
        url: '/pages/single?id='+e.currentTarget.dataset.id,
    })
  },
  getData: function(){
    let _this = this;
    wx.request({
        url: app.globalData.baseApi+"goods/getList",
        method: "GET",
        data: {
            id: this.data.id,
            page: this.data.page,
        },
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
                    page: _this.data.page+1,
                });
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
    wx.setNavigationBarTitle({
      title: options.title,
    });
    this.setData({
        id: options.item_id,
    });
    this.getData();
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
    this.getData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉");
    this.getData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})