<template>
    <div class="">
            <div class="  first_main mt-32">
                <div class="w-1/2  with_img pl-16">
                 <img src="@/assets/img/nods.png" alt="">    
             </div>
             <div class=" gradient  w-1/2 ">
                 <h1 class=" text-white font-semibold text-7xl">Почему именно мы?</h1>
                 <h2 class="text-5xl mt-4 text-volna">большинство клиентов </h2>
                 <p class="text-white text-2xl mt-3"> довольны качествам, скоростью а также отзывчивостью и гибкостью сотрдуников</p>
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
 border-image-slice:1  0 1 1;
 /* backdrop-filter: blur(10px);
 -webkit-backdrop-filter: blur(10px); */
 
 }
 h1 {
    padding: 10px;
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
         overflow-y: hidden;
         text-align: start;
     }
     h2 {
         font-size: 28px;
         overflow-y: hidden;
         text-align: start;
     }
     p {
         font-style: normal;
         font-weight: 400;
         font-size: 18px;
         line-height: 150%;
     }
 }
 
 </style>
 