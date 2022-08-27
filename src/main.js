import { createApp } from "vue"
import { createPinia } from "pinia"

import Vue3Prism from "vue3-prism/lib/Vue3Prism.common.js"

import App from "./App.vue"
import router from "./router"

import "./assets/main.css"

const app = createApp(App)

app.use(createPinia())
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
