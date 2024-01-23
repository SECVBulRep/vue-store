<script setup>
import MyHello from './components/MyHello.vue'
</script>

<template>
  <my-hello title="Кроссвки PUMA" :price="95000" :isAdded="true">
    <button>Добавить</button>
  </my-hello>
  <my-hello title="Кроссвки PUMA" :price="95000" :isAdded="true">
    <h4>test</h4>
  </my-hello>
</template>

<style scoped></style>
