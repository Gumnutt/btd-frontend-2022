import { defineStore } from "pinia"

export const useProjectStore = defineStore({
  id: "project",
  state: () => ({
    projects: [],
    project: null,
    loading: false,
    error: null,
  }),
  getters: {},
  actions: {
    async fetchProjects() {
      this.projects = []
      this.loading = true
      try {
        this.projects = await fetch(`${import.meta.env.VITE_API_BASE_URL}/items/Projects?sort=-date_created`)
          .then((response) => response.json())
          .then((r) => r.data)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchProject(slug) {
      this.project = null
      this.loading = true
      try {
        this.project = await fetch(`${import.meta.env.VITE_API_BASE_URL}/items/Projects?filter[slug]=${slug}`)
          .then((response) => response.json())
          .then((r) => r.data[0])
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  },
})
