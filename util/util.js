function getData(url){
    return new Promise(function(resolve,reject){
        wx.request({
          url: url,
          method: 'GET',
          success: function(res){
            console.log(res);
            resolve(res);
          },
          fail: function(err) {
            console.log(err);
            reject(err);
          }
        })
    })
}

module.exports={
    getData : getData
}