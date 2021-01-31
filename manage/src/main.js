import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI, { Message } from 'element-ui';; //ui组件库
import 'element-ui/lib/theme-chalk/index.css'; //同上个一起使用
import api from './network/api'

import './assets/css/global.css'
import './assets/css/fonts/iconfont.css'

Vue.use(ElementUI)
Vue.prototype.$message = Message
Vue.prototype.$api = api

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

