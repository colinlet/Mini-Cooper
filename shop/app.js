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
    userInfo: null,
    session: "",
  },
  checkAuth: function(){
    try{
      const session = wx.getStorageSync("session");
      if (session) return false;
      this.globalData.session = session;
    }catch(e){
      console.log(e.toString());
      return false;
    }
    let _this = this;
    wx.login({
        success(res){
          if (res.code){
            _this.login(res.code);
          } else {
            console.log("登录失败！"+res.errMsg);
          }
        }
    });
  },
  login: function(code) {
    let _this = this;
    wx.request({
        url: _this.globalData.baseApi + "user/login",
        data: {code: code},
        success(res){
          if (res.data.code == 200) {

          }
          console.log(res);
        }
    })
  }
});