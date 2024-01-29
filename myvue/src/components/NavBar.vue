<template>
  <div class="navbar">
    <div @click="$router.push('/')">Home</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')">О сайте</my-button>
    </div>
  </div>
</template>

<script>
import myButton from './ui/myButton.vue'
export default {
  components: { myButton }
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding-bottom: 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>