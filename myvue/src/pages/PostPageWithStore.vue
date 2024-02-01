<template>
  <div>
    <h1>{{ $store.state.post.limit }}</h1>
    <h1>Страница с постами</h1>
    <my-input
      v-focus
      placeholder="введите строку для посика"
      :model-value="searchQueue"
      @update:model-value="setSearchQueue"
    ></my-input>
    <div class="app__btns">
      <my-button @click="showDialog" style="">Добавить пост</my-button>
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      ></my-select>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="CreatePost"></post-form>
    </my-dialog>
    <post-list v-if="!isPostLoading" :posts="sortedAndSearched" @remove="removePost"></post-list>
    <div v-else>Loading ...</div>
    <div v-intersection="fetchPostsMore" class="observer"></div>
  </div>
</template>

<script>
import postForm from '@/components/postForm.vue'
import postList from '@/components/postList.vue'
import MyButton from '@/components/ui/myButton.vue'
import MyDialog from '@/components/ui/myDialog.vue'
import MySelect from '@/components/ui/mySelect.vue'
import MyInput from '@/components/ui/myInput.vue'

import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

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
      dialogVisible: false
    }
  },

  computed: {
    ...mapState({
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPage: (state) => state.post.totalPage,
      posts: (state) => state.post.posts,
      isPostLoading: (state) => state.post.isPostLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQueue: (state) => state.post.searchQueue,
      sortOptions: (state) => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearched: 'post/sortedAndSearched'
    })
  },

  watch: {},

  methods: {
    ...mapActions({
      fetchPostsMore: 'post/fetchPostsMore',
      fetchPosts: 'post/fetchPosts'
    }),
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQueue: 'post/setSearchQueue',
      setSelectedSort: 'post/setSelectedSort'
    }),
    CreatePost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
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
