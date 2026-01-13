import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Download from '../views/Download.vue'
import DownloadIOS from '../views/DownloadIOS.vue'
import DownloadAndroid from '../views/DownloadAndroid.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    },
    {
      path: '/downloadIOS',
      name: 'downloadIOS',
      component: DownloadIOS
    },
    {
      path: '/downloadANDROID',
      name: 'downloadANDROID',
      component: DownloadAndroid
    }
  ],
})

export default router
