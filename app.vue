
<template>
  <div class=" mar">
   
    <div class="">
      <TheNavigation/>
     
      <!-- <TheHead/> -->
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
  background-color: black;
}

</style>