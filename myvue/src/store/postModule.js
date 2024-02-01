import axios from 'axios'

export const postModule = {
  state: () => ({
    page: 1,
    limit: 10,
    totalPage: 0,
    posts: [],
    isPostLoading: false,
    selectedSort: '',
    searchQueue: '',
    sortOptions: [
      { value: 'title', name: 'по названию' },
      { value: 'body', name: 'по содержимому' }
    ]
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) => {
        return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
      })
    },
    sortedAndSearched(state, getters) {
      //debugger
      return getters.sortedPosts.filter((post) => post.title.includes(state.searchQueue))
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setLoading(state, bool) {
      state.isPostLoading = bool
    },
    setPage(state, page) {
      state.page = page
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    },
    setTotalPage(state, totalPage) {
      state.totalPage = totalPage
    },
    setSearchQueue(state, searchQueue) {
      state.searchQueue = searchQueue
    },
    setLimit(state, limit) {
      state.limit = limit
    }
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit('setLoading', true)

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit
          }
        })
        commit('setPosts', response.data)
        commit('setTotalPage', Math.ceil(response.headers['x-total-count'] / state.limit))
        console.log(response)
      } catch (error) {
        alert(error)
      } finally {
        commit('setLoading', false)
      }
    },
    async fetchPostsMore({ state, commit }) {
      try {
        commit('setPage', (state.page += 1))

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit
          }
        })
        commit('setPosts', [...state.posts, ...response.data])
        commit('setTotalPage', Math.ceil(response.headers['x-total-count'] / state.limit))
        console.log(response)
      } catch (error) {
        alert(error)
      } finally {
        //this.isPostLoading = false
      }
    }
  },
  namespaced: true
}
