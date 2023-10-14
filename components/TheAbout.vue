<template>
   <div class="">
           <div class="  first_main ">
            <div class=" gradient  w-1/2  ">
                <h1 class=" text-white font-bold text-5xl">Для чего вам сайт?</h1>
                <h2 class="text-3xl mt-4 text-volna">Создание сайта поможет</h2>
                <p class="text-white text-xl mt-3"> расширить ваш бизнес, а также увеличит кофморт его ведения</p>
            </div>
            <div class="w-1/2 p-16  with_img ">
                <img class="w-1/2 mx-auto" src="@/assets/img/table.png" alt="">    
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
    /* backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); */

}
h1 {
    padding: 10px;
}
h2 {
   padding: 5px;
}

@media (max-width: 1024px) {
    .gradient {
        width: 100%;
        border-image-slice:1  0 1 1;
        height: 100%;
    }
    .first_main {
        display: block;
        padding: 5px;
    }
    .with_img {
        display: none;
    }
    h1 {
        font-size: 36px;
        line-height: 100%;
        font-style: normal;
        font-weight: 600;
        overflow-y: auto;
    }
    h2 {
        font-size: 28px;
        overflow-y: hidden;
    }
    p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
    }
}

</style>
