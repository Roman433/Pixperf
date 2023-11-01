<template>
  <div class="mainer">
    <div class="container mx-auto">
    <div class=""></div>
    <TheAboutTri />
    <div v-if="loading" class="items-center mx-auto">
      <Loading />
     </div> 
      <!-- <TheAboutTri /> -->
      <!-- <TheGlobStep /> -->
      <TheSource />  
      <TheTeam />
    <!--  -->
    <TheAccordion />
  </div>
  </div>
</template>




<script setup lang="ts">
  const nuxtApp = useNuxtApp();
  const loading = ref(false);
  nuxtApp.hook("page:start", () => {
    loading.value = true;
  });
  nuxtApp.hook("page:finish", () => {
    loading.value = false;
  });
  useHead({
  title: "Разработка сайтов более трех лет",
  meta: [
    {
      name: "description", content: "Мы заниммаемся разработкой сайтов более ттрех"
    },
    {
      name: "keywords",
      content: "сайт, создание в Алматы, дешево, с нуля"
    },
    {
      
    }
  ],
})
</script>






<style scoped>
.mainer {
    background-image: url('@/assets/img/triangles.png');
    background-repeat: no-repeat;
    background-size: 50% auto;
}
</style>




