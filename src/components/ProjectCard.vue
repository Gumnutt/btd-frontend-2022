<script setup>
import ReadButton from "@/components/ReadButton.vue"
let baseURL = import.meta.env.VITE_API_BASE_URL
defineProps(["project"])
</script>

<template>
  <li>
    <RouterLink :to="{ name: `project`, params: { slug: project.slug, id: project.id } }" class="project--card">
      <div class="image--wrapper" v-shared-element:header v-if="project.image">
        <img
          :src="`${baseURL}/assets/${project.image}`"
          alt=""
          v-shared-element:[project.image]="{
            zIndex: -1,
            ignoreTransparency: true,
          }"
        />
      </div>
      <div class="project--content">
        <div class="project--text">
          <h3>{{ project.title }}</h3>
          <p>{{ project.short_description }}</p>
        </div>
        <ReadButton buttonText="View" />
      </div>
    </RouterLink>
  </li>
</template>

<script>
import imageHelpers from "@/helpers/imageHelpers"
export default {
  mixins: [imageHelpers],
}
</script>
