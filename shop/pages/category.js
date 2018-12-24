// pages/category.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    menu: [{
      'id': 1, 'name': '新品', 'list': [
          {'item_id':1, 'name': '面膜', 'img': 'http://192.168.0.105/wechat/cate_001.png'},
          {'item_id':1, 'name': '护肤套装', 'img': 'http://192.168.0.105/wechat/cate_001.png'},
          {'item_id':1, 'name': '卸妆', 'img': 'http://192.168.0.105/wechat/cate_001.png'},
          {'item_id':1, 'name': '补水', 'img': 'http://192.168.0.105/wechat/cate_001.png'},
        ],
    },{
      'id': 2, 'name': '热销', 'list': [
            {'item_id':1, 'name': '时尚彩妆', 'img': 'http://192.168.0.105/wechat/cate_001.png'},
            {'item_id':1, 'name': '沐浴露', 'img': 'http://192.168.0.105/wechat/cate_001.png'},
        ],
    },{
      'id': 3, 'name': '折扣',
    },{
      'id': 4, 'name': '护肤品',
    },{
      'id': 5, 'name': '彩妆',
    },{
      'id': 6, 'name': '男士护肤',
    },{
      'id': 7, 'name': '肤质推选',
    },{
      'id': 8, 'name': '美发护发',
    },{
      'id': 9, 'name': '包包',
    },{
      'id': 10, 'name': '手表',
    },{
      'id': 11, 'name': '药品',
    }],
    activeIndex: 0,
    submenu: [],
  },
  tapItem: function(e) {
    let _this = this;
    this.data.menu.forEach(function (item,index) {
       if (item.id === e.currentTarget.dataset.id){
         _this.setData({
             activeIndex: index,
             submenu: item.list
         })
       }
    });
  },
  openThis: function(e){
    let params = '?id='+this.data.activeIndex;
        params += '&item_id='+e.currentTarget.dataset.item_id;
        params += '&title='+e.currentTarget.dataset.name;
    wx.navigateTo({
        url: '/pages/list'+params,
    })
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
      this.setData({
          submenu: this.data.menu[this.data.activeIndex].list
      })
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