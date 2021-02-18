import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Login
    },
    {
        path: "/teacher",
        name: "teacher",
        component: () =>
            import("../views/Teacher.vue")
    },
    {
        path: "/student",
        name: "student",
        component: () =>
            import("../views/Student.vue")
    },
    {
        path: "/test",
        name: "test",
        component: () =>
            import("../views/test/xt.vue")
    },
    {
        path: "/echarts",
        name: "echarts",
        component: () =>
            import("../views/Echarts.vue")
    }

]
const router = new VueRouter({
    mode: "hash", //history
    routes
})

export default router