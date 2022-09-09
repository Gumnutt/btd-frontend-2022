<script setup>
import { RouterLink, RouterView } from "vue-router"

console.log(window.localStorage.getItem("customStyle"))
</script>

<template>
  <div :class="customStyle">
    <header class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/posts">Posts</RouterLink>
      </nav>
    </header>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
