<script setup lang="ts">
import { usePokemonStore } from '@/stores';
const pokemonStore = usePokemonStore()
defineProps({
    colorProp: String,
    urlImageProp: String
})
</script>
<template>
    <div>
        <div :style="'background-color:' + colorProp +
            ';box-shadow: 0 0 20px ' + colorProp" class="icon-type" v-html="urlImageProp">
        </div>
    </div>
</template>

<style scoped>
.icon-type {
    border-radius: 100%;
    height: 30px;
    width: 30px;
    transition: all .2s;
}
</style>
