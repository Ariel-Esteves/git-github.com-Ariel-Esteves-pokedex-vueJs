<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/">Home</RouterLink>
            <RouterLink class="navbar-brand" to="/info">info</RouterLink>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            </div>
        </div>
    </nav>
</template>