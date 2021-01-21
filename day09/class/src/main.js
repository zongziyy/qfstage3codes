import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
// js和css
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible';

Date.prototype.dateFormate=function(str){
  let  year = this.getFullYear();
  let  month = this.getMonth()+1;
  let  day = this.getDate();

  return  str.replace("yyyy",year).replace("mm",month).replace("dd",day);

}


Vue.use(Vant);

Vue.config.productionTip = false
// Vue.prototype.$axios  = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
