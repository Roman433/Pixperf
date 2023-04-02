<template>
    <div class="">
      <h1 class="text-white">Accordion in Nuxt.js</h1>
      <div class="container text-white rounded-lg w-full  " v-for="item in items" :key="item.id">
        <button @click="toggleAccordion(item.id)">{{ item.title }}</button>
        <div v-if="item.open">{{ item.content }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, title: 'Item 1', content: 'Content fovdvr item 1', open: false },
          { id: 2, title: 'Item 2', content: 'Content for item 2', open: false },
          { id: 3, title: 'Item 3', content: 'Content for item 3', open: false }
        ]
      }
    },
    methods: {
      toggleAccordion(id) {
        this.items = this.items.map(item => {
          if (item.id === id) {
            item.open = !item.open
          } else {
            item.open = false
          }
          return item
        })
      }
    }
  }
  </script>
  