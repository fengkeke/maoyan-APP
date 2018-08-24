let IP = 'http://192.168.43.78:4444'
Page({
  data: {
    IP: 'http://192.168.43.78:4444',
    list: [],
    currentData: 0,
    timeList: [],
    damoHeight: '100',//demo高度
    imgUrls: [//图片地址
      {
        url: IP + '/moviea'
      }, 
    ],
    arry: [false, false],
  },
  onPageScroll: function (res) {
    var _this = this;
    //console.log(res.scrollTop);
    var str = parseInt(res.scrollTop / _this.data.damoHeight);
    _this.data.arry[str] = true;
    _this.setData({
      arry: _this.data.arry
    })
  },
  onLoad: function () {
    var that = this
    wx.request({
      // url: IP + '/moviea',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫list的这个数组中
        that.setData({
          list: res.data,
          //res代表success函数的事件对，data是固定的，list是数组
        })


        //预售
        //   let data = res.data;
        //   for (let music of data) {
        //     // 上映时间
        //     let activeTime = new Date(music.movie_time);
        //     console.log(activeTime)
        //     // 当前时间
        //     let nowTime = new Date();
        //     // console.log(nowTime)
        //     // 时间差
        //     let ctime = activeTime.getTime() - nowTime.getTime();
        //     // 如果时间已过,显示购买.否则预售
        //     music.isActive = ctime <= 0;
        //   }
        //   this.setData({
        //     timeList: data
        //   })
        // }.bind(this)



      }
    })

  },
  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  // 跳转电影详情
  particulars: function (options) {
    wx.navigateTo({
      url: '../details/details',
    })
  }

  
})