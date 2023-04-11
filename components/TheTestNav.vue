<template>
    <div class="fixed w-full bck z-20">
      <div class="text-white ">
        <nav
          class="
          
            container
            px-6
            py-8
            mx-auto
            md:flex md:justify-between md:items-center
          "
        >
          <div class="flex items-center justify-between">
            <NuxtLink
              to="/"
              class="
                text-xl
                font-bold
                text-gray-800
                md:text-2xl
                hover:text-blue-400
              "
              >Pixel Perfect
            </NuxtLink>
            <!-- Mobile menu button -->
            <div @click="showMenu = !showMenu" class="flex md:hidden">
              <button
                type="button"
                class="
                  text-gray-800
                  hover:text-gray-400
                  focus:outline-none focus:text-gray-400
                "
              >
              <div  class="space-y-2 ">
              <span class="block w-8 h-0.5 bg-white"></span>
              <span  class="block w-5 h-0.5 bg-white"></span>
            </div>
              </button>
            </div>
          </div>
  
  
          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <transition class="list" name="slide">
            <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="list  flex-col mt-8 relative space-y-4 md:flex  md:space-y-0 md:flex-row md:items-center  md:space-x-10    md:mt-0  " >
                <ul>
                    <NuxtLink class="text-lg font-semibold text-gray-800 hover:text-blue-400">
                             услуги 
                    </NuxtLink>
                   
                </ul>
                
                <li>
                    <NuxtLink class="text-lg font-semibold text-gray-800 hover:text-blue-400" to="/about">
                         О нас
                    </NuxtLink>
                </li>
            <li>
                <NuxtLink to="contacts" class="text-lg font-semibold text-gray-800 hover:text-blue-400">
                     контакты
                 </NuxtLink>
            </li>
            <li>
                <NuxtLink to="#form"><div class="order button button-1    text-white">заказать</div></NuxtLink>
            </li>
          </ul>
        </transition>
        </nav>
      </div>
    </div>
  </template>
  <script>


  export default {
    data() {
        return {
            showMenu: false,
        };
    },

};
  </script>

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
.bck {
    background: rgba(0, 0, 0, 0.38);

box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(15.9px);
-webkit-backdrop-filter: blur(15.9px);
border-image-source: linear-gradient(128.11deg, #1ea392 0%, #020E0C 44.44%);
border-image-slice:1  0 0 1;

}
@media (max-width: 1024px) {
  .button {
    overflow: hidden;
    display: none;
  }
  .button-1 {
    overflow: hidden;
  }
  .list{
  transition: transform 1.4s ease-in-out;
}

  
}
  </style>