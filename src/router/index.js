import Vue from 'vue'
import Router from 'vue-router'

// 引入主页面
import Index from '@/containers/Index'

Vue.use(Router)

// 配置
const routes = [
  {
    path: '/',
    component: Index
  }
]

export default new Router({
  mode: 'history', base: __dirname, routes // （缩写）相当于 routes: routes
})
