<template>
  <div id="app">
    <a :href="'https://picsum.photos/id/'+ n +'/600/600'" v-lightbox v-for="n in 9">
      <img :src="'https://picsum.photos/id/103'+ n +'/300/300'" />
    </a>
    <lightbox></lightbox>
  </div>
</template>

<script>
import Lightbox from "./components/lightbox/Lightbox";

export default {
  name: "App",
  components: {
    Lightbox
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
