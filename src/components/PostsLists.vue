<script setup>
import { ref } from "vue"
import { storeToRefs } from "pinia"
import { usePostStore } from "../stores/posts"

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
      <li v-for="(post, i) in posts" :key="i">
        <RouterLink :to="{ name: `post`, params: { slug: post.slug, id: post.id } }">
          <div class="wrapper">
            <div class="list--item">
              <h3>{{ post.title }}</h3>
              <p>{{ post.short_content }}</p>
              <div class="read--button">
                <p>Read</p>
                <p>Read</p>
              </div>
            </div>
          </div>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
