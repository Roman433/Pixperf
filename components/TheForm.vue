
<template>
  <div class="m-3 lg:m-1">
    <form @submit.prevent="submit(form)">
      <div id="form" class=" flex tad ">
        <div class="forma w-1/3 m-8 ">
            <h1 class="text-volna send text-4xl mb-3">Оставь заявку</h1>
            <div action="" method="POST">
                <p class="text-white">Ваше ФИО</p>
                <input v-model="form.name" name="name" class="inp" type="text" placeholder="введите ваше имя" />
                <p  class="text-white">Ваш номер телефона</p>
                <input v-model="form.phone" name="phone" class="inp" type="text" placeholder="Ввведите номер для связи с вами" />
                <p class="text-white">Ваш email</p>
                <input name="email" v-model="form.mail" class="inp" type="email" placeholder="введите контактный email" />
            </div>
        </div>
        <div class="forma w-1/3 m-8  ">
           <div class="sec_forma">
                <div class="" >
                     <p class="text-white">Ваш бюджет</p>
                     <input v-model="form.budget" name="money" class="inp" type="text" placeholder="введите ваш бюджет" />
                     <p class="text-white">Введите Ваш комментарий (по желанию)</p>
                    <input v-model="form.comment" name="comment" class="inp" type="text" placeholder=" ваш комментарий" />
                    <button @click="submit(form)" type="submit" class="button button-1 mb-3">отправить</button>
                </div>
                
           </div>
        </div>
        
        <div class="with-phone lark w-2/3 lg:w-1/3 lg:container m-4 lg:mx-auto ">
            <!-- <img class="" alt="phone" src="@/assets/img/phone.png"> -->
            <h1 class="text-white text-start text-2xl ">Свяжитесь с нами:</h1>
            <div class="flex lg:cont lg:w-1/5  lg:justify-between ">
              <a class=" p-1" aria-label="instagram" href="https://instagram.com/pixel_perfectkz?igshid=MzRlODBiNWFlZA=="><svg class="" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z" fill="#ea4525"></path> </g></svg></a>
              <a class=" p-1" aria-label="telegram" href="https://t.me/pixel_perfectkz"><svg class="" width="30px" height="30px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z" fill="#40B3E0"> </path> <path d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308" fill="#FFFFFF"> </path> <path d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475" fill="#D2E5F1"> </path> <path d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624" fill="#B5CFE4"> </path> </g> </g></svg></a>
            </div>
            <div class="items-center">
            <!-- <p v-if="sucsess" class="text-white mt-2 text-2xl">ydacha</p>
            <p v-if="!sucsess" class="text-white mt-2 text-2xl">lox</p> -->
            </div>
        </div>
        
    </div>
    </form>
    
  </div>
 
 
</template>

<script setup>
const form = ref({
  name: '',
  phone: '',
  email: '',
  budget: '',
  comment: '',
});

const errors = ref(false);
const success = ref(false);
const waiting = ref(false);

async function submit(form) {
  waiting.value = true;
  await $fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    body: JSON.stringify(form.value),
  }).then(() => {
    errors.value = false;
    success.value = true;
    waiting.value = false;
    form.value = {
      name: '',
      phone: '',
      email: '',
      budget: '',
      comment: '',
    };
    
  }).catch(() => {
    errors.value = true;
    success.value = false;
    waiting.value = false;
  });
}

</script>

<style scoped>
.send {
  padding: 5px;
}
.tad {
  background: linear-gradient(
    91.69deg,
    #313134 -11.81%,
    #222224 23.9%,
    #12473c 60.63%,
    #292929 110.44%
  );
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 3rem;
  border-radius: 30px;
  margin-bottom: 30px;
  
  
}
.sec_forma {
    margin-top: 70px;
    
    
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

.vertical-line {
  width: 2px;
  height: 27rem;
  background-color: rgba(46, 236, 197, 1);
}
.button-1:hover {
  box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3;
  border: 3px solid #00d7c3;
}
.lark {
  margin-top: 3rem;
  border-left:3px solid #46f8da;
  padding: 15px;
  height: 100%;
}

.cont{
  background: rgba(255, 255, 255, 0.05);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(4.3px);
-webkit-backdrop-filter: blur(4.3px);
border: 1px solid rgba(255, 255, 255, 0.14);
}

@media (max-width: 1024px) {
    .forma {
        width: 100%;
        margin: auto;
        padding: 20px;

    }
    .tad {
        width: 100%;
        display: block;
    }
    .inp {
        width: 100%;
        margin: auto;
       
    }
    img {
    display: none;
    }
    .sec_forma {
      margin-top: -25px;
    }
    .lark {
      display: none;
    }
}
</style>

