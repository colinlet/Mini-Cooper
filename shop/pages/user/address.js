// pages/user/address.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: [],
  },
  getAddress: function(){
    let _this = this;
    wx.chooseAddress({
      success(res){
        let item = {
          user_name: res.userName,
          postal_code: res.postalCode,
          province_name: res.provinceName,
          city_name: res.cityName,
          county_name: res.countyName,
          detail_info: res.detailInfo,
          national_code: res.nationalCode,
          tel_number: res.telNumber,
        };
        _this.addThis(item);
      }
    })
  },
  addThis: function(params){
    let data = params;
    data["session"] = app.globalData.session;
    let _this = this;
    wx.request({
        url: app.globalData.baseApi + "user/address",
        method: "POST",
        header: {"Content-Type":"application/x-www-form-urlencoded"},
        data: data,
        success(res){
            if (res.data.code == 200){
              _this.getList();
            }
        }
    });
  },
  getList: function(){
    let _this = this;
    wx.request({
        url: app.globalData.baseApi + "user/address",
        method: "GET",
        data: {session: app.globalData.session},
        success(res){
          if (res.data.code == 200){
            _this.setData({
                address: res.data.list
            })
          }
        }
    })
  },
  chooseThis: function(e){
    let address = this.data.address;
    address.forEach(function(item){
      item.is_use = 0;
      if(item.id === e.currentTarget.dataset.id){
        item.is_use = 1;
      }
    });
    this.setData({
        address: address,
    });
    wx.request({
        url: app.globalData.baseApi + "user/chooseAddress",
        method: "POST",
        header: {"Content-Type":"application/x-www-form-urlencoded"},
        data: {session: app.globalData.session, id: e.currentTarget.dataset.id},
        success(res){
          if (res.data.code == 200){
            console.log("更新选中");
          }
        }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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