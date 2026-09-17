import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Download from '../views/Download.vue'
import DownloadIOS from '../views/DownloadIOS.vue'
import DownloadAndroid from '../views/DownloadAndroid.vue'
import XInvite from '../views/XInvite.vue'
import LiteInvite from '../views/LiteInvite.vue'

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
    },
    {
      path: '/x/invite',
      name: 'xInvite',
      component: XInvite
    },
    {
      // Links shipped by older app builds, which carry only a circle id and
      // cannot be resolved to a circle. Explain that instead of dropping the
      // visitor on the home page.
      path: '/lite/invite',
      name: 'liteInvite',
      component: LiteInvite
    }
  ],
})

export default router
