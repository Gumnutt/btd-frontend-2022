<script setup>
import { ref } from "vue"
import hero from "@/components/Hero.vue"
import pic from "@/components/Picture.vue"
let data = ref([])

fetch(`${import.meta.env.VITE_API_BASE_URL}/items/home_page`)
  .then((response) => response.json())
  .then((r) => (data.value = r.data))
</script>

<template>
  <main class="wrapper">
    <hero :subtitle="data.subtitle" :title="data.title" :description="data.description" :image="data.image" :images="data.images" />
  </main>
</template>
