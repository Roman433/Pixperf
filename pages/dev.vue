<script setup lang="ts">
useHead({
  title: "вы можете заказать у нас сайт",
  meta: [
    {
      name: "description", content: "создать сайт в алматы. Разработка сайта в Алматы, разработка под ключ. ☎ +7 7071033382"
    },
    {
      name: "keywords",
      content: "разработка сайта, дизайн с нуля, дизайн сайта, ux, ui, ux/ui"
    },
  ],
})
</script>

<template>
    <section class="">
        <TheDev />
                <div class="inners">
                    <div class=" container mx-auto">
                    <TheNums />
                    <Technology />
                    <TheAbout />
                </div>
                </div>
        <div class="dev container mx-auto">
                
            <div class="container inner  mx-auto" >
                 <TheSet />
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
.inners {
    background-image: url("@/assets/img/waves.png");
    background-repeat: no-repeat;
    background-size: 100% auto;  
}
</style>