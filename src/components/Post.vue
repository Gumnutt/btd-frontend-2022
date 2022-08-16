<script setup>
import { RouterLink } from "vue-router"
import { storeToRefs } from "pinia"
import { marked } from "marked"
defineProps(["post"])
</script>

<template>
  <div class="wrapper post">
    <div class="post--header">
      <div class="post--header-inner">
        <h1>{{ post.title }}</h1>
      </div>
    </div>
    <div v-html="marked(post.text)"></div>
  </div>
</template>
