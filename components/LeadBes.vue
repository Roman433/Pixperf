<template>
    <section>
      <section id="hero1" class="hero">
        <div class="inner">
          <div class="copy">
            <h1 сlass="uppercase font-bold ha">Услуги графического Дизайна </h1>
          </div>
        </div>
      </section>
      
    </section>
  </template>
  
  <style scoped>
  /* .bg {
    background-image: url("@/assets/img/triangles.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    height: 50vh;
  } */
  
  /* .inner-div {
    border: 4px solid ;
   border-image-source: linear-gradient(128.11deg, #1ea392 0%, #020E0C 94.44%);
   border-image-slice:1  0 1 1;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(5px);
  } */
  .num-block {
    background-image: url("@/assets/img/triangles.png");
    background-repeat: no-repeat;
  }
  #hero1 {
    background: url("@/assets/img/origi.jpg");
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }
  
  .hero,
  .content {
    text-align: center;
    position: relative;
    width: 100%;
  }
  .inner {
    min-height: 600px;
    position: relative;
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(5px);
  }
  
  .copy {
    position: absolute;
    top: 50%;
    height: 10em;
    margin-top: -5em;
    width: 100%;
  }
  .hero h1,
  .hero p {
    color: rgb(255, 255, 255);
  }
  .content h1,
  .content p {
    color: #333;
  }
  h1 {
    margin: 0px;
  
    font-weight: 500;
    font-size: 4rem;
    padding: 0px 20px;
  }
  p {
    font-size: 14px;
    padding: 0px 20px;
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 2rem;
    }
  }
  </style>