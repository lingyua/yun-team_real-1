// miniprogram/pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scope: true,
  },

  getUserInfo() {
    let that = this
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          that.setData({
            scope: true
          })
        } else {
          wx.getUserInfo({
            success(res){
              wx.setStorage({
                key: 'key',
                data: {
                  nickName: res.userInfo.nickName,
                  avatarUrl: res.userInfo.avatarUrl
                },
                success(res){
                  console.log(res)
                }
              })
            }
          })
        
          that.setData({
            scope: false
          })
          that.tohome()
        }
      }
    })
  },

  tohome() {
    wx.reLaunch({
      url: '/pages/home/page'
    })                        
  },
  onClose() {
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo()
    
    
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