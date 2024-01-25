<template>
  <div class="post">
    <div>
      <div><strong>Название</strong> {{ post.title }}</div>
      <div><strong>Описание</strong> {{ post.body }}</div>
    </div>
    <div class="postBtns">
      <my-button>Удалить</my-button>
    </div>
  </div>
</template>

<script>
import myButton from './ui/myButton.vue'
export default {
  components: { myButton },
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