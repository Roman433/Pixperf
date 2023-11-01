<script setup lang="ts">
useHead({
  title: "Разработка сайтов",
  meta: [
    {
      name: "description", content: "Разработка сайта с нуля"
    },
    {
      name: "keywords",
      content: "сайт, создание в Алматы, дешево, с нуля"
    },
  ],
})
</script>

<template>
  <section class="text-white far">
    <div data-aos="fade-up "
      class="container mx-auto mt-12 lg:mt-0 flex px-5 py-12 md:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1
          class="title-font sm:text-4xl p-2 text-3xl mb-4 font-medium text-volna"
        >
          Разработка сайтов
        </h1>
        <p class="mb-8 leading-relaxed">
          Мы - студия web-разработки, работаем уже более 3-х лет,готовы
          разработать для вас сайт в кротчайшие сроки.
        </p>
        <div class="flex justify-center w-full mt-4 justify-between">
          <NuxtLink to="about"
            ><button
              class="inline-flex text-white border-0 py-4 px-4 but rounded text-sm lg:text-lg"
            >
              Подробнее >
            </button></NuxtLink
          >
          <NuxtLink to="#form"><button
            class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-4 px-4 focus:outline-none hover:underline rounded  lg:text-lg"
          >
            Остались вопросы?
          </button>
        </NuxtLink>
          <!-- <button class="button1 py-4 px-4  learn-more">
            <span aria-hidden="true" class="circle">
            <span class="icon arrow"></span>
            </span>
            <span class="button-text">Вопросы?</span>
        </button> -->
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover hero object-center  rounded"
          height="500"
          width="500"
          alt="hero"
          loading="lazy"
          src="@/assets/img/man.png"
        />
      </div>
    </div>
  </section>
  <div class="horizontal-line"></div>
</template>


<style>
.horizontal-line {
  position: relative;
  height: 4px;
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
.but {
  background-color: transparent;
  border: 3px solid #00d7c3;
  border-radius: 9999px;
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;

  color: #ffffff;
}
.but:hover {
  box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3;
  border: 3px solid #00d7c3;
}
.far {
  background-image: url("@/assets/img/bg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: center;
}
.button1 {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;

  text-decoration: none;
  background: transparent;
  padding: 4px;
}

.button1.learn-more {
  width: 12rem;
  height: auto;
}

.button1.learn-more .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  box-shadow: 0 0 5px 1px white;
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: #282936;
  border-radius: 1.625rem;
}

.button1.learn-more .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}

.button1.learn-more .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}

.button1.learn-more .circle .icon.arrow::before {
  position: absolute;

  top: -0.29rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
  transform: rotate(45deg);
}

.button1.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: rgba(255, 255, 255, 0.493);
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
}

.button1:hover .circle {
  width: 100%;
  box-shadow: 0 0 10px 2px white;
}

.button1:hover .button-text {
  transform: translate(-1.7rem, 0);
}

.button1:hover .circle .icon.arrow {
  background: #fff;
  transform: translate(8.7rem, 0);
}
.button1:active .circle .icon.arrow {
  transform: translate(9.5rem, 0);
  transition: all 0.3s;
}

.button1:active .circle {
  transform: scale(0.9);
  transition: all 0.3s;
  box-shadow: 0 0 5px 0.5px white;
}

.button1:hover .button-text {
  color: #fff;
}

.button1:active .button-text {
  color: rgba(255, 255, 255, 0.459);
}
@media (max-width: 1024px) {
.hero {
  display: none;
}
}
</style>