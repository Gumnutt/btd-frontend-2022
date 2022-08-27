<script setup>
import { RouterLink } from "vue-router"
import { storeToRefs } from "pinia"
import { usePostStore } from "../stores/posts"
import PostCard from "@/components/PostCard.vue"

const { posts, loading, error } = storeToRefs(usePostStore())
const { fetchPosts } = usePostStore()

fetchPosts()
</script>

<template>
  <main class="wrapper posts">
    <p v-if="loading">Loading posts...</p>
    <p v-if="error">{{ error.message }}</p>
    <div class="posts--header">
      <h1>Read a thing</h1>
      <p>
        If there's one thing I love even more than you, it's teaching you the ins and outs of web development. Let's see if I can show you something
        new!
      </p>
    </div>
    <ul class="posts--grid">
      <template v-if="posts">
        <PostCard v-for="post in posts" :key="post.slug" :post="post" />
      </template>
    </ul>
    <!-- <template v-if="posts">
      <PostCard v-for="post in posts" :key="post.slug" :post="post" />
    </template> -->
  </main>
</template>
