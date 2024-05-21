<template>
    <div id="app">
      <q-page-container>
        <router-view />
      </q-page-container>
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppFooter from '@/components/AppFooter.vue'
  
  export default {
    name: 'App',
    components: {
      AppFooter
    }
  }
  </script>
  
  <style>
  /* Your global styles here */
  </style>
  