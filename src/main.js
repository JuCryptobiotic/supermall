import Vue from 'vue'
import App from './App.vue'
// 这里的./router省略了/index.js
import router from "./router";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
