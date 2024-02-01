import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/pages/Main.vue'
import PostPage from '@/pages/PostPage.vue'
import About from '@/pages/About.vue'
import PostIdPage from '@/pages/PostIdPage.vue'
import PostPageWithStoreVue from '@/pages/PostPageWithStore.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/posts',
      component: PostPage
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/posts/:id',
      component: PostIdPage
    },
    {
      path: '/store',
      component: PostPageWithStoreVue
    }
  ]
})

export default router
