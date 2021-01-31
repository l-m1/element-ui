import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI, { Message } from 'element-ui';; //ui组件库
import 'element-ui/lib/theme-chalk/index.css'; //同上个一起使用

import './assets/css/global.css'

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

