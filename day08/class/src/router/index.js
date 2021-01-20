import Vue from 'vue'
import VueRouter from 'vue-router'
import Mine from "../views/Mine.vue"
import Detail from "../views/Detail";
import Now from "../views/Now"
import Comming from "../views/Comming"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue"),
    meta: {
      title: "首页"
    }
  },
  {
    path: '/about',
    name: 'About',
    alias: "/guanyu",
    component: () => import('../views/About.vue'),
    meta: {
      title: "关于"
    },
    beforeEnter: (to, from, next) => {
      // console.log(to);
      // console.log(from);
      if (from.name == "Home") {
        next();
      } else {
        next({
          path: "/"
        })
      }

    }
  },
  {
    path: "/mine",
    name: "mine",
    component: Mine,
    meta: {
      title: "个人"
    }
  },
  {
    // path:"/detail/:id",
    path: "/detail",
    name: "detail",
    component: Detail,
    meta: {
      title: "详情"
    }
  },
  {
    path: "/films",
    components: {
      "a": Now,
      "b": Comming
    }
  },
  {
    path: "/myshoppingcar",
    name: "myshoppingcar",
    component: () => import("../views/Myshoppingcar"),
    meta: {
      title: "购物车",
      isLogin: true
    }
  },
  {
    path: "/order",
    name: "order",
    component: () => import("../views/Order"),
    meta: {
      title: "订单",
      isLogin: true
    }
  },
  {
    path: "/page1",
    name: "page1",
    component: () => import("../views/Page1")
  },
  {
    path: "/page2",
    name: "page2",
    component: () => import("../views/Page2")
  },
  {
    path: "/page3",
    name: "page3",
    component: () => import("../views/Page3")
  },
  {
    path: "/page4",
    name: "page4",
    component: () => import("../views/Page4")
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/NotFound")
  },
  {
    path: "*",
    // component:()=>import ("../views/NotFound")
    redirect: {
      path: "/404"
    }
  }

]

const router = new VueRouter({
  mode: 'hash',
  routes
})
router.beforeEach((to, from, next) => {//全局的路由守卫
  //console.log(from);
  // console.log(to);
  document.title = to.meta.title || "xx公司";
  if (to.meta && to.meta.isLogin) {//这个路由 需要做登录的验证
    if (window.localStorage.getItem('username')) {
      next()
    } else {
      next({
        path: "/mine"
      })
    }

  } else {
    next();
  }


  // console.log(next);

})
//vue-router.esm.js?8c4f:2008 Uncaught (in promise) Error: Avoided redundant navigation to 的错误解决方案
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

export default router
