export default {
  data() {
    return {
      metadata: {},
      imageOrientation: "",
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getImageMetadata(this.baseURL, this.project.image)
    })
  },

  methods: {
    getImageMetadata(baseURL, image) {
      let img = new Image()
      img.src = `${baseURL}/assets/${image}`
      img.onload = () => {
        this.metadata = {
          width: img.width,
          height: img.height,
        }
        this.imageOrientation = img.width > img.height ? "landscape" : "portrait"
      }
    },
  },
}
