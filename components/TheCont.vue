<template>
    <section class="text-white mt-44 bg-lighty opacity-32  rounded-lg relative">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <!-- <iframe width="100%" height="100%" title="map" class="absolute inset-0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.16);"></iframe> -->
      <div class="bg-gray relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">Город Алматы, Бостандыкский район</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
          <a class="text-green-400 leading-relaxed">example@email.com</a>
          <h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
      <p class="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-white">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-gray rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-white">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-gray rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-white">Message</label>
        <textarea id="message" name="message" class="w-full bg-gray rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
      
    </div>
  </div>
</section>
</template>


<!-- <template>
    <div class="main">
        <section class="m-36 text-center">
            <h1 class="text-8xl text-volna">Контакты</h1>
        </section>
        <div class="box">
            <div class="first   mx-auto w-1/2">
                <h1 class="text-2xl font-semibold uppercase text-white  p-1 m-3">
                    Мы находимся в городе: <p class="text-3xl m-1 text-volna font-medium">Алматы</p> 
                </h1>
                <p class="text-2xl uppercase font-semibold text-white p-1 m-2">
                    контактный номер:   
                </p>
                <a class="text-white text-xl hover:underline hover:text-volna text-center " href="tel:+77071033382">
                    +7 707 103 33 82
                </a>
                <p class="text-2xl uppercase font-semibold text-white p-1 m-2">
                    Наши соц сети:
                </p>
                <section class="icons  justify-between m-12 w-1/3  flex ">
                    
                </section>
                
            </div>
            <div class="second w-1/2"></div>
        </div>
    </div>
</template>

<style scoped>

 .box {
	 --border-size: 3px;
	 --border-angle: 0turn;
     background-image: conic-gradient(from var(--border-angle), #213, #112 50%, #213), conic-gradient(from var(--border-angle), transparent 0%, #08f, rgba(46, 236, 197, 1));
	 background-size: calc(100% - (var(--border-size) * 2)) calc(100% - (var(--border-size) * 2)), cover;
	 background-position: center center;
	 background-repeat: no-repeat;
	 animation: bg-spin 3s linear infinite;
}
 @keyframes bg-spin {
	 to {
		 --border-angle: 1turn;
	}
}
 .box:hover {
	 animation-play-state: paused;
}
 @property --border-angle {
	 syntax: "<angle>";
	 inherits: true;
	 initial-value: 0turn;
}

</style> -->