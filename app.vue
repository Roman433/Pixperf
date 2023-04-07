
<template>
  <div class=" mar">
    
    <div class="">
      <!-- <TheNavigation/> -->
      <div class=" "><TheTestNav /></div>
      <NuxtPage />
    </div>
    <div class="container mx-auto"><TheForm /></div>
  </div>
</template>

<script >
export default {
  head() {
    return {
      title: "this is the tittle",

    }
      
    
  }
}
</script>

<style>
.mar {
  background-image: url('@/assets/img/secbg.jpg');
}

</style>