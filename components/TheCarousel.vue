<template>
  <Carousel class=" container mx-auto" v-bind="settings" :breakpoints="breakpoints">
    <!-- <Slide  v-for="slide in 10" :key="slide">
      <div class="p-12">{{ slide }}</div>
    </Slide> -->
    <Slide class="m-12">
      <img class=" p-12" src="@/assets/img/13r.png" alt="">
    </Slide>
    <Slide class="m-12">
      <img class=" p-12" src="@/assets/img/14r.png" alt="">
    </Slide>
    <Slide class="m-12">
      <img class=" p-12" src="@/assets/img/geo.png" alt="">
    </Slide>
    <Slide class="m-12">
      <img class=" p-12" src="@/assets/img/13r.png" alt="">
    </Slide>
    <Slide class="m-12">
      <img class=" p-12" src="@/assets/img/13r.png" alt="">
    </Slide>
    <template #addons>
     <div class="bg-white"> <Pagination /></div>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default defineComponent({
  name: 'ExamplePagination',
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
    },
  }),
})
</script>
