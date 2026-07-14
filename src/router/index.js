import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import UserList from '../views/UserList.vue'
import UserDetail from '../views/UserDetail.vue'
import CreateUser from '../views/CreateUser.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/users',
    component: UserList
  },
  {
    path: '/users/:id',
    component: UserDetail
  },
  {
    path: '/create',
    component: CreateUser
  },
  {
    path: '/about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router