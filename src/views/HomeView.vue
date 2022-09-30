<script setup>
import { ref } from "vue"
import { storeToRefs } from "pinia"
import { usePostStore } from "../stores/posts"
import hero from "@/components/Hero.vue"
import PostsLists from "@/components/PostsLists.vue"
let data = ref([])

fetch(`${import.meta.env.VITE_API_BASE_URL}/items/home_page`)
  .then((response) => response.json())
  .then((r) => (data.value = r.data))

const { posts, loading, error } = storeToRefs(usePostStore())
const { fetchPosts } = usePostStore()

fetchPosts()
</script>

<template>
  <main class="home">
    <div class="wrapper">
      <hero :subtitle="data.subtitle" :title="data.title" :description="data.description" :image="data.image" :images="data.images" />
    </div>
    <posts-lists :subtitle="data.posts_subtitle" :summary="data.posts_detail"></posts-lists>
  </main>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scaleElement = document.getElementsByClassName("hero--detail")[0]
      const hero = document.getElementsByClassName("hero")[0]

      let scrollTop = window.scrollY
      let docHeight = document.body.offsetHeight
      let winHeight = window.innerHeight
      let scrollPercent = (scrollTop / (docHeight - winHeight)) * 10

      if (this.mobile) {
        if (scrollPercent > 1) {
          scaleElement.style.transform = `scale(${scrollPercent + scrollPercent - 1})`
        } else {
          scaleElement.style.transform = `scale(1)`
        }
      } else {
        console.log("desktop")
        if (scrollPercent > 1) {
          scaleElement.style.transform = `scale(${scrollPercent})`
        } else {
          scaleElement.style.transform = `scale(1)`
        }
      }

      let observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio < 0.5) {
            scaleElement.style.webkitAnimationPlayState = "paused"
          } else {
            scaleElement.style.webkitAnimationPlayState = "running"
          }
        })
      })
      if (hero) {
        observer.observe(hero)
      }
    },
  },
}
</script>
