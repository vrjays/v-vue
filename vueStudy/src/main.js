import Vue from 'vue'
import App from './App.vue'
import './common/css/normalize.css'
import './common/css/base.css'

Vue.config.productionTip = false
Vue.prototype.navigateTo = function(obj){
	alert(1);
}

import router from './router2.js'



new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
