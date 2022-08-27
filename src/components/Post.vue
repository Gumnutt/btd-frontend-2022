<script setup>
import { ref } from "vue"
import { RouterLink } from "vue-router"
import { storeToRefs } from "pinia"
import { marked } from "marked"
import DOMPurify from "dompurify"
import Markdown from "vue3-markdown-it"
import Prism from "prismjs"

defineProps(["post"])

Prism.highlightAll()
</script>

<template>
  <div class="wrapper post">
    <div class="post--header">
      <div class="post--header-inner">
        <h1>{{ post.title }}</h1>
      </div>
    </div>
    <template v-html="marked(post.text)" v-hoist></template>
  </div>
</template>

<script>
export default {
  mounted() {
    Prism.highlightAll()
    console.log(marked(this.post.text).length)
  },
}
</script>
