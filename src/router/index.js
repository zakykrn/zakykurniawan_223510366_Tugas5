import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/Carousel.vue'
import ProductCard from '@/components/ProductCard.vue'
import Footer from '@/components/Footer.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: LandingPage }
]

const router = new VueRouter({
  routes
})

export default {
  name: 'Index',
  components: {
    Navbar,
    Carousel,
    ProductCard,
    Footer
  },
  router
}
