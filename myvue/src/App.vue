
<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <div class="app__btns">
      <my-button @click="showDialog" style="">Добавить пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="CreatePost"></post-form>
    </my-dialog>
    <post-list v-if="!isPostLoading" :posts="sortedPosts" @remove="removePost"></post-list>
    <div v-else>Loading ...</div>
  </div>
</template>


<script>
import postForm from './components/postForm.vue'
import postList from './components/postList.vue'
import MyButton from './components/ui/myButton.vue'
import MyDialog from './components/ui/myDialog.vue'
import axios from 'axios'
import MySelect from './components/ui/mySelect.vue'

export default {
  components: {
    postForm,
    postList,
    MyDialog,
    MyButton,
    MySelect
  },

  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'по названию' },
        { value: 'body', name: 'по содержимому' }
      ]
    }
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    }
  },

  watch: {
    /*selectedSort(newVal) {
      console.log(newVal)

      this.posts.sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    }*/
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
        this.isPostLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data
        console.log(response)
      } catch (error) {
        alert(error)
      } finally {
        this.isPostLoading = false
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

.app__btns {
  margin: 15px;
  display: flex;
  justify-content: space-between;
}
</style>
