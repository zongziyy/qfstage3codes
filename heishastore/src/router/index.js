import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/mall',
        name: 'mall',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/ShoppingMall.vue')
    },
    {
        path: '/mine',
        name: 'mine',
        meta: {
            isLogin: true
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Mine.vue')
    },
    {
        path: '/shoppingcar',
        name: 'shoppingcar',
        meta: {
            isLogin: true
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/ShoppingCar.vue')
    },
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Login.vue')
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
        path: '/contents/:pid/:skusn',
        name: 'contents',

        component: () => import( /* webpackChunkName: "about" */ '../views/Contents.vue'),
    },
    {
        path: '/search',
        name: 'search',
        component: () => import( /* webpackChunkName: "about" */ '../views/Search.vue'),
    },
    {
        path: '/404',
        name: 'notfound',
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

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || "mzl";
    if (to.meta && to.meta.isLogin) {
        if (window.localStorage.getItem("username")) {
            next()
        } else {
            next({
                path: '/login',
            })
        }
    } else {
        next()
    }
})


export default router