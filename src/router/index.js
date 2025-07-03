import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import OfferView from '../views/OfferView.vue'
import FundsView from '../views/FundsView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Strona Główna' }
  },
  {
    path: '/o-nas',
    name: 'about',
    component: AboutView,
    meta: { title: 'O Nas' }
  },
  {
    path: '/oferta',
    name: 'offer',
    component: OfferView,
    meta: { title: 'Oferta' }
  },
  {
    path: '/fundusze-europejskie',
    name: 'funds',
    component: FundsView,
    meta: { title: 'Fundusze Europejskie' }
  },
  {
    path: '/realizacje',
    name: 'projects',
    component: ProjectsView,
    meta: { title: 'Realizacje' }
  },
  {
    path: '/kontakt',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Kontakt' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update page title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} - Biuro Inżynierii Środowiska` : 'Biuro Inżynierii Środowiska'
  next()
})

export default router
