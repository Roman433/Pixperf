<template>
  <div class="  ">
    <section class="section-group justify-center items-center text-center">
      <h1 class="lg:text-8xl font-semibold text-volna text-center">404!</h1>
      <h2 class="text-6xl text-volna font-semibold p-2">возникла ошибка</h2>
      <NuxtLink to="/">
        <div class="back">
          <p class="text-5xl text-white p-2">вернуться назад</p>
        </div>
      </NuxtLink>
    </section>
  </div>
</template>

<style scoped>
.section-group {
    
    width: 100%;
    
}
h1 {
    margin: 1rem;
    padding: 1rem;
    font-size: 8rem;
}


@media (max-width:1024px) {
    h1 {
        font-size: 7rem
    }
    h2 {
        font-size: 4rem;
    }
    
}
</style>
