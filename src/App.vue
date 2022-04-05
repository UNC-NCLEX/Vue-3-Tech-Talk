<template>
  <n-space class="buttons">
    <n-button><router-link to="/">Home</router-link></n-button>
    <n-button><router-link to="/PhotoGallery">Photo Gallery</router-link></n-button>
    <n-button><router-link to="/TwitterFeed">Twitter Feed</router-link></n-button>
  </n-space>
  <router-view />
</template>

<script>
import { NSpace, NButton } from 'naive-ui'

export default {
  name: 'App',
  components: {
    NSpace,
    NButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.NButton {
  margin: 0 auto;
  display: block;
}
</style>
