<template>
  <div>
    <div class="flex   overflow-x-hidden w-full home">
      <div class="mt-16 p-2 relative z-10  w-full lg:left mt-26 lg:mt-48 lg:p-2 lg:w-1/2">
        <div class="lg:pb-4    border  text-start">
          <h1 class="text-volna  title font-semibold text-5xl  lg:text-7xl pb-2">
            Разработка<br/> сайтов
          </h1>
          <h2 class=" text-volna text-lg lg:text-5xl title-2 p-2">для твоего бизнеса</h2>
          <h3 class=" text-white text-lg hidden lg:flex   lg:text-2xl ton">
            Мы - студия web-разработки, работаем уже более 3-х лет,готовы
            разработать для вас сайт в кротчайшие сроки.
          </h3>
          <h3 class="text-white text-lg lg:hidden flex">
            Мы web-студия которая работает уже больше 3-х лет 
          </h3>
        
        </div>
        <div class="flex  w-full items-center pt-24 lg:pt-28   justify-between">
          <NuxtLink to="/about"><button class="button button-1 lg:mb-3">Подробнее ></button></NuxtLink>
         
          <NuxtLink to="#form" class="vop text-white button-3 hover:underline">
            остались вопросы
          </NuxtLink>
          
        </div>
      </div>
      <div class="cul right  w-1/2 h-full circle">
        <img class=" w-full button-3" src="@/assets/img/man.png" alt="" />
      </div>
    </div>
  </div>

  <div class="horizontal-line"></div>
</template>


<style scoped>
br {
  display: none;
}

@media  (max-width: 1024px)  {
.cul {
  
  position: absolute;
   top: 10%;
  overflow-x: hidden;
  right: 0%;
  bottom: 0;
  width: 100%;  
}
img {
  margin-left: 95px;
  width: 100%;
}
.btn {
  display: block;
}
.button {
  padding: 0.25rem;

  font-size: medium;
  align-items: center;
  margin-top: 0.5rem;
  margin-right: 0.5rem;

}
h2 {
  display: none;
}
h3 {
  width: 290px;
  margin-bottom: 50px;
}
.vop {
  display: none;
}

br {
  display: flex;
}
}








.title {
  animation: titleEffect 1s cubic-bezier(0, 0.5, 0.4, 1);
}
.title-2 {
  animation: titleEffect 1s cubic-bezier(0, 0.2, 0.4, 1);
}
.home {
  background-image: url("@/assets/img/bg.png");
}
.circle {
  background-image: url("@/assets/img/circles.png");
  background-position: center;
}
.horizontal-line {
  position: relative;
  height: 2px;
  /* background-color: black; */
  margin-bottom: 30px;
}

.horizontal-line::before,
.horizontal-line::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 50%;
  top: 0;
}

.horizontal-line::before {
  left: 0;
  background: linear-gradient(
    to right,
    rgba(5, 5, 5, 0),
    rgba(46, 236, 197, 1)
  );
}

.horizontal-line::after {
  right: 0;
  background: linear-gradient(
    to left,
    rgba(0, 128, 0, 0),
    rgba(46, 236, 197, 1)
  );
}

.button {
  padding: 1rem;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  color: #ffffff;
  font-size: 1.125rem;
  line-height: 1.75rem;
  animation: buttonUp 0.6s cubic-bezier(0, 0.5, 0.4, 1);
}
.ton {
  animation: buttonUps 0.7s cubic-bezier(0, 0.5, 0.4, 1);
}
.button-3 {
  animation: buttonUps 0.7s cubic-bezier(0, 0.5, 0.4, 1);
}
.button-1 {
  background-color: transparent;
  border: 3px solid #00d7c3;
  border-radius: 9999px;
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;

  color: #ffffff;
}
.button-1:hover {
  box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3;
  border: 3px solid #00d7c3;
}














@keyframes titleEffect {
  from {
    opacity: 0;
    transform: translateX(-75px);
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes buttonUp {
  from {
    opacity: 0;
    transform: translateY(75px);
  }
}
@keyframes buttonUps {
  from {
    opacity: 0;
    transform: translateX(75px);
  }
}
</style>

