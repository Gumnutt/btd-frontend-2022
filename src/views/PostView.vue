<script setup>
import { useRoute } from "vue-router"
import { storeToRefs } from "pinia"
import { usePostStore } from "../stores/posts"
import Post from "../components/Post.vue"

const route = useRoute()
const { post, loading, error } = storeToRefs(usePostStore())
const { fetchPost } = usePostStore()
fetchPost(route.params.id)
</script>

<template>
  <div>
    <p v-if="loading">Loading post...</p>
    <p v-if="error">{{ error.message }}</p>
    <p v-if="post">
      <post :post="post"></post>
    </p>
  </div>
</template>
