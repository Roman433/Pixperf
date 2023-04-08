<template>
   <div class="">
           <div class="  first_main mt-32">
            <div class=" gradient  w-1/2 ">
                <h1 class=" text-white font-bold text-7xl">Для чего вам сайт?</h1>
                <h2 class="text-5xl mt-4 text-volna">Создание сайта поможет</h2>
                <p class="text-white text-2xl mt-3"> расширить ваш бизнес, а также увеличит кофморт его ведения</p>
            </div>
            <div class="w-1/2  with_img pl-16">
                <img src="@/assets/img/table.png" alt="">    
            </div>
    </div>
   </div>

</template>

<style scoped>

 .first_main {
    justify-content: space-between;
        display: flex;
       
        
    }
.choose_p {
box-shadow: 0px 4px 67px rgba(30, 235, 205, 0.6);
border-radius: 10px;
color: #020E0C;
}
.gradient {
  padding: 4rem;
border: 4px solid ;
border-image-source: linear-gradient(128.11deg, #1ea392 0%, #020E0C 94.44%);
border-image-slice:1  0 0 1;
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);

}

@media (max-width: 1024px) {
    .gradient {
        width: 100%;
        border-image-slice:1  0 1 1;
    }
    .first_main {
        display: block;
    }
    .with_img {
        display: none;
    }
    h1 {
        font-size: 36px;
        line-height: 100%;
        font-style: normal;
        font-weight: 600;
    }
    h2 {
        font-size: 28px;
    }
    p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
    }
}

</style>
