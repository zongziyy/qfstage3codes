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
    component:List,
    children:[
      {
        path:"",
        // component:()=>{return  import ("../components/home/NowPlaying")}
        redirect:{
          path:"/list/nowplaying"
        }
      },
      {
        path:"nowplaying",
        name:"nowplaying",
        component:()=>{return  import ("../components/home/NowPlaying")}
    },{
      path:"comming",
      name:"comming",
      component:()=>import("../components/home/Comming")
    }]
  },
  {
    path:"/detail",
    name:"detail",
    component:()=>import  ("../views/Detail")
  },
  {
    path:"/buy/:id",//该路由 只有带参数 才能访问
    name:"buy",
    component:()=>import  ("../views/Buy")
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
