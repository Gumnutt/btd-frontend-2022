<script setup>
import { useRoute } from "vue-router"
import { storeToRefs } from "pinia"
import { usePostStore } from "../stores/posts"
import Post from "../components/Post.vue"
defineProps(["id"])
const route = useRoute()
const { post, loading, error } = storeToRefs(usePostStore())
const { fetchPost } = usePostStore()
fetchPost(route.params.slug)
</script>

<template>
  <main class="wrapper">
    <p v-if="loading">Loading post...</p>
    <p v-if="error">{{ error.message }}</p>
    <article v-if="post">
      <post :post="post"></post>
    </article>
  </main>
</template>
