<script setup>
import { ref } from "vue"
let baseURL = import.meta.env.VITE_API_BASE_URL
const props = defineProps({ imageIds: [], hasDetail: false })

let images = ref([])

props?.imageIds.forEach(async (id) => {
  const response = await fetch(`${baseURL}/items/home_page_files`)
    .then((response) => response.json())
    .then((r) => r.data)

  const fieldStore = response.filter((img) => {
    return img.id === id
  })

  const UUID = fieldStore[0].directus_files_id

  // fetch image data from API
  const image = await fetch(`${baseURL}/files/${UUID}`)
    .then((response) => response.json())
    .then((r) => r.data)
    .then((r) => {
      return {
        id: r.id,
        url: `${baseURL}/assets/${r.id}`,
        alt: r.description,
        title: r.title,
        type: r.type.split("/")[1],
        mimetype: r.type,
      }
    })
    .catch((error) => {
      console.log(error)
    })

  images.value.push(image)
})
</script>

<template>
  <picture>
    <template v-for="image in images" :key="image.id">
      <source v-if="!['jpg', 'jpeg'].includes(image.type)" :srcset="image.url" :type="image.mimetype" />
      <img v-else :alt="image.alt ? image.alt : null" :src="image.url" />
    </template>
    <div v-if="hasDetail" class="hero--detail"></div>
  </picture>
</template>
