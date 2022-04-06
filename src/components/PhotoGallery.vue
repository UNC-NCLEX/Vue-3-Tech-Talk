<template>
    <h1>Photo Gallery</h1>
    <div class="image-grid">
        <img v-for="image in images" :key="image.id" :src="image.download_url" class="image" />
    </div>
</template>

<script>
export default {
  name: 'PhotoGallery',
  data() {
      return {
          dataSrc: 'https://picsum.photos/v2/list',
          images: []
      }
  },
  methods: {
      fetchData(dataSrc) {
          fetch(dataSrc)
          .then(res => res.json())
          .then(data => {
              this.images = data;
          })
          .catch(err => console.error(err))
      }
  },
  mounted() {
      this.fetchData(this.dataSrc);
  }
}
</script>

<style lang="css" scoped>
.image-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}


.image {
    height: 200px;
    width: 300px;
    padding: 3px;
}

</style>