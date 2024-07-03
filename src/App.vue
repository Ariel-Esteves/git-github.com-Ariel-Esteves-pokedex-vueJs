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

<style>
body {
  background: radial-gradient(rgb(222, 229, 230), rgba(187, 243, 255, 1));
}
</style>
