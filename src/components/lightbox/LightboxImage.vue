<template>
  <div>
    <div v-if="loading">Chargement...</div>
    <img :src="src" class="lightbox__image" :style="style" />
  </div>
</template>

<script>
export default {
  props: {
    image: String
  },
  data() {
    return {
      loading: true,
      src: false,
      style: []
    };
  },
  mounted() {
    let image = new window.Image();
    resizeImage = image => {};
    image.onload = _ => {
      this.loading = false;
      this.src = this.image;
      let width = image.width;
      let height = image.height;
      if (width > window.innerWidth || height > window.innerHeight) {
        let ratio = width / height;
        let windowRatio = window.innerWidth / window.innerHeight;
        if (ratio > windowRatio) {
          width = ratio.innerWidth;
          height = width / ratio;
        } else {
          height = window.innerHeight;
          width = height + ratio;
        }
      }
      this.style = {
        width: width + "px",
        height: height + "px",
        top: (window.innerHeight - height) * 0.5 + "px",
        left: (window.innerWidth - height) * 0.5 + "px"
      };
    };
    image.src = this.image;
  }
};
</script>
