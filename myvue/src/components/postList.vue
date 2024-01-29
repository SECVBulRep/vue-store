<template>
  <div v-if="posts.length > 0">
    <h3>Список</h3>

    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      ></post-item>
    </transition-group>
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

<style  scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 1s;
}
.post-list-enter, .post-list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>