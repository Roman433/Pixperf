<template>
  <section class="">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Коротко о тарифах</h2>
          
      </div>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10  lg:space-y-0">
          <!-- Pricing Card -->
          <div
            class="h-full p-6 bgr rounded-2xl flex flex-col relative rounded-xl overflow-hidden"
          >
            <h1
              class="text-4xl text-white pb-4 mt-4 mb-4 border-b font-medium leading-none"
            >
              Сайт “Каталог”
            </h1>
            <p class="flex items-center text-white mt-2">
              Сайт-каталог – это полноценный веб-ресурс, в котором потребители
              могут ознакомиться с товарами или услугами компании. Являясь
              удобным инструментом продаж, сайт-каталог может повысить
              доходность бизнеса и упростить задачу по предоставлению
              ассортимента целевой аудитории.
            </p>

            <div class="flex text-white mt-24">
              <p2 class="font-semibold"
                >От 65.000₸ <br />
                от 15 дней
              </p2>

              <NuxtLink
                to="#form"
                class="text-center text-white border-0 py-3 px-4 lg:px-4 w-1/2 m-auto btn"
              >
                заказать
              </NuxtLink>
            </div>
          </div>
          <!-- Pricing Card -->
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bgr rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            
            <h1
              class="text-3xl text-gray-900  mt-4 mb-4 border-b font-medium leading-none"
            >
              Сайт “Интернет магизин”
            </h1>
            <p class="flex items-center text-white mb-4">
              Сайт интернет-магазина может содержать каталог товаров с
              описаниями, фотографиями, ценами и другой информацией, а также
              функционал для оформления заказов, добавления товаров в корзину,
              выбора способов доставки и оплаты.
            </p>

            <div class="flex mb-2 mt-24">
              <p2 class="font-semibold"
                >От 110.000₸ <br />
                от 18дней
              </p2>

              <NuxtLink
                to="#form"
                class="text-center text-white border-0 py-3 px-4 w-1/2 m-auto btn"
              >
                заказать
              </NuxtLink>
            </div>
          
          </div>
          <!-- Pricing Card -->
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bgr rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h1
              class="text-3xl text-gray-900 pb-4 mt-4 mb-4 border-b font-medium leading-none"
            >
              Сайт “Landing”
            </h1>
            <p class="flex items-center text-white mt-4 mb-6">
              Одностраничный сайт (Landing Page) – так называют промо-сайты для
              презентации товара, услуги и организации мгновенных продаж. Мы
              умеем создавать веб-ресурсы, полностью готовые к наплыву лавины
              посетителей.
            </p>

            <div class="flex mt-28">
              <p2 class="font-semibold"
                >От 75.000₸ <br />
                от 7 дней
              </p2>

              <NuxtLink
                to="#form"
                class="text-center text-white border-0 py-3 px-4 w-1/2 m-auto btn"
              >
                заказать
              </NuxtLink>
            </div>
          </div>
      </div>
      
  </div>
</section>
</template>


<style scoped>
.bgr {
  background: rgba(255, 255, 255, 0.1);
}
.btn {
  border: 2px solid #1eebcd;
  border-radius: 20px;
}
</style>

