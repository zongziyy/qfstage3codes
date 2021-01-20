import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
import Banner from '../views/Banner.vue'
import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)

const routes = [{
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
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/mine',
        name: 'Mine',
        component: Mine
    },
    {
        path: '/banner',
        name: 'Banner',
        component: Banner
    },
    {
        path: '/buy/:id',
        name: 'buy',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Buy.vue')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Detail.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register.vue')
    },
    {
        path: '/404',
        name: 'notFound',
        component: NotFound
    },
    {
        path: '*',
        redirect: {
            path: '/404'
        }
    }
]

const router = new VueRouter({
    routes
})


router.beforeEach = (to, from, next) => {
    document.title = to.meta.title || "mzl";
    if (to.mate && to.mate.isLogin) {
        if (window.localStorage.getItem("username")) {
            next()
        } else {
            next({
                path: '/mine',
            })
        }
    } else {
        next()
    }
}


//vue-router.esm.js?8c4f:2008 Uncaught (in promise) Error: Avoided redundant navigation to 的错误解决方案
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
export default router