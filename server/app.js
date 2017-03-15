/****************************定义和引入********************************/
// 引入模块
var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var superagent = require('superagent'); //http://visionmedia.github.io/superagent/#response-properties 文档地址
var server = http.Server(app);
var host = 'http://localhost:';
var port = 9999; //设置本地转发服务端口
var Mock = require('mockjs')

/*************************以下为设置和启用*****************************/
// 设置node服务
app.set('port', port);
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// 启动服务
server.listen(app.get('port'), function () {
  console.log("服务已经启动，APIhost：" + host + app.get('port'));
});

/******************以下为此服务支持跨域请求********************/
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH');
  // res.set({
  //   'Content-Type': 'Content-Type:application/json; charset=UTF-8',
  // })
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

/******************以下是api公共部分，不用修改***********************/


// 设置后端服务器url
var dbUrl = 'http://localhost:8383'; //这里写你的后端api地址

// form 请求
var form = function (req, res, API, log) {
  var sreq = superagent.post(dbUrl + API);
  sreq.type('form')
  sreq.send(req.body);
  sreq.pipe(res);
  sreq.on('end', function () {
    console.log(log);
  });
}

// json 请求
var json = function (req, res, API, log) {
  var sreq = superagent.post(dbUrl + API);
  sreq.type('json')
  sreq.send(req.body);
  sreq.pipe(res);
  sreq.on('end', function () {
    console.log(log);
  });
}

/******************以下是api部分***********************/


// 代理转发部分


// form请求示例
app.get('/api/machine/init', function (req, res) {
  var API = '/api/v2/machine/init'
  var log = '初始化机器';
  form(req, res, API, log)
});

// json请求示例
app.get('/api/machine/init', function (req, res) {
  var API = '/api/v2/machine/init'
  var log = '初始化机器';
  json(req, res, API, log)
});


// mock假数据部分

// mock示例
app.get('/goods/size', function (req, res) {
  var data = Mock.mock([{
    "skuId": 4,
    "skuSubject": "清湿茶",
    "skuPackageType": "鹰牌",
    "skuSize": "罐装310ml",
    "skuWeight": 500,
    "skuOriginalPrice": 1,
    "skuSellingPrice": 1,
    "skuPicUrl": "http://store.easygovm.com/GP1450938662403清湿茶.jpg",
    "organizationId": "'01'",
    "gmtCreated": 1446639724000,
    "gmtModified": 1484230795000
  }])
  res.send(JSON.stringify(data))
  console.log('goodssize')
})
