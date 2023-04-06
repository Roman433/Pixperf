<template>
   <nav class=" nav fixed lg:bg-black w-full z-10">
    <div class="lg:text-3xl text-xl   text-white lg:container lg:p-8 p-6 min-w-full mx-auto flex  items-center justify-between">
      <NuxtLink to="/"> 
        <h1 class="sm:none">Pixel Perfect</h1> 
      </NuxtLink>
        
       <div class=" hidden lg:flex lg:justify-between lg:basis-1/4">
        <NuxtLink class="" to="/"><h1 class="">услуги</h1></NuxtLink>
         <NuxtLink class="" to="/about"><h1>о нас</h1></NuxtLink> 
         <NuxtLink class="" to="/youtube"><h1>контакты</h1></NuxtLink> 
       </div>

      <NuxtLink to="/">   <div class=" button button-1 text-white">заказать</div></NuxtLink> 
       <div class="lg:hidden">
            <div class="space-y-2">
              <span class="block w-8 h-0.5 bg-white"></span>
              <span class="block w-5 h-0.5 bg-white"></span>
            </div>
       </div>
    </div>
    
  </nav>
  </template>
  
  
  
  
  <style scoped>

.button {
  padding: 1rem; 
padding-left: 1.75rem;
padding-right: 1.75rem; 
color: #ffffff; 
font-size: 1.125rem;
line-height: 1.75rem; 
}
.button-1 {
  background-color: transparent;
  border: 3px solid #00d7c3;
  border-radius: 9999px; 
  -webkit-transition: all .15s ease-in-out;
  transition: all .15s ease-in-out;
  
  color: #ffffff; 
}
.button-1:hover {
  box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3;
  border: 3px solid #00d7c3;
}
@media (max-width: 768px) {
  .button {
    overflow: hidden;
    display: none;
  }
  .button-1 {
    overflow: hidden;
  }
  
}



  </style>