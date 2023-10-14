<template>
    <div class="">
          <div
            class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-volna"
          >
            <!-- left -->
            <div class="flex flex-row-reverse md:contents">
              <div
                class=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 class="font-semibold text-2xl mb-1">01 ЭТАП</h3>
                <p class="leading-tight text-xl text-white text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quaerat?
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto  relative mr-10">
                <div class="h-full w-full flex items-center  justify-center">
                  <div class="h-full  w-10 bg-blue-800  pointer-events-none"></div>
                </div>     
              
                <div class="w-6 h-6 absolute top-1/2  -mt-3 rounded-full bg-volna shadow"></div>
              </div>
            </div>
            <!-- right -->
            <div class="flex md:contents ">
              <div class="col-start-5  col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6  flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-volna shadow"
                ></div>
              </div>
              <div
                class=" col-start-6  col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 class="font-semibold  text-2xl mb-1">02 Этап</h3>
                <p class="leading-tight text-xl text-white text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae, facilis.
                </p>
              </div>
            </div>
            <!-- left -->
            <div class="flex flex-row-reverse md:contents">
              <div
                class=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 class="font-semibold text-2xl mb-1">03 Этап</h3>
                <p class="leading-tight text-xl text-white text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quaerat?
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-volna shadow"
                ></div>
              </div>
            </div>
            <!-- left -->
            <div class="flex flex-row-reverse md:contents">
              <div
                class=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 class="font-semibold text-2xl mb-1">04 Этап</h3>
                <p class="leading-tight text-xl text-white text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quaerat?
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-volna shadow"
                ></div>
              </div>
            </div>
            <!-- right -->
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-volna shadow"
                ></div>
              </div>
              <div
                class=" col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 class="font-semibold  text-2xl mb-1">05 Этап</h3>
                <p class="leading-tight text-white text-xl text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae, facilis.
                </p>
              </div>
            </div>
            <!-- d -->
            <div class="svg-wrapper">
      <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
        <rect id="shape" height="40" width="150" />
        <div id="text">
          <a href=""><span class="text-white "></span>портфолио</a>
        </div>
      </svg>
    </div>
          </div>
        </div>
</template>


<style scoped>
.position {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 15%;
}

#workarea {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #1e1a3e;
  font-family: Raleway;
}

#personal {
  color:white;
  text-decoration:none;
  position:absolute;
  bottom:15px;
  right:2%;
}
/*    start code for the actual button:         */


/*   
    Spot is the span on the inside of the href that
    fills the parent and makes the hover and link work
    for the entire div
*/

.spot {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
/*
    This is the outer svg wrapper that the SVG itself will 
    fill. Multiple svg-wrapper classes can be put side by side.
*/

.svg-wrapper {
  margin-top: 0;
  position: relative;
  width: 150px;
  /*make sure to use same height/width as in the html*/
  height: 40px;
  display: inline-block;
  border-radius: 3px;
  margin-left: 5px;
  margin-right: 5px
}
/*
  This is where we define the fill, color, thickness,
  and stroke pattern of the SVG when there is no hover.
  The dasharray and offset together define the line position
  under the words. Here's also where the transition speed is set.
*/

#shape {
  stroke-width: 6px;
  fill: transparent;
  stroke: #02ffc4;
  stroke-dasharray: 85 400;
  stroke-dashoffset: -220;
  transition: 1s all ease;
}
/* 
    Pushing the text up into the SVG. Without this the
    text would be below the div's.
*/

#text {
  margin-top: -35px;
  text-align: center;
}

#text a {
  color: white;
  text-decoration: none;
  font-weight: 100;
  font-size: 1.1em;
}
/* 
    Changing the shape on hover. I change the color of the stroke,
make it thinner, then set it to again wrap around the entire parent element.
*/

.svg-wrapper:hover #shape {
  stroke-dasharray: 50 0;
  stroke-width: 3px;
  stroke-dashoffset: 0;
  stroke: #06D6A0;
}
</style>