import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/print/:orderid",
    name: "print",
    component: () =>
      import("../views/Print.vue")
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("../views/Menu.vue"),

    children: [{
      path: "parta",
      name: "parta",
      component: () =>
        import("../views/Parta.vue")
    },
    {
      path: "partb",
      name: "partb",
      component: () =>
        import("../views/Partb.vue")
    },
    {
      path: "order",
      name: "order",
      component: () =>
        import("../views/Order.vue")
    }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
