import Vue from 'vue'
import VueRouter from 'vue-router'
import VActu from '../components/VActu.vue'
import VBillettrie from '../components/VBilletterie.vue'
import VCalendrier from '../components/VCalendrier.vue'
import VClassement from '../components/VClassement.vue'
import VBoutique from '../components/VBoutique.vue'
import VSlide from '../components/VSlide.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'VSlide',
    component: VSlide
  },
  {
    path: '/VActu',
    name: 'Actualités',
    component: VActu
  },
  {
    path: '/VBillettrie',
    name: 'Billetterie',
    component: VBillettrie
  },
  {
    path: '/VCalendrier',
    name: 'Calendrier',
    component: VCalendrier
  },
  {
    path: '/VClassement',
    name: 'Classement',
    component: VClassement
  },
  {
    path: '/VBoutique',
    name: 'Boutique',
    component: VBoutique
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router