<template>
  <div class="container mx-auto">
    <div class="justify-between  tors flex">
      <div class="tor lg:w-1/3   text-white">
        <div class=" lg:p-6 p-2 m-4">
          <h1 class="text-3xl p-4 lg:text-5xl lg:p-5">
            в срок сдаем <br />
            работу!
          </h1>
          <h2 class="  text-xl p-4 mb-24 lg:text-2xl lg:p-5 lg:mb-32 text-start">
            расписываем каждый этап по <br />
            срокам, и придерживаемся <br />
            дедлайнов
          </h2>
        </div>
        <img class="img_1" src="@/assets/img/time.png" alt="" />
      </div>
      <div class="tor w-1/3 text-white">
        <div class="p-6">
          <h1 class="text-3xl lg:text-5xl p-4 lg:p-5">
            Команда <br />
            специалистов
          </h1>
          <h2 class="text-xl lg:text-2xl p-4 lg:p-5 mb-32 text-start">
            В нашей команде множество <br />
            специалистов, и каждый из них <br />
            хорошо знает свое
          </h2>
        </div>
        <img class="img_2" src="@/assets/img/boy.png" alt="" />
      </div>
      <div class="tor text-white">
        <div class="p-6">
          <h1 class=" p-4 text-3xl lg:text-5xl lg:p-4">
            Консультация <br/>
            перед заказом
          </h1>
          <h2 class=" text-xl third_H2 lg:text-2xl p-5 mb-32 text-start">
            Наши менеджеры в сети 24/7, <br />
            и готовы помочь вам, а так же <br />
            ответить на вопросы
          </h2>
        </div>
        <img class="img_3" src="@/assets/img/headphones.png" alt="" />
      </div>
    </div>
    

    <div class="containers">

      <div class="vertical-line"></div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1024px) { 
  .tors{
    display: block;
    
     width: 100%;
     /* margin: 5px; */
  }
  .tor {
    width: 95%;
    margin: 10px;
    
  }
  .img_1 {
    width: 35%;
  }
  .img_2 {
    width: 35%;
  }
  .img_3 {
    width: 35%;
  }
  .third_H2 {
    text-align: left;
  }
}
.tor {
  background: linear-gradient(
    139.56deg,
    #303134 10.06%,
    #282828 53.72%,
    #282828 88%
  );
  box-shadow: 0px 0px 80px rgba(44, 44, 45, 0.35);
  border-radius: 6px;
  margin-bottom: 30px;
  position: relative;
  transition: all .5s ease-in-out;
}
.tor:hover {
  transform: scale(1.1);
    transition: transform .7s;
}

img {
  position: absolute;
  bottom: 0;
  right: 0;
}

.containers {
  display: flex;
  justify-content: center;
  align-items: center;
 
}
.vertical-line {
  width: 2px;
  height: 180px;
  background-color: rgba(46, 236, 197, 1);
}
</style>