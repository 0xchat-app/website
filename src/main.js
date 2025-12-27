import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faApple, faAndroid, faLinux, faWindows, faAppStoreIos, faGooglePlay, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faDownload, faWandMagicSparkles, faLink, faLock, faUsers, faPhone, faTowerBroadcast, faBolt, faMedal, faKey, faEnvelope, faFileSignature, faTrash, faTag, faInbox, faUserGroup, faCircleCheck, faComment, faBox, faHeart, faClipboardList, faVideo, faShuffle, faShieldHalved, faMobileScreen, faCircleQuestion, faBug, faShield, faCodeBranch, faMagnifyingGlass, faCertificate } from '@fortawesome/free-solid-svg-icons'

// Add icons to library
library.add(faApple, faAndroid, faLinux, faWindows, faAppStoreIos, faPaperPlane, faGooglePlay, faGithub, faDownload, faWandMagicSparkles, faLink, faLock, faUsers, faPhone, faTowerBroadcast, faBolt, faMedal, faKey, faEnvelope, faFileSignature, faTrash, faTag, faInbox, faUserGroup, faCircleCheck, faComment, faBox, faHeart, faClipboardList, faVideo, faShuffle, faShieldHalved, faMobileScreen, faCircleQuestion, faBug, faShield, faCodeBranch, faMagnifyingGlass, faCertificate)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
