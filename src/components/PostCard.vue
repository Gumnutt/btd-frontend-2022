<script setup>
defineProps(["post"])
const slugify = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}
</script>

<template>
  <li>
    <RouterLink :to="{ name: `post`, params: { slug: slugify(post.title), id: post.id } }" class="post--card">
      <h3>{{ post.title }}</h3>
      <p>{{ post.short_content }}</p>
    </RouterLink>
  </li>
</template>
