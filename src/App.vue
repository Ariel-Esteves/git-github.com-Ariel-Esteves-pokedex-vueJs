<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarSearch from './components/NavbarSearch.vue'
</script>

<template>
  <div id="home">
    <NavbarSearch />
    <RouterView />
  </div>
</template>

<style scoped>
#home {
  height: 100vh;
  width: 100vw;
  background-color: white;
}
</style>
