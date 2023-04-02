<template>
  <div class="container">
    <div class="lg:flex bor lg:justify-between">
      <div class="withtext w-full  lg:w-1/2 ">
        <h1 class="text-3xl text-start lg:text-start lg:text-5xl  text-volna font-semibold mb-6">
          Причины сотрудничать
          с нами
        </h1>
        <p class="text-white par_1 text-lg mb-4">
          Пока конкуренты говорят о том, что они лучшие - мы это доказываем<br />
          делом.
        </p>
        <p class="text-white text-lg mb-4">
          Вы можете ознакомиться с информацией о нас и посмотреть наше <br />
          портфолио
        </p>
        <button class="offset btn_port ">портфолио</button>
      </div>
      <div class="tom lg:w-1/3 oly text-white">
        <div class="p-6   ">
          <h1 class="text-4xl lg:text-5xl p-4 lg:p-5">
            Приемлимые <br />
            цены
          </h1>
          <h2 class="text-xl lg:text-2xl lg:p-5 mb-32 lg:mb-32 lg:text-start ">
            мы максимально оптимизируем <br />
            наш труд, для того, чтобы цены <br />
            были доступными
          </h2>
        </div>
        <img class="" src="@/assets/img/money.png" alt="">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      content: "qqqq",
    };
  },
};
</script>

<style scoped>


@media(max-width: 1024px) {
  .par_1 {
    display: none;
  }
  .btn_port {
    margin-bottom: 1.5rem;
  }
}


.tom {
  background: linear-gradient(
    139.56deg,
    #527791 10.06%,
    #325597 53.72%,
    #193895 88%
  );
  box-shadow: 0px 0px 150px rgba(59, 95, 150, 0.35);
  border-radius: 6px;
  margin-bottom: 2rem;
  position: relative;
 
  
}
.oly {
  transition: all .5s ease-in-out;
}
.oly:hover {
   transform: scale(1.1);
  /* transform: scale(0.9);
    transition: transform .8s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms; */

}
img {
  
  position: absolute;
  bottom: 0;
  right: 0;
  
  
}
offset {
  box-shadow: 0.3em 0.3em 0 0 var(--color), inset 0.3em 0.3em 0 0 var(--color);
}
.offset:hover,
.offset:focus {
  box-shadow: 0 0 0 0 var(--hover), inset 6em 3.5em 0 0 var(--hover);
}

.offset {
  --color: rgba(46, 236, 197, 1) ;
  --hover: #19bc8b;
}
button {
  color: var(--color);
  transition: 0.25s;
}
button:hover,
button:focus {
  border-color: var(--hover);
  color: #fff;
}

button {
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
}

</style>