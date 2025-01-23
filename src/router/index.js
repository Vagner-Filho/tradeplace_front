import { createRouter, createWebHistory } from 'vue-router'
import DefaultSearchLayout from '../layouts/DefaultSearchLayout.vue'
import DefaultBrandLayout from '../layouts/DefaultBrandLayout.vue'
import Login from '../views/Login.vue'
import NewUser from '../views/NewUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DefaultSearchLayout,
    },
    {
      path: '/login',
      name: 'login',
      component: DefaultBrandLayout,
      children: [
        {
          path: '',
          name: 'loginPage',
          component: Login,
        },
      ],
    },
    {
      path: '/new-user',
      name: 'newUser',
      component: DefaultBrandLayout,
      children: [
        {
          path: '',
          name: 'newUserPage',
          component: NewUser, 
        },
      ],
    },

  ],
})

export default router
