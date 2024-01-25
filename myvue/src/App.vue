<script>
import postForm from './components/postForm.vue'
import postList from './components/postList.vue'

export default {
  components: {
    postForm,
    postList
  },

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
  methods: {
    CreatePost(post) {
      this.posts.push(post)
      console.log(post)
    }
  }
}
</script>

<template>
  <div class="app">
    <post-form @create="CreatePost"></post-form>
    <post-list :posts="posts"></post-list>
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
</style>
