<script setup>
import { ref } from "vue"
import { RouterLink } from "vue-router"
import { storeToRefs } from "pinia"
import { marked } from "marked"
import Prism from "prismjs"
import moment from "moment"

defineProps(["post"])

Prism.highlightAll()
</script>

<template>
  <div class="post">
    <div class="post--header">
      <div class="post--header-inner">
        <div class="header--data">
          <time :datetime="post.date_created">{{ published }}</time>
          <span>~</span>
          <span>{{ TimeToRead }} min read</span>
        </div>
        <h1>{{ post.title }}</h1>
      </div>
    </div>
    <template v-html="marked(post.text)" v-hoist></template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TimeToRead: Math.ceil(marked(this.post.text).trim().split(/\s+/).length / 200),
      published: moment(this.post.date_created).format("MMM Do"),
    }
  },
  mounted() {
    Prism.highlightAll()
    console.log()
  },
}
</script>
