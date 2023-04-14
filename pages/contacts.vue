<template>
    <section class="mainer">
      <div class="container mx-auto">
        <TheCont />

      </div>
    </section>
</template>


<style scoped>
.mainer {
    background-image: url('@/assets/img/triangles.png');
    background-repeat: no-repeat;
    background-size: 50% auto;
}
</style>


<!-- <template>
  <div>
    <h1>yt page</h1>
    <ul>
        <li v-for="item of items" :key="item">
        <pre>{{ item[0] }}</pre>
        
        </li>
    </ul>
  </div>
</template>

<script setup>
 const Api = 'https://dummyjson.com/products/'
 const {data: items} = await useAsyncData('items', ()=> $fetch(Api))
 console.log(items.value);
</script> -->