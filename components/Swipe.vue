<template>
    <swiper :rewind="true" :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide><a class="text-white">Slide 4</a></swiper-slide>
      <swiper-slide><a class="text-white">Slide 4</a></swiper-slide><swiper-slide><a class="text-white">Slide 4</a></swiper-slide>
      <swiper-slide><a class="text-white">Slide 4</a></swiper-slide><swiper-slide><a class="text-white">Slide 4</a></swiper-slide>
      <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    </swiper>
  </template>
 
 <script >
   export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Navigation],
        };
      },
    };
  </script>


<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>