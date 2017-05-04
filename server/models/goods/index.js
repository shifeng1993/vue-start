// mock假数据模块
const Mock = require('mockjs');

class goodsModel {
    // 用户登录
    static async goods(params, res) {
        const data = Mock.mock([
            {
                id: 11,
                name: '矿泉水',
                price: '200'
            }, {
                id: 12,
                name: '奶茶',
                price: '200'
            }, {
                id: 13,
                name: '咖啡',
                price: '200'
            }, {
                id: 14,
                name: '啤酒',
                price: '200'
            }, {
                id: 15,
                name: '老白干',
                price: '200'
            }, {
                id: 16,
                name: '二锅头',
                price: '200'
            },{
                id: 21,
                name: '矿泉水',
                price: '200'
            }, {
                id: 22,
                name: '奶茶',
                price: '200'
            }, {
                id: 23,
                name: '咖啡',
                price: '200'
            }, {
                id: 24,
                name: '啤酒',
                price: '200'
            }, {
                id: 25,
                name: '老白干',
                price: '200'
            }, {
                id: 26,
                name: '二锅头',
                price: '200'
            },{
                id: 31,
                name: '矿泉水',
                price: '200'
            }, {
                id: 32,
                name: '奶茶',
                price: '200'
            }, {
                id: 33,
                name: '咖啡',
                price: '200'
            }, {
                id: 34,
                name: '啤酒',
                price: '200'
            }, {
                id: 35,
                name: '老白干',
                price: '200'
            }, {
                id: 36,
                name: '二锅头',
                price: '200'
            },{
                id: 41,
                name: '矿泉水',
                price: '200'
            }, {
                id: 42,
                name: '奶茶',
                price: '200'
            }, {
                id: 43,
                name: '咖啡',
                price: '200'
            }, {
                id: 44,
                name: '啤酒',
                price: '200'
            }, {
                id: 45,
                name: '老白干',
                price: '200'
            }, {
                id: 46,
                name: '二锅头',
                price: '200'
            },
            
        ])
        res(JSON.stringify(data))
        // await ……
    }

}
module.exports = goodsModel;