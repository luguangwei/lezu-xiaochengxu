let util= require("../../util/util");

Page({
  data:{
    btmbar:{
      navIcon:[
        "/images/nav/recommend.png",
        "/images/nav/station.png",
        "/images/nav/traffic.png",
        "/images/nav/around.png",
        "/images/nav/order.png"
      ],
      navBigIcon:[
        "/images/nav/recommend-big.png",
        "/images/nav/station-big.png",
        "/images/nav/traffic-big.png",
        "/images/nav/around-big.png",
        "/images/nav/order-big.png"
      ]
    },
    starBox:[
      "/images/starbg.png",
      "/images/starbg.png",
      "/images/starbg.png",
      "/images/starbg.png",
      "/images/starbg.png"
    ],
    navTxt:["推荐小区","概况","交通","周边","治安"],
    currentImg:[],
    navClass:["navClass","navClassBig","navClass","navClass","navClass"],
    Datas:{},
    recommend:{},
    tabHidden:[false,true,true,true,true]

  },

  onLoad:function(options){
      let _this= this;
      util.getData('https://api.getweapp.com/vendor/rent').then(function(data){
          _this.setData({
              Datas: data.data.datas[0]
          })
      });

      //底部菜单栏tab切换
      _this.changeIcon(0);
  },
  onReady:function(){
    let _that= this;
    let _starBox=[];

    _that.setData({
      recommend: this.data.Datas.recommend,
      station: this.data.Datas.station,
      security: this.data.Datas.order,
      around: this.data.Datas.around,
      traffic: this.data.Datas.traffic
    })
    console.log( this.data.traffic)


    // 治安页面评级level
    for(var i=0; i<5; i++){
      if(i< _that.data.security.starLv){
        _starBox[i]="/images/star.png"
      }else{
        _starBox[i]="/images/starbg.png"
      }
     }

      _that.setData({
        starBox:_starBox
    })
  },

  changeIcon:function(num){
    let _this= this;
    let _class=[];
    let _icon=[];
    let _tabHidden=[];
    
    for(var i=0 ; i< 5; i++){
      if(i!=num){
        _class[i]="navClass";
        _icon[i]= _this.data.btmbar.navIcon[i];
        _tabHidden[i]=true;
      }else{
        _class[i]= "navClassBig";
        _icon[i]= _this.data.btmbar.navBigIcon[i];
        _tabHidden[i]=false;
      }
    };

    _this.setData({
      navClass: _class,
      currentImg: _icon,
      tabHidden: _tabHidden
    })

  },
  swiperTab:function(e){
    console.log(e.target.dataset.num)
    let _num= e.target.dataset.num;

    this.changeIcon(_num);
  }

})
