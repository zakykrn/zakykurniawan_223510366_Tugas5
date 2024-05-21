<template>
  <q-card class="q-ma-md">
    <q-card-section>
      <div class="text-h6">Shopping Cart</div>
    </q-card-section>
    <q-card-section v-if="cartItems.length === 0">
      Your cart is empty
    </q-card-section>
    <q-card-section v-else>
      <q-item v-for="(item, index) in cartItems" :key="index">
        <q-item-section>{{ item.name }}</q-item-section>
        <q-item-section side>
          <q-btn flat color="warning" @click="removeFromCart(index)">Remove</q-btn>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cartItems: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeFromCart(index) {
      this.$emit('remove', index);
    }
  }
}
</script>

<style scoped>
/* Your styles here */
</style>
