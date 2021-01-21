import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mine from  "../views/Mine.vue"
import List  from  "../views/List";
import NotFoud from  "../views/NotFound";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path:"/mine",
    name:"mine",
    component:Mine
  },{
    path:"/list",
    name:"list",
    component:List
  },
  {
    path:"/detail",
    name:"detail",
    component:()=>import  ("../views/Detail")
  },
  {
    path:"/page1",
    name:"page1",
    component:()=>import  ("../views/Page1")
  },
  {
    path:"/page2",
    name:"page2",
    component:()=>import  ("../views/Page2")
  },
  {
    path:"/buy/:id",//该路由 只有带参数 才能访问
    name:"buy",
    component:()=>import  ("../views/Buy")
  },
  {
    path:"/register",
    name:"register",
    component:()=>import  ("../views/Register")
  },
  {
    path:"/shoppingcar",
    name:"shoppingcar",
    component:()=>import  ("../views/Shoppingcar")
  },
  {
    path:"/pay",
    name:"pay",
    component:()=>import  ("../views/Pay")
  },
  {
    path:"/404",
    name:"404",
    component:NotFoud
  },
  {
    path:"*",
    // component:NotFoud  保留错误的地址
    redirect:{
      path:"/404"
    }
  }
]
const router = new VueRouter({
  mode:"hash",//history
  routes
})

export default router
