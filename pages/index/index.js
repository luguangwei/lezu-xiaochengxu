Page({
  data:{
    houseType:["一居室","两居室"],
    houseTypeIndex:0,
    inputContent:{}
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    
  },
  bindPickerChange:function(e){
      let _this = this;
      console.log(e.detail.value)
      _this.setData({
          houseTypeIndex: e.detail.value
      })
  },
  findHouse(e){
    let _this=this;
    let datas=0;
    let _salary= _this.data.inputContent.currentSalary;
    let _houseType= _this.data.houseTypeIndex;

    if( typeof( _salary)=="undefined" && !_salary){
        wx.showModal({
            title:"提示",
            content:"请输入当前月薪",
            showCancel: false
        })
    }

    if(_houseType=="0" && _salary < 10000){
        datas= 0;
    }else if(_houseType=="1" && _salary < 10000){
        datas= 1;
    }else if(_houseType=="0" && _salary > 10000){
        datas= 2;
    }else if(_houseType=="1" && _salary > 10000){
        datas= 3;
    }

    wx.navigateTo({
      url: '../content/content?type='+ datas,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      }
    })
  },
  bindchangeInput(e){
      let _this= this;
      _this.data.inputContent[e.target.id]= e.detail.value;
      console.log(this.data.inputContent)
  }


})