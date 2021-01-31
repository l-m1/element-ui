import Vue from 'vue'
import VueRouter from 'vue-router'

//引入
Vue.use(VueRouter)

//导入界面
const Login = () => import('../views/login/Login.vue')
const Home = () => import('../views/home/Home.vue')
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login 
  },
  {
    path: '/home',
    component: Home 
  }
]
//创建
const router = new VueRouter({
  routes,
  mode: 'history'
})

//添加导航守卫/钩子函数
router.beforeEach((to,from,next) => {
  //如果访问的是登录页
  if(to.path === '/login') return next()
  //保存登陆后的token值
  const tokenStr = window.sessionStorage.getItem('token')
  //没有token则强制跳转到登录页
  if(!tokenStr) return next('/login')
  //存在tokenStr
  next()
})

//导出
export default router