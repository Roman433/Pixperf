<template>
  <div class=" lg:flex lg:tad lg:relative   ">
    <div class="lg:1 lg:w-1/3 lg:m-8 lg:relative">
      <h1 class="lg:text-volna lg:text-5xl lg:mb-3">Оставь заявку</h1>
      <form action="">
        <p class="text-white">Ваше ФИО</p>
        <input class="lg:inp" type="text" placeholder="введите ваше имя" />
        <p class="lg:text-white">Ваш номер телефона</p>
        <input class="lg:inp" type="text" placeholder="Ввведите номер для связи с вами" />
        <p class="lg:text-white">Ваш email</p>
        <input class="lg:inp" type="email" placeholder="введите контактный email" />
      </form>
    </div>
    <div class="lg:bottom-8 lg:left-[630px] lg:absolute">
        <button class="lg:button lg:button-1  " >
            отправить
          </button></div>
    <img class="lg:absolute lg:bottom-0 lg:right-0 " src="@/assets/img/phone.png" alt="">
    
  </div>
 
 
</template>

<style scoped>
.tad {
  background: linear-gradient(
    91.69deg,
    #313134 -11.81%,
    #222224 23.9%,
    #12473c 60.63%,
    #292929 110.44%
  );
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 140px;
  border-radius: 30px;
  
}
.inp {
  background: rgba(255, 255, 255, 0.1);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 38px rgba(255, 255, 255, 0.05);
  border-radius: 41px;
  width: 100%;
  padding: 15px;
  margin: 10px;
  color: rgb(254 242 242);

}

.button {
  padding: 1rem; 
padding-left: 1.75rem;
padding-right: 1.75rem; 
color: #ffffff; 
font-size: 1.125rem;
line-height: 1.75rem; 
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

</style>

