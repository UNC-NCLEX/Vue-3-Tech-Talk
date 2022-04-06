<template>
  <n-button-group class="buttons">
    <n-button><router-link to="/">Home</router-link></n-button>
    <n-button><router-link to="/PhotoGallery">Photo Gallery</router-link></n-button>
    <n-button><router-link to="/TwitterFeed">Twitter Feed</router-link></n-button>
  </n-button-group>
  <router-view />
</template>

<script>
import { NButton, NButtonGroup } from 'naive-ui'

export default {
  name: 'App',
  components: {
    NButton,
    NButtonGroup
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
  margin-top: 20px;
}

.buttons {
  display: flex;
  justify-content: center;
}
</style>
