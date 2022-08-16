<script setup>
import { RouterLink } from "vue-router"
import { storeToRefs } from "pinia"
import { usePostStore } from "../stores/posts"

const { posts, loading, error } = storeToRefs(usePostStore())
const { fetchPosts } = usePostStore()

fetchPosts()
</script>

<template>
  <main>
    <p v-if="loading">Loading posts...</p>
    <p v-if="error">{{ error.message }}</p>
    <div v-if="posts">
      <div v-for="post in posts" :key="post.id">
        <RouterLink :to="`/post/${post.id}`">
          <h2>{{ post.title }}</h2>
          <p>{{ post.short_content }}</p>
        </RouterLink>
      </div>
    </div>
  </main>
</template>
