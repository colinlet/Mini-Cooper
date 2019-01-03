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
    goods: {},
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
        if (item.id == _this.data.goods.id){
            newItem = false;
            app.globalData.cartList[index].number++;
        }
    });
    if (newItem){
        let goodsItem = {
            id: this.data.goods.id,
            name: this.data.goods.name,
            desc: this.data.goods.desc,
            price: this.data.goods.price,
            origin_price: this.data.goods.origin_price,
            img: this.data.goods.img + this.data.goods.showcase[0],
            number: 1,
            selectStatus: '',
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
    let params = 'id='+this.data.goods.id+
        '&name='+this.data.goods.name+
        '&img='+this.data.goods.showcase[0]+
        '&price='+this.data.goods.price;
    wx.navigateTo({
        url: '/pages/balance?'+params,
    })
  },
  goCart: function(){
    wx.switchTab({
        url: '/pages/cart',
    })
  },
  getData: function(){
    let _this = this;
    wx.request({
        url: app.globalData.baseApi+"goods",
        method: "GET",
        data: {
            id: this.data.goods.id,
        },
        success(res){
            if (res.data.code == 200){
                let goods = res.data.data;
                goods.showcase = goods.showcase.split(",");
                goods.list = goods.list.split(",");
                _this.setData({
                    goods: goods,
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
    let goods = this.data.goods;
    goods.id = options.id;
    this.setData({
        goods: goods,
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