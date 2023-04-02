<template>
  <div class="home">
    <TheTest />
    <div class="text-volna text-5xl" @click="toggleModal = !ToggleModal">
      open modal
    </div>
    <div v-if="toggleModal" class="bg-volna">
      <h1>ssclsmcwkmfkmwfekfmwkmfwkmewfkmwfkme</h1>
      <h1>ssclsmcwkmfkmwfekfmwkmfwkmewfkmwfkme</h1>
      <h1>ssclsmcwkmfkmwfekfmwkmfwkmewfkmwfkme</h1>
      <button @click="toggleModal = false">dwdwdww</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleModal: false,
    };
  },
};
</script>


