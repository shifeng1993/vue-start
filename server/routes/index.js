const router = require('koa-router')();
// 代理转发模块
const pixie = require('koa2-pixie-proxy');

// 设置后端服务器url
const proxy = pixie({host: 'http://localhost:9999'}); // node作为中间层做代理转发

// 引入controller
const index = require('../controllers/index/index.js');

// 跨域模块
router.all('/api/*', async(ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHead' +
            'erFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH');
    if (ctx.method == 'OPTIONS') {
        ctx.status = 200;
    } else {
        await next();
    }
});

/* ================以下是api模块=============== */
// 获取商品
router.get('/api/goods', index.goods)


// 代理转发示例 

//router.get('/api/goods',proxy('/api/goods'))

module.exports = router;
