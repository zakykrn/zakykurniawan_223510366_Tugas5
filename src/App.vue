<template>
  <q-layout view="hhh lpR lFr">
    <Navbar />
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <q-item clickable v-ripple @click="addToCart(28)">
          <q-item-section>
            <q-item-label>28 Diamonds</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat color="warning">Masukkan Keranjang</q-btn>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="addToCart(58)">
          <q-item-section>
            <q-item-label>58 Diamonds</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat color="warning">Masukkan Keranjang</q-btn>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="addToCart(114)">
          <q-item-section>
            <q-item-label>114 Diamonds</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat color="warning">Masukkan Keranjang</q-btn>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="addToCart(176)">
          <q-item-section>
            <q-item-label>176 Diamonds</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat color="warning">Masukkan Keranjang</q-btn>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="addToCart(259)">
          <q-item-section>
            <q-item-label>259 Diamonds</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat color="warning">Masukkan Keranjang</q-btn>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="addToCart(377)">
          <q-item-section>
            <q-item-label>377 Diamonds</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat color="warning">Masukkan Keranjang</q-btn>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="addToCart(560)">
          <q-item-section>
            <q-item-label>560 Diamonds</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat color="warning">Masukkan Keranjang</q-btn>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="addToCart(749)">
          <q-item-section>
            <q-item-label>749 Diamonds</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat color="warning">Masukkan Keranjang</q-btn>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="addToCart(899)">
          <q-item-section>
            <q-item-label>899 Diamonds</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat color="warning">Masukkan Keranjang</q-btn>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="addToCart(1020)">
          <q-item-section>
            <q-item-label>1020 Diamonds</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat color="warning">Masukkan Keranjang</q-btn>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="addToCart(1890)">
          <q-item-section>
            <q-item-label>1890 Diamonds</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat color="warning">Masukkan Keranjang</q-btn>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="addToCart(2340)">
          <q-item-section>
            <q-item-label>2340 Diamonds</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat color="warning">Masukkan Keranjang</q-btn>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="addToCart(2699)">
          <q-item-section>
            <q-item-label>2699 Diamonds</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat color="warning">Masukkan Keranjang</q-btn>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="addToCart(3100)">
          <q-item-section>
            <q-item-label>3100 Diamonds</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat color="warning">Masukkan Keranjang</q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-card class="q-ma-md">
        <q-card-section>
          <div class="text-h6">Keranjang Belanja</div>
        </q-card-section>
        <q-card-section v-if="cartItems.length === 0">
          Keranjang Anda Kosong
        </q-card-section>
        <q-card-section v-else>
          <q-item v-for="(item, index) in cartItems" :key="index">
            <q-item-section>{{ item.name }}</q-item-section>
            <q-item-section side>
              <q-btn flat color="warning" @click="removeFromCart(index)">Hapus</q-btn>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
    </q-drawer>
    <q-page-container class="q-pb-xl">
      <div class="q-pa-md">
        <Carousel />
      </div>
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Carousel from './components/Carousel.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Carousel,
    Footer
  },
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    const cartItems = ref([])

    const addToCart = (diamonds) => {
      const foundItem = cartItems.value.find(item => item.id === diamonds)
      if (foundItem) {
        foundItem.quantity++
      } else {
        cartItems.value.push({ id: diamonds, name: `${diamonds} Diamonds`, quantity: 1 })
      }
    }

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    const toggleRightDrawer = () => {
      rightDrawerOpen.value = !rightDrawerOpen.value
    }

    const slide = ref('first')

    const removeFromCart = (index) => {
      cartItems.value.splice(index, 1)
    }

    return {
      leftDrawerOpen,
      rightDrawerOpen,
      cartItems,
      addToCart,
      toggleLeftDrawer,
      toggleRightDrawer,
      slide,
      removeFromCart
    }
  }
}
</script>

<style>
/* Your global styles here */
</style>
