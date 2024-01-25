<script>
export default {
  data() {
    return {
      title: '',
      body: '',
      posts: [
        { id: 1, title: 'Заголовок 1', body: 'Post body' },
        { id: 2, title: 'Заголовок 2', body: 'Post body' },
        { id: 3, title: 'Заголовок 3', body: 'Post body' },
        { id: 4, title: 'Заголовок 4', body: 'Post body' }
      ]
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body
      }

      this.posts.push(newPost)

      this.title = ''
      this.body = ''
    }
  },
  inputTitle(e) {
    this.title = e.target.value
  }
}
</script>

<template>
  <div class="app">
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <input
        v-bind:value="title"
        @input="title = $event.target.value"
        class="input"
        type="text"
        placeholder="Название"
      />
      <input
        v-bind:value="body"
        @input="body = $event.target.value"
        class="input"
        type="text"
        placeholder="Описание"
      />
      <button class="btn" @click="createPost">создать</button>
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
