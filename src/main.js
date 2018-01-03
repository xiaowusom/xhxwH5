// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store';
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

Vue.config.productionTip = false //来关闭生产模式下给出的提示
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
