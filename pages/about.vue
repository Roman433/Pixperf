<template>
  <div class="container mx-auto">
    <div class="mt-28"></div>
    <TheAbout />
    <div>
      <div class="steps relative">
        <div class="absolute top-16 left-0"><TheStep /></div>
        <div class="">
          <div class="vertical-line mx-auto"></div>
          <div class="circle mx-auto"></div>
        </div>
        <div class="absolute right-10 bottom-32"><TheSteptwo /></div>
      </div>
    </div>
  </div>
</template>




<style scoped>
.vertical-line {
  width: 2px;
  height: 25rem;
  background-color: rgba(46, 236, 197, 1);
}
.circle {
  border: 0.1875em solid rgb(55, 209, 178);
  border-radius: 50%;

  height: 2em;
  width: 2em;
}
.steps {
  padding: 12rem;
  
}
</style>

