import { defineStore } from "pinia"

export const usePostStore = defineStore({
  id: "post",
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null,
  }),
  getters: {},
  actions: {
    async fetchPosts() {
      this.posts = []
      this.loading = true
      try {
        this.posts = await fetch(`${import.meta.env.VITE_API_BASE_URL}/items/posts?sort=date_created`)
          .then((response) => response.json())
          .then((r) => r.data)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchPost(id) {
      this.post = null
      this.loading = true
      try {
        this.post = await fetch(`${import.meta.env.VITE_API_BASE_URL}/items/posts/${id}`)
          .then((response) => response.json())
          .then((r) => r.data)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  },
})
