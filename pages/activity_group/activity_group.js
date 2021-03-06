// pages/activity_group/activity_group.js
var util=require("../../utils/util.js");
var pcapi=require("../../utils/pcapi.js");
var md5=require("../../utils/md5.js");
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rows_group:[],
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
    this.get_group();
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

  },
  goto_product_group:function(res)
  {
    var id=res.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/product_group/product_group?id='+id,
    })
  },
  get_group:function()
  {
    var thiss=this;
    pcapi.get_group(
      function(res)
      {
        if(res.data.code==1)
        {
          thiss.setData(
            {
              rows_group:res.data.data,
            }
          );
        }
      }
    );
  },
})