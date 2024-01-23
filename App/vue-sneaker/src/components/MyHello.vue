<script setup>
const props = defineProps({
  title: String,
  price: Number,
  isAdded: Boolean
})

console.log(props)
</script>

<template>
  <div class="product">
    <h2>{{ title }}</h2>
    <h3>Цена: {{ price }}</h3>
    <h3>Цена: {{ isAdded }}</h3>
    <slot></slot>
  </div>
</template>


<style scoped>
.product {
  border: 1px solid blue;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
