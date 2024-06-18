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
  background: linear-gradient(120deg, #373737 0%, #efeae4 46%, #badb73 100%);
  backdrop-filter: saturate(15%) blur(30px);
}
</style>
