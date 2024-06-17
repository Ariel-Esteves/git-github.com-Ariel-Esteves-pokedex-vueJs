<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/">Home</RouterLink>
            <RouterLink class="navbar-brand" to="/info">info</RouterLink>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>