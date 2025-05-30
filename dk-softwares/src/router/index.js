import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Projects from '../views/Project.vue'
import Contact from '../views/Contact.vue'
import NumberConverter from '../components/NumberConverter.vue'
import EasyDns from '../components/EasyDns.vue'


const routes = [
  { path: '/', component: Home },
  //{ path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/projects', component: Projects },
  { path: '/projects/number_converter', component: NumberConverter },
  { path: '/projects/easydns', component: EasyDns },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

export default router