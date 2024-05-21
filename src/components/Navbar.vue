<template>
  <q-header elevated class="bg-warning text-white" height-hint="98">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="="
        @click="toggleLeftDrawer"
      />
      <q-avatar>
        <img src="https://i.pinimg.com/236x/5c/ce/97/5cce976cdbda0e2560091cb55f12fcbb.jpg" alt="Mobile Legends Logo">
      </q-avatar>
      <q-toolbar-title>
        Zaky Diamond Store
      </q-toolbar-title>
      <q-btn
        flat
        dense
        round
        icon="="
        @click="toggleRightDrawer"
      />
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toggleLeftDrawer() {
      this.$emit('toggleLeftDrawer');
    },
    toggleRightDrawer() {
      this.$emit('toggleRightDrawer');
    }
  }
}
</script>

<style scoped>
/* Your styles here */
</style>
