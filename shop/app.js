//app.js
App({
  onLaunch: function () {
    //获取用户授权
    this.checkAuth();
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
    baseApi: "http://192.168.0.105:8080/api/v1/",
    cartList: [],
    cartNum: 0,
    session: "",
    userInfo: {},
    contactInfo: "客服微信号: maplemark",
  },
  checkAuth: function(){
    try{
      const session = wx.getStorageSync("session");
      if (session) {
        this.globalData.session = session;
        return true;
      }
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
        method: "GET",
        data: {code: code},
        success(res){
          if (res.data.code === 200) {
            _this.globalData.session = res.data.session;
            try{
              wx.setStorageSync("session", res.data.session);
            }catch(e){
              console.log(e.toString());
              return false;
            }
          }
        }
    })
  },
  showContact: function() {
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