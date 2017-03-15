import Vue from 'vue'
import App from './App'
import router from './routes'
import store from './stores'
// 以下是插件
// 悬浮提示
// import { VTooltip } from 'v-tooltip'
// Vue.directive('my-tooltip', VTooltip)
// // 百度地图
// import BaiduMap from 'vue-baidu-map'
// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: ''
// })

// 创建vue实例并渲染到app
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
