// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//导入库
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import animated from 'animate.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css'

// 并且使用它
Vue.use(animated)
Vue.use(iView)
// 此处为mock的使用方法
// require('./Mock/witam_server_mock')



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
