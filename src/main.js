import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/plugins/router'
import '@/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

library.add(faChevronRight, faChevronLeft, faFacebook, faTiktok, faInstagram)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
