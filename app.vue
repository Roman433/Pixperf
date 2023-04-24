
<template>
  <div class=" mar">
    
    <div class="">
      <!-- <TheNavigation/> -->
      <div class=" "><TheTestNav /></div>
      <NuxtPage />
    </div>
    <div class="container mx-auto"><TheForm />
    
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
  
  
  useHead({
    title: "создание сайтов с нуля",
    meta: "сайты под ключ"
  });
  
  // export default {
  //   data() {
  //     return {
  //       // Ваше значение для data()
  //     };
  //   },
  //   mounted() {
  //     console.log(this.$store.state.count);
  //   },
  // };
</script>






<style>
.mar {
  background-image: url('@/assets/img/secbg.jpg');
}

</style>