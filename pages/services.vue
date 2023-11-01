<template>
    <section class="containers">
        <div class="mx-auto container">
       <TheServ /> 
    </div>
    </section>
</template>

<style scoped>
.containers {
    background-image: url("@/assets/img/treo.png");
    background-repeat: no-repeat;
    background-size: 59% 75%;
}
</style>

<script setup lang="ts">
useHead({
  title: "Услуги",
  meta: [
    {
      name: "description", content: "услуги по разработке сайтов и созданию дизайна"
    },
    {
      name: "keywords",
      content: "разработка сайта, дизайн с нуля, дизайн сайта, ux, ui, ux/ui"
    },
    {
      
    }
  ],
})
</script>