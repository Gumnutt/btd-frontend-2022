<script setup>
import { ref } from "vue"
import { storeToRefs } from "pinia"
import { usePostStore } from "../stores/posts"
import ReadButton from "@/components/ReadButton.vue"

const { posts, loading, error } = storeToRefs(usePostStore())
const { fetchPosts } = usePostStore()

fetchPosts()

defineProps(["subtitle", "summary"])
</script>

<template>
  <section class="posts--list">
    <div class="wrapper">
      <div class="posts--details">
        <p>{{ subtitle }}</p>
        <h2>{{ summary }}</h2>
      </div>
    </div>
    <ul>
      <li v-for="{ title, short_content, slug, id } in posts" :key="id">
        <RouterLink :to="{ name: `post`, params: { slug: slug, id: id } }">
          <div class="wrapper">
            <div class="list--item">
              <h3>{{ title }}</h3>
              <p>{{ short_content }}</p>
              <ReadButton buttonText="Read" />
            </div>
          </div>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
