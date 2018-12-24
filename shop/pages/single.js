// pages/single.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    app: app.globalData,
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    imageHeight: 0,
    showcase: [
        'http://192.168.0.105/wechat/showcase_01.png',
        'http://192.168.0.105/wechat/showcase_02.png',
        'http://192.168.0.105/wechat/showcase_03.png',
        'http://192.168.0.105/wechat/showcase_04.png',
        'http://192.168.0.105/wechat/showcase_05.png',
    ],
    id: 0,
    name: '自然堂补水保湿面膜',
    desc: '喜马拉雅魔法，补水嫩肤、舒缓保湿、细致毛孔、提亮肤色，保质期3年，规格36ml*5',
    price: '8888',
    origin_price: '9999',
    list: [
        'http://192.168.0.105/wechat/goods_001.png',
        'http://192.168.0.105/wechat/goods_002.png',
        'http://192.168.0.105/wechat/goods_003.png',
        'http://192.168.0.105/wechat/goods_004.png',
        'http://192.168.0.105/wechat/goods_005.png',
        'http://192.168.0.105/wechat/goods_006.png',
        'http://192.168.0.105/wechat/goods_007.png',
        'http://192.168.0.105/wechat/goods_007.png',
        'http://192.168.0.105/wechat/goods_008.png',
        'http://192.168.0.105/wechat/goods_009.png',
        'http://192.168.0.105/wechat/goods_010.png',
    ],
    images: []
  },
  imageLoad: function(e){
    let windowWidth = wx.getSystemInfoSync().windowWidth;
    let width = e.detail.width;
    let height = e.detail.height;
    this.setData({
      imageHeight: windowWidth * height / width,
    });
  },
  listLoad: function(e){
    let ratio = e.detail.width / e.detail.height;
    let image = this.data.images;
    image[e.target.dataset.id]={
      width: 750,
      height: 750 /ratio,
    };
    this.setData({
      images: image
    })
  },
  addCart: function(){
    let _this = this;
    let newItem = true;
    app.globalData.cartList.forEach(function(item, index){
        if (item.id == _this.data.id){
            newItem = false;
            app.globalData.cartList[index].number++;
        }
    });
    if (newItem){
        let goodsItem = {
            id: this.data.id,
            name: this.data.name,
            desc: this.data.desc,
            price: this.data.price,
            origin_price: this.data.origin_price,
            img: this.data.showcase[0],
            number: 1,
        };
        app.globalData.cartList.push(goodsItem);
    }
    try{
        wx.setStorageSync('cart-list', JSON.stringify(app.globalData.cartList));
    }catch(e){
        console.log(e.toString());
        return false;
    }
    wx.showToast({
        title: '成功加入购物车',
        duration: 2000
    });
    app.globalData.cartNum++;
    this.setData({
        app: app.globalData,
    });
  },
  buy: function(){

  },
  goCart: function(){
    wx.switchTab({
        url: '/pages/cart',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
        id: options.id,
    });
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