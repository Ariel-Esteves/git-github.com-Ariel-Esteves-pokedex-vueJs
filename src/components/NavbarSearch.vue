<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <nav class="navbar p-0 bg-body-tertiary" style="max-height: 100%;">
        <div>
            <RouterLink class="navbar-brand" to="/">Home</RouterLink>
            <RouterLink class="navbar-brand" to="/info">info</RouterLink>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            </div>
        </div>
    </nav>
</template>