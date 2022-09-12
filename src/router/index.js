import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import NotFoundView from "../views/NotFoundView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: () => {
        let customStyle = window.sessionStorage.getItem("customStyle")
        document.getElementsByTagName("html")[0].setAttribute("class", customStyle)
      },
    },
    {
      path: "/posts",
      name: "posts",
      component: () => import("../views/PostsView.vue"),
    },
    { path: "/post/:slug", name: "post", component: () => import("../views/PostView.vue"), props: true },
    {
      path: "/%F0%9F%8C%88",
      beforeEnter: (to, from, next) => {
        window.sessionStorage.setItem("customStyle", "rainbow")
        next("/")
      },
    },
    {
      path: "/%F0%9F%8E%A8",
      beforeEnter: (to, from, next) => {
        window.sessionStorage.setItem("customStyle", "popart")
        next("/")
      },
    },
    {
      path: "/:pathMatch(.*)*",
      beforeEnter: (to, from, next) => {
        next("/404")
      },
    },
    { path: "/404", name: "404", component: NotFoundView },
  ],
})

router.resolve({
  name: "404",
  params: { pathMatch: ["not", "found"] },
}).href

export default router
