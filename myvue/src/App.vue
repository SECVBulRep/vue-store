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
  <div class="app">
    <form>
      <h4>Создание поста</h4>
      <input class="input" type="text" placeholder="Название" />
      <input class="input" type="text" placeholder="Описание" />
      <button class="btn">создать</button>
    </form>
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

.app {
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin: 5px;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>
