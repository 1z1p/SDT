import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/new/:id',
    name: 'New',
    component: () => import('../views/NewsFull.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import('../views/Reg.vue')
  },
  {
    path: '/traning',
    name: 'Traning',
    component: () => import('../views/Traning.vue')
  },
  {
    path: '/test/:id',
    name: 'Test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/complete',
    name: 'Complete',
    component: () => import('../views/Complete.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
