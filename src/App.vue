<script setup>
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <header class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/posts">Posts</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
