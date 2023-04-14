<template>
    
    <div class="py-16">
  <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
    <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
      <div class="borders rounded-3xl first_dev px-8 pt-12 shadow-2xl shadow-gray-600/10 dark:shadow-none sm:px-12 lg:px-8">
        <div class="mb-12 space-y-4">
          <h3 class="text-3xl font-semibold text-white ">Разработка</h3>
          <p class="mb-6 text-lg text-white">
            Услуги разработки сайтов включают создание веб-сайтов с нуля или модификацию существующих сайтов, чтобы соответствовать потребностям клиентов.
          </p>
          <a href="#" class="block font-medium text-primary text-white underline">узнать больше</a>
        </div>
        <img
          src="@/assets/img/graphic.svg"
          class="ml-auto w-2/3"
          alt="graphic"
          loading="lazy"
          width="900"
          height="600"
        />
      </div>
      <div class="border borders rounded-3xl first_dev dark:bg-gray-800 px-8 py-12 shadow-2xl shadow-gray-600/10 dark:shadow-none sm:px-12 lg:px-8">
        <div class="mb-12 space-y-4">
          <h3 class="text-3xl font-semibold text-white ">UI / UX </h3>
          <p class="mb-6 text-lg text-white">
            Услуги UI/UX-дизайна включают проектирование интерфейса пользователя (UI) и оптимизацию пользовательского опыта (UX) на веб-сайтах, мобильных приложениях или других цифровых продуктах.
          </p>
          <a href="#" class="block font-medium text-white text-primary underline" >узнать больше</a>
        </div>
        <img
          src="@/assets/img/body.svg"
          class="ml-auto w-2/3"
          alt="illustration"
          loading="lazy"
          width="900"
          height="600"
        />
      </div>
      <div class="border borders rounded-3xl first_dev px-8 py-12 shadow-2xl shadow-gray-600/10 dark:shadow-none sm:px-12 lg:px-8">
        <div class="mb-12 space-y-4">
          <h3 class="text-3xl font-semibold text-white"> Дизайн</h3>
          <p class="mb-6 text-white text-lg">
            Профессиональное создание визуальных решений для различных цифровых и физических продуктов, услуг и медиа-контента. 
          </p>
          <a href="#" class="block font-medium text-white text-primary underline">узнать больше</a>
        </div>
        <img
          src="@/assets/img/features.svg"
          class="ml-auto w-2/3"
          alt="illustration"
          loading="lazy"
          width="900"
          height="600"
        />
      </div>
    </div>
  </div>
</div>
                                    
</template>


<style scoped>
/* .borders {
   border-width: 4px;
  border-style: solid;
  border-color: rgba(46, 236, 197, 1);

} */
.first_dev {
    background: linear-gradient(
    139.56deg,
    #303134 10.06%,
    #282828 53.72%,
    #282828 88%
  );
}
.first_dev:hover {
  transform: scale(0.95);
    transition: transform .9s;
}
</style>