<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Название</strong> {{ post.title }}</div>
      <div><strong>Описание</strong> {{ post.body }}</div>
    </div>
    <div class="postBtns">
      <my-button @click="$emit('remove', post)">Удалить</my-button>
      <my-button @click="$router.push('/posts/' + post.id)">Открыть</my-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>