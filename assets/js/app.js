
const { createApp } = Vue
  createApp({
    data() {
      return {
        movie : {
            image : [
                "./assets/img/01.webp",
                "./assets/img/02.webp",
            ]
                
        }
      }
    },
    methods : {
        next(){
            activeImage++
            console.log('next cliccato')
            console.log(activeImage); 
        },
        prev(){
            activeImage--
            console.log('prev cliccato')
            console.log(activeImage); 
        }

    }
    

}).mount('#app')