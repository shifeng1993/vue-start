// 引入插件模块
import VueRouter from 'vue-router'
import Vue from 'vue'

// 引入主页面
import Index from '../containers/Index.vue'
import Login from '../containers/Login.vue'
// 引入次级页面
// machine
// import Machine from '../containers/machine/Index.vue'
// import MachineType from '../containers/machine/Type.vue'

// 引入模块按router-view嵌套路由使用
// 启用插件
Vue.use(VueRouter)

// 配置
const routes = [
  {
    path: '/',
    component: Index,
    children: [
      // {
      //   path: 'machine',
      //   component: Machine,
      //   children: [
      //     {path: 'type', component: MachineType},
      //   ]
      // }
    ]
  },
  {path: '/login', component: Login}
]

// 传入配置
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes // （缩写）相当于 routes: routes
})

export default router
