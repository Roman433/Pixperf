<template>
  <div class="mb-2 lg:mb-24">
    <h1 class="text-center  text-white">Технологии</h1>

    <div class="block  lg:flex  items-center">
      <div class="w-full brd lg:w-1/3 block">
        <div class="flex w-full items-center  justify-around px-5 py-5">
          <img class="img" src="@/assets/img/figma.png" alt="icon" />
          <img class="img" src="@/assets/img/vtor.png" alt="icon" />
          <img class="img" src="@/assets/img/mockflow.png" alt="icon" />
        </div>
        <div class="list-title text-white text-center mt-4">Интерактивные прототипы</div>
        <div class="list-item text-center text-white">Axure, Mockflow, Figma</div>
      </div>

      <div class="w-full  brd lg:w-1/3 block">
        <div class="flex w-full items-center  justify-around px-5 py-5">
          <img class="img" src="@/assets/img/princip.png" alt="icon" />
          <img class="img" src="@/assets/img/framer.png" alt="icon" />
          <img class="img" src="@/assets/img/aftereffects.png" alt="icon" />
        </div>
        <div class="list-title text-white text-center mt-4">Интерактивная анимация</div>
        <div class="list-item text-white text-center">Principle, Framer, AfterEffects</div>
      </div>

      <div class="w-full lg:mb-0 mb-24  lg:w-1/3 block">
        <div class="flex w-full items-center  justify-around px-5 py-5">
          <img class="img" src="@/assets/img/figma.png" alt="icon" />
          <img class="img" src="@/assets/img/loi.png" alt="icon" />
          <img class="img" src="@/assets/img/adobe.png" alt="icon" />
        </div>
        <div class="list-title text-white text-center mt-4">Дизайн в Figma</div>
        <div class="list-item text-white text-center">Интерфейсы: Figma, Sketch, Adobe XD</div>
      </div>
      
    </div>
  </div>
</template>


<style scoped>
.img {
  max-height: 62px;
  max-width: 100%;
}
h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 150%;
}
.list-title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 20px;
  line-height: 1.2;
  width: 100%;
}
.list-item {
  font-size: 16px;
  line-height: 1.5;
  width: 100%;
}
.brd {
  border-right: 1px solid gray;
}

@media (max-width: 1024px) {
  .brd {
  display: none;
}
}
</style>