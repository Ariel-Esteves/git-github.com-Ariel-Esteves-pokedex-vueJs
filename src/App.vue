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
  height: 100%;
  width: 100vw;
}

body,
div {
  background: linear-gradient(0deg, #9751a0 0%, #ffc6fa 46%, #c88cbd 100%);
  backdrop-filter: saturate(15%) blur(30px);
}
</style>
