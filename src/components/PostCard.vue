<script setup>
defineProps(["post"])
</script>

<template>
  <li>
    <RouterLink :to="{ name: `post`, params: { slug: post.slug, id: post.id } }" class="post--card">
      <h3>{{ post.title }}</h3>
      <p>{{ post.short_content }}</p>
    </RouterLink>
  </li>
</template>
