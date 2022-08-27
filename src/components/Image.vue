<script setup>
import { ref } from "vue"
let baseURL = import.meta.env.VITE_API_BASE_URL
const props = defineProps(["id"])
</script>

<template>
  <figure>
    <img loading="lazy" :src="`${baseURL}/assets/${props.id}`" />
    <div class="hero--detail"></div>
  </figure>
</template>
