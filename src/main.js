// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {Row,Col,Dialog,Popover } from 'element-ui'
import router from './router'
import store from './store'
import './mock/mockServer.js'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Dialog.name, Dialog)
Vue.component(Popover.name, Popover)
Vue.use(VueLazyload,{
	error:'static/loading.gif',
	loading:'static/Loading.gif',

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
