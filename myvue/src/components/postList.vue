<template>
  <div>
    <h3>Список</h3>
    <post-item v-for="post in posts" :post="post" :key="post.id"></post-item>
  </div>
</template>

<script>
import postItem from './postItem.vue'

export default {
  components: { postItem },

  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>