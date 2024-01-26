
<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button @click="showDialog" style="margin: 15px">Добавить пост</my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="CreatePost"></post-form>
    </my-dialog>
    <post-list :posts="posts" @remove="removePost"></post-list>
  </div>
</template>


<script>
import postForm from './components/postForm.vue'
import postList from './components/postList.vue'
import MyButton from './components/ui/myButton.vue'
import MyDialog from './components/ui/myDialog.vue'
import axios from 'axios'

export default {
  components: {
    postForm,
    postList,
    MyDialog,
    MyButton
  },

  data() {
    return {
      posts: [],
      dialogVisible: false
    }
  },
  methods: {
    CreatePost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
          this.posts = response.data
          console.log(response)
        }, 1000)
      } catch (error) {
        alert(error)
      }
    }
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>


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
