
const { createApp } = Vue

createApp({
    data() {
      return {
        movie: {
          image: [
            "./assets/img/01.webp",
            "./assets/img/02.webp",
            "./assets/img/03.webp",
            "./assets/img/04.webp",
            "./assets/img/05.webp",
          ],
        },
        activeImage: 0,
      };
    },
    methods: {
      next() {
        this.activeImage++;
        if (this.activeImage === this.movie.image.length) {
          this.activeImage = 0;
        }
      },
      prev() {
        this.activeImage--;
        if (this.activeImage < 0) {
          this.activeImage = this.movie.image.length - 1;
        }
      },
    },
  }).mount("#app");
  