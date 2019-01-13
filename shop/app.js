//app.js
App({
  onLaunch: function () {
    //初始化信息
    try{
      const jsonStr = wx.getStorageSync('cart-list');
      if (!jsonStr) return true;
      this.globalData.cartList = JSON.parse(jsonStr)
    }catch(e){
      console.log(e.toString());
      return false;
    }
    let cartNum = 0;
    this.globalData.cartList.forEach(function(item){
      cartNum += item.number;
    });
    this.globalData.cartNum = cartNum;
  },
  globalData: {
    baseApi: "https://mini.maplemark.cn/api/v1/",
    cartList: [],
    cartNum: 0,
    session: "",
    userInfo: {},
    contactInfo: "",
  },
  showContact: function() {
    if (this.globalData.contactInfo.length < 1){
      return false;
    }
    let _this = this;
    wx.showModal({
      title: "了解更多",
      content: _this.globalData.contactInfo,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
});