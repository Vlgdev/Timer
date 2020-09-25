import Vue from 'vue'
import App from './App.vue'
import timeFilter from './filters/time.filter'

Vue.config.productionTip = true
Vue.filter('time', timeFilter)

new Vue({
  render: h => h(App),
}).$mount('#app')
