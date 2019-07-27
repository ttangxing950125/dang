// pages/main/main.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'http://bbs.idateal.com/img/main1.png'
    }, {
      id: 1,
      type: 'image',
        url: 'http://bbs.idateal.com/img/main2.png',
    }, {
      id: 2,
      type: 'image',
        url: 'http://bbs.idateal.com/img/志愿者服务.jpeg'
    }],
    iconList: [{
      url: 'http://bbs.idateal.com/img/d3.png',
      
      name: '积极分子'
    }, {
        url: 'http://bbs.idateal.com/img/d2.png',
      
      name: '发展对象'
    }, {
        url: 'http://bbs.idateal.com/img/d1.png',
      
      name: '预备党员'
    }, {
        url: 'http://bbs.idateal.com/img/d4.png',
     
      name: '正式党员'
    }],
    gridCol: 4,
    msgList:null,
    images: []
  },
  
  chooseImage(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images = this.data.images.concat(res.tempFilePaths)
        // 限制最多只能留下3张照片
        const images1 = images.length <= 3 ? images : images.slice(0, 3)
        this.setData({
          images: images1
        })
      }
    })
  },
  removeImage(e) {
    var that = this;
    var images = that.data.images;
    // 获取要删除的第几张图片的下标
    const idx = e.currentTarget.dataset.idx
    // splice  第一个参数是下表值  第二个参数是删除的数量
    images.splice(idx, 1)
    this.setData({
      images: images
    })
  },

  handleImagePreview(e) {
    const idx = e.target.dataset.idx
    const images = this.data.images
    wx.previewImage({
      current: images[idx],  //当前预览的图片
      urls: images,  //所有要预览的图片
    })
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
  onShow: function (e) {
    this.setData({
      msgList: [
        { title: "多地首套房贷利率上浮 热点城市渐迎零折扣时代" },
        { title: "交了20多年的国内漫游费将取消 你能省多少话费？" },
        { title: "北大教工合唱团出国演出遇尴尬:被要求给他人伴唱" }]
    });
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