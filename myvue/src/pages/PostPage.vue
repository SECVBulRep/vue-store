
<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input v-focus placeholder="введите строку для посика" v-model="searchQueue"></my-input>
    <div class="app__btns">
      <my-button @click="showDialog" style="">Добавить пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="CreatePost"></post-form>
    </my-dialog>
    <post-list v-if="!isPostLoading" :posts="sortedAndSearched" @remove="removePost"></post-list>
    <div v-else>Loading ...</div>
    <div v-intersection="fetchPostsMore" class="observer"></div>
    <!--div class="page__wrapper">
        <div
          v-for="pageNumber in totalPage"
          :key="pageNumber"
          class="page"
          :class="{
            current_page: page === pageNumber
          }"
          @click="changePage(pageNumber)"
        >
          {{ pageNumber }}
        </div>
      </div-->
  </div>
</template>
  
  
  <script>
import postForm from '@/components/postForm.vue'
import postList from '@/components/postList.vue'
import MyButton from '@/components/ui/myButton.vue'
import MyDialog from '@/components/ui/myDialog.vue'
import axios from 'axios'
import MySelect from '@/components/ui/mySelect.vue'
import MyInput from '@/components/ui/myInput.vue'

export default {
  components: {
    postForm,
    postList,
    MyDialog,
    MyButton,
    MySelect,
    MyInput
  },

  data() {
    return {
      page: 1,
      limit: 10,
      totalPage: 0,
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      searchQueue: '',
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
    },
    sortedAndSearched() {
      return this.sortedPosts.filter((post) => post.title.includes(this.searchQueue))
    }
  },

  watch: {
    /*selectedSort(newVal) {
        console.log(newVal)
  
        this.posts.sort((post1, post2) => {
          return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
        })
      }*/
    /*page() {
        this.fetchPosts()
      }*/
  },

  methods: {
    changePage(page) {
      this.page = page
    },
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
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.posts = response.data
        this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
        console.log(response)
      } catch (error) {
        alert(error)
      } finally {
        this.isPostLoading = false
      }
    },
    async fetchPostsMore() {
      try {
        this.page += 1
        // this.isPostLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.posts = [...this.posts, ...response.data]
        this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
        console.log(response)
      } catch (error) {
        alert(error)
      } finally {
        //this.isPostLoading = false
      }
    }
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>
  
  
  <style>
.app__btns {
  margin: 15px;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current_page {
  border: 2px solid green;
}

.observer {
  height: 30px;
  background-color: blue;
}
</style>
  