<!-- <template>
  <div class="overflow-y-hidden">
    <div class="container text-center ">
      <h1 class="text-volna text-6xl p-1 font-semibold mb-12">Тарифы</h1>
      <div class="cards flex lg:justify-between">
        <div class="card1  bg-lighty p-2 rounded-xl">
          <h1 class="text-white text-3xl p-6 font-semibold">сайт "Каталог"</h1>
          <p class="text-white p-6">
            Сайт-каталог – это полноценный <br />
            веб-ресурс, в котором <br />
            потребители могут ознакомиться <br />
            с товарами или услугами <br />
            компании. Являясь удобным <br />
            инструментом продаж, сайт <br />
            -каталог может повысить <br />
            доходность бизнеса <br />
            и упростить <br />
            задачу по предоставлению <br />
            ассортимента целевой <br />
            аудитории.
          </p>
          <div class="cenik justify-between flex m-4">
            <div class="">
              <h2 class="text-white font-bold text-xl">от 60.000$</h2>
              <p class="text-white text-start">от 15 дней</p>
            </div>
            <button
              class="button button-1"
            >
              Подробнее >
            </button>
          </div>
        </div>
        <div class="card1 bg-lighty p-2 rounded-xl">
          <h1 class="text-white text-3xl text-center p-6 font-semibold"> "универсальный"</h1>
          <p class="text-white p-6">
            Сайт-каталог – это полноценный <br />
            веб-ресурс, в котором <br />
            потребители могут ознакомиться <br />
            с товарами или услугами <br />
            компании. Являясь удобным <br />
            инструментом продаж, сайт <br />
            -каталог может повысить <br />
            доходность бизнеса <br />
            и упростить <br />
            задачу по предоставлению <br />
            ассортимента целевой <br />
            аудитории.
          </p>
          <div class="cenik justify-between flex m-4">
            <div class="">
              <h2 class="text-white font-bold text-xl">от 60.000$</h2>
              <p class="text-white text-start">от 15 дней</p>
            </div>
            <button
              class=" button button-1 "
            >
              Подробнее >
            </button>
          </div>
        </div>
        <div class="card1 bg-lighty p-2 rounded-xl">
          <h1 class="text-white text-3xl p-6 font-semibold">сайт "Каталог"</h1>
          <p class="text-white p-6">
            Сайт-катаог – это полноценный <br />
            веб-ресурс, в котором <br />
            потребители могут ознакомиться <br />
            с товарами или услугами <br />
            компании. Являясь удобным <br />
            инструментом продаж, сайт <br />
            -каталог может повысить <br />
            доходность бизнеса <br />
            и упростить <br />
            задачу по предоставлению <br />
            ассортимента целевой <br />
            аудитории.
          </p>
          <div class="cenik justify-between flex m-4">
            <div class="">
              <h2 class="text-white font-bold text-xl">от 60.000$</h2>
              <p class="text-white text-start">от 15 дней</p>
            </div>
            <button
            class=" button button-1 "
            >
              Подробнее >
            </button>
          </div>
        </div>
      </div>
    </div>
   
    <div class="vertical-line"></div>
  </div>
</template>

<style scoped>
.container {
  animation: loadProfile 1.6s ease-in-out;
  animation-fill-mode: both;
  

}
.cards {
  padding: 35px;
  margin: 5px;
}
@media (max-width: 767px) { 
  .cards{
    display: block;
    margin: 20px;
    padding: 10px;
     
  }
  .card1 {
    width: 100%;
    transition: all .5s ease-in-out;
   padding: 5px;
   margin-top: 20px;
 
  }
  .button {
    margin: 0.25rem;
    color: #ffffff; 
    font-size: 0.875rem;
    line-height: 1.25rem; 
  } 
}
.box {
	 --border-size: 3px;
	 --border-angle: 0turn;
	 width: 60vmin;
	 height: 50vmin;
	 background-image: conic-gradient(from var(--border-angle), #213, #112 50%, #213), conic-gradient(from var(--border-angle), transparent 20%, #08f, #f03);
	 background-size: calc(100% - (var(--border-size) * 2)) calc(100% - (var(--border-size) * 2)), cover;
	 background-position: center center;
	 background-repeat: no-repeat;
	 animation: bg-spin 3s linear infinite;
}
 @keyframes bg-spin {
	 to {
		 --border-angle: 1turn;
	}
}
 .box:hover {
	 animation-play-state: paused;
}
 @property --border-angle {
	 syntax: "<angle>";
	 inherits: true;
	 initial-value: 0turn;
}
 
.card1 {
    width: 33,3%;
    transition: all .5s ease-in-out;
   padding: 23px;
}

.card1:hover {
  /* transform: scale(1.1);
    transition: transform .7s; */
    /* display: none; */
}
.vertical-line {
  width: 2px;
  height: 180px;
  background-color: rgba(46, 236, 197, 1);
}

.button {
  padding: 1rem; 
padding-left: 1rem;
padding-right: 1rem; 
color: #ffffff; 
font-size: 0.875rem;
line-height: 1.25rem; 
}
.button-1 {
  background-color: transparent;
  border: 3px solid #00d7c3;
  border-radius: 9999px; 
  -webkit-transition: all .15s ease-in-out;
  transition: all .15s ease-in-out;
  
  color: #ffffff; 
}
.button-1:hover {
  box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3;
  border: 3px solid #00d7c3;
}
@keyframes loadProfile {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

</style> -->