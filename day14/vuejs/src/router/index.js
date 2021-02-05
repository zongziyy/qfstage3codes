import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/teacher',
        name: 'teacher',
        component: () => import('../views/Teacher.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router