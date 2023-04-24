<template>
    <section class="">
        <TheDev />
        <div class="dev container mx-auto">
            <div class="container inner  mx-auto" >
            <TheNums />
            <TheAbout />
            <!-- <ThePricing />  -->
         </div>
        </div>
           
    </section>
</template>

<style scoped>
.dev {
    background-image: url("@/assets/img/bot.svg");
  background-repeat: no-repeat;
  background-size: 50% auto;
 background-position: bottom right;  
 
}
.inner {
    backdrop-filter: blur(6.8px);
-webkit-backdrop-filter: blur(6.8px);
}
</style>