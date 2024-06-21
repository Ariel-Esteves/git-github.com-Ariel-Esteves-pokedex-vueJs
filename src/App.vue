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
  background: rgb(204, 248, 255);
  background: linear-gradient(90deg, rgba(204, 248, 255, 1) 0%, rgba(242, 242, 242, 1) 50%, rgba(187, 243, 255, 1) 100%);
  backdrop-filter: saturate(15%) blur(30px);
}
</style>
