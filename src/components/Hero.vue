<script setup>
import Image from "@/components/Image.vue"
import Picture from "./Picture.vue"
import gsap from "gsap"
import { onMounted } from "vue"

// onMounted(() => {
//   gsap.fromTo(
//     ".hero",
//     {
//       opacity: 0,
//     },
//     {
//       duration: 1.5,
//       opacity: 1,
//       ease: "power3.inOut",
//     },
//   )
// })
defineProps(["subtitle", "title", "description", "image", "images"])
</script>

<template>
  <section class="hero">
    <div class="hero--text">
      <h1 v-html="subtitle" class="hero--intro"></h1>
      <h2 class="hero--title">{{ title }}</h2>
      <p class="hero--subtext">{{ description }}</p>
    </div>
    <Image v-if="image" :id="image" />
    <Picture v-if="images" :imageIds="images" :has-detail="true" />
  </section>
</template>
