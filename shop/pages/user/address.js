// pages/user/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: [],
  },
  addThis: function(){
    let _this = this;
    wx.chooseAddress({
      success(res){
        let address = _this.data.address;
        let item = {
          id: address.length + 1,
          userName: res.userName,
          postalCode: res.postalCode,
          provinceName: res.provinceName,
          cityName: res.cityName,
          countyName: res.countyName,
          detailInfo: res.detailInfo,
          nationalCode: res.nationalCode,
          telNumber: res.telNumber,
          status: 0,
        };
        address.push(item);
        _this.setData({
            address: address,
        })
      }
    })
  },
  chooseThis: function(e){
    let address = this.data.address;
    address.forEach(function(item){
      item.status = 0;
      if(item.id === e.currentTarget.dataset.id){
        item.status = 1;
      }
    });
    this.setData({
        address: address,
    });
    console.log("选择地址");
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