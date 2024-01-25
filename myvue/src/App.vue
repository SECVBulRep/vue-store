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
      posts: [{ id: 1, title: 'Заголовок 1', body: 'Post body' }]
    }
  },
  methods: {
    CreatePost(post) {
      this.posts.push(post)
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
