<script setup>
import { ref } from "vue"
import { storeToRefs } from "pinia"
import { usePostStore } from "../stores/posts"
import hero from "@/components/Hero.vue"
import PostsLists from "@/components/PostsLists.vue"
let data = ref([])

fetch(`${import.meta.env.VITE_API_BASE_URL}/items/home_page`)
  .then((response) => response.json())
  .then((r) => (data.value = r.data))

const { posts, loading, error } = storeToRefs(usePostStore())
const { fetchPosts } = usePostStore()

fetchPosts()
</script>

<template>
  <main class="home">
    <div class="wrapper">
      <hero :subtitle="data.subtitle" :title="data.title" :description="data.description" :image="data.image" :images="data.images" />
    </div>
    <posts-lists :subtitle="data.posts_subtitle" :summary="data.posts_detail"></posts-lists>
  </main>
</template>
