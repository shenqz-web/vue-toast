import Vue from 'vue'
import App from './App'
import router from './router'
import Notice from './components/notice'
import Toast from './components/toast'
import Indicator from './components/indicator'
import Dialog from './components/dialog'

Vue.config.productionTip = false
Vue.use(Notice)
Vue.use(Toast)
Vue.use(Indicator)
Vue.use(Dialog)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
