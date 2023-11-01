<script setup lang="ts">
useHead({
  title: "Цены на создание сайтов",
  meta: [
    {
      name: "description", content: "сайты от 60000 тг"
    },
    {
      name: "keywords",
      content: "лэндинг, сайт каталог, сайт визитка, интернет-магазин, вордпресс, платформа, СРМ система"
    },
    {
      name: "description", content: "Сайт интернет-магазина может содержать каталог товаров с описаниями фотографиями ценами и другой информацией"
    },
  ],
})
</script>

<template>
    <div class="price">
        <div class="price_inner">
            <ThePricing />
            <!-- <Swipe /> -->
        </div>
    </div>
</template>

<style scoped>
.price {
    background-image: url('@/assets/img/treo.png');
    background-repeat: no-repeat;
    background-size: 60% auto;
}
.price_inner {
    backdrop-filter: blur(6.8px);
    -webkit-backdrop-filter: blur(6.8px);
}
</style>