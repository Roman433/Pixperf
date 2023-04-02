<template>
    <div class="text-black bg-white p-4 rounded-xl items-center container">
      <button class="text-center" @click="showModal = true">it means</button>
      <modal class="flex justify-between" v-if="showModal" @close="showModal = false">
        <h2 class="">Modal Title</h2>
        <p class="">Modal Content</p>
        <button class="text-volna" @click="showModal = false">X</button>
       
      </modal>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: false
      }
    }
  }
  </script>
  
  <style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
  }
  </style>
  

  