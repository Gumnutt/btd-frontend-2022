<script setup>
import { RouterLink } from "vue-router"
import { storeToRefs } from "pinia"
import { useProjectStore } from "../stores/projects"
import ProjectCard from "@/components/ProjectCard.vue"

const { projects, loading, error } = storeToRefs(useProjectStore())
const { fetchProjects } = useProjectStore()

fetchProjects()
</script>

<template>
  <main class="wrapper posts">
    <p v-if="loading">Loading projects...</p>
    <p v-if="error">{{ error.message }}</p>
    <div class="posts--header">
      <h1>Look mum, I did a thing</h1>
      <p>Every now and then I like to show off my work. Here's a few of my favourite projects.</p>
    </div>
    <ul class="posts--grid">
      <template v-if="projects">
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
      </template>
    </ul>
  </main>
</template>
