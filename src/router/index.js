import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import PhotoGallery from '../components/PhotoGallery.vue'
import TwitterFeed from '../components/TwitterFeed.vue'
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/PhotoGallery',
    name: 'Photo Gallery',
    component: PhotoGallery
  },
  {
      path: '/TwitterFeed',
      name: 'TwitterFeed',
      component: TwitterFeed
  },
  {
      path: '/:catchAll(.*)',
      redirect: '/'
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router