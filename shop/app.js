//app.js
App({
  onLaunch: function () {
    //初始化购物车信息
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
    baseApi: "http://192.168.0.105:8000/api/v1/",
    cartList: [],
    cartNum: 0,
    userInfo: null
  },
});