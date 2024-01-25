<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: 'Заголовок 1', body: 'Post body' },
        { id: 2, title: 'Заголовок 2', body: 'Post body' },
        { id: 3, title: 'Заголовок 3', body: 'Post body' },
        { id: 4, title: 'Заголовок 4', body: 'Post body' }
      ]
    }
  },
  methods: {}
}
</script>

<template>
  <div>
    <div class="post" v-for="post in posts">
      <div><strong>Название</strong> {{ post.title }}</div>
      <div><strong>Описание</strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin: 5px;
}
</style>
