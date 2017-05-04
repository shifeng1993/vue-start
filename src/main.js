import Vue from 'vue'
import App from './App'
import router from './router'
import store from './stores'

// 创建vue实例并渲染到app
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
