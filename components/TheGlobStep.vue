<template>
  <div>
    <div>
      <div class="steps relative">
          <div class="absolute top-16 left-0">
              <TheStep />
          </div>
          <div class="lines">
            <div class="circle mx-auto"></div>
            <div class="vertical-line mx-auto"></div>
            <div class="circle mx-auto"></div>
          </div>
          <div class="absolute step_2 right-10">
            <TheSteptwo />
          </div>
          <div class="lines_2">
            <div class="lines_mainer">
              <div class="vertical-line mx-auto"></div>
              <div class="circle mx-auto"></div>
            </div>
            <div class="absolute step_3 left-0">
              <TheFinal />
            </div>
          </div>
      </div>
      <TheAccordion />
      <section class="adaptive">
        <TheStep />
        <TheSteptwo />
        <TheFinal />
      </section>
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
.step_2 {
  bottom: 35rem;
}
.step_3 {
  bottom: 10rem;
}
.adaptive {
  display: none;
}
@media (max-width: 1024px) {
  .adaptive {
  display: block;
}
  .steps {
    display: none;
  }
  .circle {
    border: 0.1875em solid rgb(55, 209, 178);
    border-radius: 50%;

    height: 2em;
    width: 2em;
    margin-top: 10rem;
  }
  .lines {
   display: none;
   
    
  }
  .lines_mainer {
    display: none;
  }
  
}
</style>
