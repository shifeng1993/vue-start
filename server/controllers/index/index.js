const goodModel = require("../../models/goods/index.js");

class indexController {
    /*mock数据示例*/
    // 获取商品
    static async goods(ctx, next) {
        await next();
        function callback(res) {
            ctx.response.body = res;
        }
        goodModel.goods('goods', res => callback(res));
    }
}
module.exports = indexController;