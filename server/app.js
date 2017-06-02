/* =================以下是引入模块=======================*/
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const json = require('koa-json');
const onerror = require('koa-onerror');
const app = new Koa();
var server = require('http').Server(app.callback());
var io = require('socket.io')(server);

// 引入路由
const index = require('./routes/index');

// 错误处理
onerror(app);

// 定义本地服务端口
const host = 'http://127.0.0.1:';
const port = 3333; //设置本地服务端口

// 中间件
app.use(bodyparser());
app.use(json());

//资源加载记录log
app.use(async(ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// 监听端口开启服务
server.listen(port, () => console.log("服务已经启动，APIhost：" + host + port));

io.on('connection', function (socket) {
  socket.emit('连接成功');
  socket.on('onindex', function (data) {
    console.log(data);
  });
  var index = 1;
  function a(){
    socket.emit('news',index++);
  }
  setInterval(a,3000)
});

/*引入路由文件*/
app.use(index.routes(), index.allowedMethods());