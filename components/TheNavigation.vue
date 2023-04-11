<template>
   <nav class="z-20 px-28 nav  fixed border  w-full z-10">
    <div class="lg:text-3xl text-xl navi   text-white lg:container lg:p-8 p-6 min-w-full mx-auto flex  items-center justify-between">
      <NuxtLink to="/"> 
        <h1 class="sm:none">Pixel Perfect</h1> 
      </NuxtLink>
        
       <div class=" hidden lg:flex lg:justify-between lg:basis-1/4">
        <NuxtLink class="" to="/"><h1 class="">услуги</h1></NuxtLink>
         <NuxtLink class="" to="/about"><h1>о нас</h1></NuxtLink> 
         <NuxtLink class="" to="/youtube"><h1>контакты</h1></NuxtLink> 
       </div>

       <a href="#form"><div class=" button button-1 text-white">заказать</div></a>
       <div class="lg:hidden ">
            <div class="space-y-2 ">
              <span class="block w-8 h-0.5 bg-white"></span>
              <span class="block w-5 h-0.5 bg-white"></span>
            </div>
       </div>
    </div>
    
  </nav>
  </template>
  
  <script setup>
  useHead({
    title: "is the title",
    link: [
      {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx",
        crossorigin: "anonymous"
      }
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa",
        crossorigin: "anonymous"
      }
    ]
  })
</script>
  
  
  <style scoped>
.nav {
  background-color: #000000;
  border: #000000;
}
h1 {
  text-decoration: none;
}
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




  </style>