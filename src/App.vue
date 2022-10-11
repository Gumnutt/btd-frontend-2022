<script setup>
import { RouterLink, RouterView } from "vue-router"
import Loader from "./components/Loader.vue"
</script>

<template>
  <div :class="`${$route.name}--page`">
    <header>
      <nav class="wrapper">
        <div>
          <h1 class="hero--intro">Hey, I'm Brynn <span>👋</span></h1>
        </div>
        <div class="links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/posts">Posts</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
        </div>
      </nav>
    </header>
    <router-view v-slot="{ Component }" :key="$route.name">
      <transition name="fade" @before-leave="beforeLeave" @after-leave="afterLeave" appear>
        <component :is="Component" :key="`${$route.name}--component`" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  methods: {
    beforeLeave(el) {
      const { top } = el.getBoundingClientRect()
      el.style.position = "fixed"
      el.style.top = `${top}px`
      el.style.left = 0
      el.style.right = 0
      el.style.zIndex = "-1"
    },
    afterLeave(el) {
      el.style.position = ""
      el.style.top = ""
      el.style.left = ""
      el.style.right = ""
      el.style.zIndex = ""
    },
  },
  computed: {
    customStyle() {
      return {
        "is-mobile": this.mobile,
      }
    },
  },
}
</script>
