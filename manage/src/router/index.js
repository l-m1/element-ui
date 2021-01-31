import Vue from 'vue'
import VueRouter from 'vue-router'

//引入
Vue.use(VueRouter)

//导入界面
const Login = () => import('../views/login/Login.vue')
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login 
  }
]
//创建
const router = new VueRouter({
  routes,
  mode: 'history'
})

//导出
export default router