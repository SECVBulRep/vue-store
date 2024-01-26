<template>
  <div v-if="posts.length > 0">
    <h3>Список</h3>
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    ></post-item>
  </div>
  <h2 v-else style="color: red">Список пользователей пуст</h2>
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