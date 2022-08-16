<script setup>
import { storeToRefs } from "pinia"
import { usePostStore } from "../stores/posts"

const { posts, loading, error } = storeToRefs(usePostStore())
const { fetchPosts } = usePostStore()

fetchPosts()
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
