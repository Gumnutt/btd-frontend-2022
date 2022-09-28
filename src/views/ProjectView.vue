<script setup>
import { useRoute } from "vue-router"
import { storeToRefs } from "pinia"
import { useProjectStore } from "../stores/projects"
import Project from "../components/Project.vue"
defineProps(["id"])
const route = useRoute()
const { project, loading, error } = storeToRefs(useProjectStore())
const { fetchProject } = useProjectStore()
fetchProject(route.params.slug)
</script>

<template>
  <main class="project">
    <p v-if="loading">Loading project...</p>
    <p v-if="error">{{ error.message }}</p>
    <article v-if="project">
      <project :project="project"></project>
    </article>
  </main>
</template>
