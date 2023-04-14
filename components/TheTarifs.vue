<template>
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

</style>