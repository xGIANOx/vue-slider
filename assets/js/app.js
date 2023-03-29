
const { createApp } = Vue;

createApp({
  data() {
    return {
      movie: {
        image: [
          {
            src: "./assets/img/01.webp",
            title: "Spiderman",
            description: "Lorem ipsum"
          },
          {
            src: "./assets/img/02.webp",
            title: "Non so chi siano",
            description: "Lorem ipsum perplesso",
          },
          {
            src: "./assets/img/03.webp",
            title: "Fortnite",
            description: "Giochino dove costruisci fortini e ammazzi gente",
          },
          {
            src: "./assets/img/04.webp",
            title: "Stray",
            description: "Gattino a zonzo",
          },
          {
            src: "./assets/img/05.webp",
            title: "Avangers",
            description: "Supereroi che salvano il mondo"
          },
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

  