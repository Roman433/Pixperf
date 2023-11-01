<template>
  <div class="">
    <div class="flex flex-col md:grid grid-cols-8 mx-auto p-2 text-volna">
      <!-- left -->
      <div class="flex flex-row-reverse md:contents">
        <div
          class="som col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
        >
          <h1 class="font-semibold text-2xl mb-1">01 ЭТАП</h1>
          <p class="leading-tight text-xl text-white text-justify">
            <span class="text-volna">Планирование и анализ требований</span>
            <br />
            Мы собираем и анализируем требования, определяем функциональные и
            нефункциональные характеристики приложения, и разрабатываем план
            проекта, включая бюджет и сроки.
          </p>
        </div>
        <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
          <div class="h-full w-full flex items-center justify-center">
            <div class="h-full w-10 // pointer-events-none"></div>
          </div>

          <div
            class="w-6 h-6 absolute top-1/2 max-w-full lg:flex -mt-3 rounded-full bg-volna shadow"
          ></div>
        </div>
      </div>
      <!-- right -->
      <div class="flex md:contents">
        <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
          <div class="h-full w-6 flex items-center justify-center">
            <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
          </div>
          <div
            class="w-6 h-6 absolute top-1/2 max-w-full -mt-3 lg:flex rounded-full bg-volna shadow"
          ></div>
        </div>
        <div
          class="som col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
        >
          <h1 class="font-semibold text-2xl mb-1">02 Этап</h1>
          <p class="leading-tight text-xl text-white text-justify">
            <span class="text-volna">Дизайн и архитектура</span> <br />
            Далее обдумываем определяем архитектурную структуру приложения,
            выбираем технологии, базы данных и архитектурные решения.
          </p>
        </div>
      </div>

      <div class="flex flex-row-reverse md:contents">
        <div
          class="som col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
        >
          <h1 class="font-semibold text-2xl mb-1">03 Этап</h1>
          <p class="leading-tight text-xl text-white text-justify">
            <span class="text-volna">Разработка</span> <br />
            На данном этапе мы активно создаем код приложения, соблюдая заданные
            спецификации и дизайн. Мы используем различные, фреймворки и
            библиотеки, чтобы претворить в жизнь функциональность приложения.
          </p>
        </div>
        <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
          <div class="h-full w-6 flex items-center justify-center">
            <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
          </div>
          <div
            class="w-6 h-6 absolute top-1/2 -mt-3 max-w-full lg:flex rounded-full bg-volna shadow"
          ></div>
        </div>
      </div>
      <!-- left -->
      <div class="flex flex-row-reverse md:contents">
        <div
          class="som col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
        >
          <h1 class="font-semibold text-2xl mb-1">04 Этап</h1>
          <p class="leading-tight text-xl text-white text-justify">
            <span class="text-volna">Тестирование</span> <br />
            После основного этапа разработки, мы проводим небольшие тесты,
            проверяем не столкнется ли пользователь с какими-то не было
            проблемами
          </p>
        </div>
        <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
          <div class="h-full w-6 flex items-center justify-center">
            <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
          </div>
          <div
            class="w-6 h-6 absolute top-1/2 -mt-3 max-w-full lg:flex rounded-full bg-volna shadow"
          ></div>
        </div>
      </div>
      <!-- right -->
      <div class="flex md:contents">
        <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
          <div class="h-full w-6 flex items-center justify-center">
            <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
          </div>
          <div
            class="w-6 h-6 toq absolute top-1/2 -mt-3 rounded-full max-w-full lg:flex bg-volna shadow"
          ></div>
        </div>
        <div
          class="som col-start-6 col-end-10 p-4 rounded-xl my-4  shadow-md"
        >
          <h1 class="font-semibold text-2xl mb-1">05 Этап</h1>
          <p class="leading-tight text-white text-xl text-justify">
            <span class="text-volna">Развертывание</span> <br />
            После разработки и тестирования приложения мы разворачиваем его на сервере
            или в облаке, чтобы пользователи могли получить к нему доступ. 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>



<style>
.som {
  background: rgba(255, 255, 255, 0.04);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(6.4px);
-webkit-backdrop-filter: blur(6.4px);
border: 1px solid rgba(255, 255, 255, 0.19);

}
</style>