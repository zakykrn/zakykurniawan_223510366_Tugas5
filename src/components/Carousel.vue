<template>
  <q-carousel
    arrows
    animated
    v-model="slide"
    height="600px"
    prev-icon="<"
    next-icon=">"
  >
    <q-carousel-slide name="first" img-src="https://i.pinimg.com/736x/77/77/34/777734812333715dfad684f50dfa897f.jpg">
      <div class="absolute-bottom custom-caption">
        <div class="text-h2">Special Discount!</div>
        <div class="text-subtitle1">Get up to 20% discount on selected items</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="second" img-src="https://i.pinimg.com/564x/41/81/e1/4181e1efbc759a701da7aaff36ddf440.jpg">
      <div class="absolute-bottom custom-caption">
        <div class="text-h2">Penawaran Terbatas!</div>
        <div class="text-subtitle1">Dapatkan hadiah gratis setiap pembelian</div>
      </div>
    </q-carousel-slide>
    <!-- Slide Ketiga -->
    <q-carousel-slide name="third" img-src="https://i.pinimg.com/564x/0c/7f/ad/0c7fade7169c3df1a779b88ea8cda47b.jpg">
      <div class="absolute-bottom custom-caption">
        <div class="text-h2">Diamonds of the Month!</div>
        <div class="text-subtitle1">Dapatkan diamonds dengan harga spesial bulan ini</div>
      </div>
    </q-carousel-slide>
    <!-- Slide Keempat -->
    <q-carousel-slide name="fourth" img-src="https://i.pinimg.com/736x/ca/74/1b/ca741b071629af3dac1a766a724de125.jpg">
      <div class="absolute-bottom custom-caption">
        <div class="text-h2">Flash Sale!</div>
        <div class="text-subtitle1">Diskon besar-besaran hanya hari ini!</div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      slide: 'first' // Set initial slide here
    }
  }
}
</script>

<style scoped>
/* Your styles here */
</style>
