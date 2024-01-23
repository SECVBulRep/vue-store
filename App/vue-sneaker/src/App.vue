<script setup>
import MyHello from './components/MyHello.vue'
</script>

<template>
  <div class="mb-5">
    <my-hello title="Кроссвки PUMA" :price="95000" :isAdded="true" />
  </div>
  <div class="mb-5">
    <my-hello title="Кроссвки PUMA" :price="95000" :isAdded="true" />
  </div>
</template>

<style scoped></style>
