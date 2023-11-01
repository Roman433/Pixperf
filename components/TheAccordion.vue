<template>
  <div class="mt-12">
    <h1 class="text-center text-white text-sm">FAQ</h1>
    <div
      class="m-2 text-white justify-between w-full mb-10"
      v-for="item in items"
      :key="item.id"
    >
      <div class="title_svg hor w-full flex items-center">
        <div class="svg_one p-4">
          <div :class="{ active: item.open }">
            <svg
              class="svg"
              width="32"
              height="32"
              viewBox="0 0 27 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5 13.4019C27.5 14.5566 27.5 17.4434 25.5 18.5981L4.5 30.7224C2.5 31.8771 -1.50515e-06 30.4338 -1.4042e-06 28.1244L-3.44255e-07 3.87564C-2.43308e-07 1.56624 2.5 0.122865 4.5 1.27757L25.5 13.4019Z"
                fill="#1EEBCD"
              />
            </svg>
          </div>
        </div>
        <h2 class="" @click="toggleAccordion(item.id)">{{ item.title }}</h2>
      </div>
      <p
        class="inactive-text mt-5 m-1"
        :class="{ 'active-text': item.open }"
        v-if="item.open"
      >
        {{ item.content }}
      </p>
    </div>
  </div>
</template>
  
  
  <script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Сколько времени уходит на созданиие сайта?",
          content:
            "обычно на создание сайта с нуля уходит от 1 недели до двух месяцев в зависимости от сложности обычно на создание сайта с нуля уходит от 1 недели до двух месяцев в зависимости от сложности",
          open: false,
        },
        {
          id: 2,
          title: "Этапы внедрения (SEO) оптиизации?",
          content:
            "Этапы SEO включают в себя ключевое слово и конкурентный анализ, оптимизацию контента, внутреннюю и внешнюю оптимизацию, а также мониторинг и обновление стратегии для поддержания высоких позиций в поисковых результатах.",
          open: false,
        },
        {
          id: 3,
          title: "Поддерживаете ли веб-сайты?",
          content:
            "обычно на создание сайта с нуля уходит от 1 недели до двух месяцев в зависимости от сложности",
          open: false,
        },
        {
          id: 4,
          title: "Каковы ваши  навыки в области веб-разработки?",
          content:
            "Мы специализируемся на фронт- бэк-энд разработке, дизайне UI. Мы создаем сайты разной сложности, используя современные фреймворки(Next, Nuxt, Angular), чтобы обеспечивать высокую производительность и функциональность.",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleAccordion(id) {
      this.items = this.items.map((item) => {
        if (item.id === id) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
        return item;
      });
    },
  },
};
</script>
  
  <style scoped>
h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 150%;
}

h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
}
p {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
}
.active {
  transform: rotate(90deg);
  transition: all 200ms linear;
}
.inactive-text {
  opacity: 0;
  transition: 1s;
}
.active-text {
  opacity: 1;
  transition: 1s;
}
.svg_one {
  transition: all 200ms linear;
}
.hor {
  border-bottom: 1px solid rgba(255, 255, 255, 0.651);
}

@media (max-width: 1024px) {
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    padding: 10px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
  }
  .svg {
    padding-right: 15px;
    /* background-color: azure; */
    height: 50px;
    width: 35px;
  }
  .title_svg {
    margin: 10px;
  }
  .svg_one {
    padding: 15px;
  }
  .active {
    padding-right: 35px;
  }
}
</style>