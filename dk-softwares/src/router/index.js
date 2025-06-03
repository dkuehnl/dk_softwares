import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Projects from '../views/Project.vue'
import Contact from '../views/Contact.vue'
import NumberConverter from '../components/NumberConverter.vue'
import EasyDns from '../components/EasyDns.vue'
import LetterShark from '../components/LetterShark.vue'
import SipRta from '../components/SipRta.vue'
import SipProxy from '../components/SipProxy.vue'
import InvoiceManager from '../components/InvoiceManager.vue'
import Impressum from '../views/Impressum.vue'
import About from '../views/About.vue'
import FAQ from '../views/FAQ.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/projects', component: Projects },
  { path: '/projects/number_converter', component: NumberConverter },
  { path: '/projects/easy_dns', component: EasyDns },
  { path: '/projects/letter_shark', component: LetterShark },
  { path: '/projects/sip_rta', component: SipRta },
  { path: '/projects/sip_proxy', component: SipProxy },
  { path: '/projects/invoice_manager', component: InvoiceManager },
  { path: '/impressum', component: Impressum },
  { path: '/about', component: About }, 
  { path: '/faq', component: FAQ },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
    scrollBehavior(to, from, savedPosition) {
    // Ignoriere savedPosition, damit immer oben gestartet wird
    return { top: 0 }
  },
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

export default router