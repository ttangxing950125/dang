// pages/study/study.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: '../img/main1.png'
    }, {
      id: 1,
      type: 'image',
      url: '../img/main2.png',
    }, {
      id: 2,
      type: 'image',
      url: '../img/志愿者服务.jpeg'
    }],
    iconList: [{
      url: '../img/d3.png',

      name: '积极分子'
    }, {
      url: '../img/d2.png',

      name: '发展对象'
    }, {
      url: '../img/d1.png',

      name: '预备党员'
    }, {
      url: '../img/d4.png',

      name: '正式党员'
    }],
    gridCol: 4,
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