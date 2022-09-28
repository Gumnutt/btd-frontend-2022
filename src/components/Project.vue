<script setup>
import { marked } from "marked"
let baseURL = import.meta.env.VITE_API_BASE_URL
defineProps(["project"])
</script>
<template>
  <div class="project--content">
    <div class="project--image-container">
      <img :src="`${baseURL}/assets/${project.image}`" alt="" class="project--image" v-shared-element:[project.image] />
    </div>

    <div class="project--text-container">
      <div class="project--tech">
        <span v-for="(tech, i) in project.technologies" :key="i" class="tech--item">{{ tech }}</span>
      </div>
      <h1>{{ project.title }}</h1>
      <template v-html="marked(project.description)" v-hoist></template>
      <a :href="project.link" class="project--button">
        <p>View project</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
