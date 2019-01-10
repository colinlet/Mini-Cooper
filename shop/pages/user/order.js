// pages/user/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [/*{
      order: '190101019054701',
      status: 1,
      total: 3555.00,
      list: [{
        name: '透真玻尿酸保湿蚕丝面膜',
        img: 'http://192.168.0.105/wechat/goods_001.jpg',
        price: 1128.00,
        number: 2,
      },{
        name: '透真玻尿酸保湿蚕丝面膜就',
        img: 'http://192.168.0.105/wechat/goods_002.jpg',
        price: 1299.00,
        number: 1,
      }]
    },{
        order: '190101019054701',
        status: 1,
        total: 3555.00,
        list: [{
            name: '透真玻尿酸保湿蚕丝面膜',
            img: 'http://192.168.0.105/wechat/goods_001.jpg',
            price: 1128.00,
            number: 2,
        },{
            name: '透真玻尿酸保湿蚕丝面膜就',
            img: 'http://192.168.0.105/wechat/goods_002.jpg',
            price: 1299.00,
            number: 1,
        }]
    }*/],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let statusArr = [
        '',
        '已付款',
        '等待发货',
        '已发货',
        '已签收',
        '退货中',
        '已退款',
    ];
    let orderList = this.data.orderList;
    orderList.forEach(function(item){
      item.status_name = statusArr[item.status];
    });
    this.setData({
        orderList: orderList,
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
});