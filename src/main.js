import { createApp } from "vue"
import { createPinia } from "pinia"

import Vue3Prism from "vue3-prism/lib/Vue3Prism.common.js"

import App from "./App.vue"
import router from "./router"

import { SharedElementRouteGuard, SharedElementDirective } from "v-shared-element"

import "./assets/main.css"

router.beforeEach(SharedElementRouteGuard)

const app = createApp(App)

addEventListener("resize", () => {
  app.config.globalProperties.mobile = window.innerWidth < 768
})
app.config.globalProperties.mobile = window.innerWidth < 768

app.use(createPinia())
app.use(SharedElementDirective)
app.use(router)
app.use(Vue3Prism)
app.directive("hoist", (el) => {
  if (el.tagName === "TEMPLATE") {
    el.replaceWith(el.content)
  } else {
    el.replaceWith(...el.children)
  }
})
app.mount("#app")
