import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
// 引入vant组件
import './plugins/vant'
import 'amfe-flexible/index.js'

import api from './api/apis'

import * as filters from './filter/filter' // 过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
Vue.prototype.$api = api


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')