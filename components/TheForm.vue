<template>
  <div class=" flex tad ">
        <div class="forma w-1/3 m-8 ">
            <h1 class="text-volna text-5xl mb-3">Оставь заявку</h1>
            <form action="">
                <p class="text-white">Ваше ФИО</p>
                <input class="inp" type="text" placeholder="введите ваше имя" />
                <p class="text-white">Ваш номер телефона</p>
                <input class="inp" type="text" placeholder="Ввведите номер для связи с вами" />
                <p class="text-white">Ваш email</p>
                <input class="inp" type="email" placeholder="введите контактный email" />
            </form>
        </div>
        <div class="forma w-1/3 m-8  ">
           <div class="sec_forma">
                <form class="" action="">
                     <p class="text-white">Ваш бюджет</p>
                     <input class="inp" type="text" placeholder="введите ваш бюджет" />
                     <p class="text-white">Введите Ваш комментарий (по желанию)</p>
                    <input class="inp" type="text" placeholder=" ваш комментарий" />
                </form>
                <button class="button button-1 mb-3">отправить</button>
           </div>
        </div>
        <div class="with-phone w-1/3">
            <img class="w-full "    src="@/assets/img/phone.png" >
        </div>
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
  margin-bottom: 30px;
  
  
}
.sec_forma {
    margin-top: 59px;
}
.inp {
  background: rgba(255, 255, 255, 0.1);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 38px rgba(255, 255, 255, 0.05);
  border-radius: 41px;
  width: 90%;
  padding: 15px;
  margin: 10px;
  color: rgb(254 242 242);

}

.button {
  padding: 1rem; 
padding-left: 2.75rem;
padding-right: 2.75rem; 
color: #ffffff; 
font-size: 1rem;
line-height: 1.75rem; 
margin-top: 30px;
margin-left: 10px;
font-size: large;
}
.button-1 {
  background-color: transparent;
  border: 3px solid #00d7c3;
  border-radius: 9999px; 
  -webkit-transition: all .15s ease-in-out;
  transition: all .15s ease-in-out;
  color: #ffffff; 
}
img {
    width: 200%;
}
.button-1:hover {
  box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3;
  border: 3px solid #00d7c3;
}
@media (max-width: 1024px) {
    .forma {
        width: 100%;
        margin: 20px;
    }
    .tad {
        width: 100%;
        display: block;
    }
    .inp {
        width: 100%;
    }
}
</style>

