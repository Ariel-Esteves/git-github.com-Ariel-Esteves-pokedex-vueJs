<script setup lang="ts">

import IconsElement from '@/components/IconsElement.vue';
import { getPokemons } from '@/configuration/client';
import { pokemonTypes } from '@/configuration/models';
import { usePokemonCharacteristicsStore, usePokemonStore } from '@/stores';
import { computed, onMounted, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';

const pokemonCharacteristicsStore = usePokemonCharacteristicsStore()
const pokemonStore = usePokemonStore()
const spriteRef: Ref = ref({});

const route = useRoute();
const pokemonName = computed(() => {
    return route.params.pokemon.toString();
});

onMounted(() => {
    const pokemonData = async () => {
        const data = await getPokemons({ name: pokemonName.value });
        console.log(data.sprites.other['official-artwork'])
        pokemonStore.id = data.id;
        pokemonStore.name = data.name;
        pokemonStore.height = data.height;
        pokemonStore.stats = data.stats;
        pokemonStore.types = data.types;
        pokemonStore.abilities = data.abilities;
        spriteRef.value = { ...spriteRef.value, ...data.sprites.other['official-artwork'] };
        pokemonStore.weight = data.weight;

    };
    pokemonData();
})

const languageDescription = computed(() => {
    const description = pokemonCharacteristicsStore.descriptions.find((descriptionElement) => descriptionElement.language.name === 'en');
    return description?.description || '';
});

</script>
<template>
    <div class="d-flex justify-content-between align-items-center mh-100" id="container">
        <h5 class="name-pokemon">{{ pokemonStore.name }}</h5>
        <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="card" style="width: 40rem;">
                <img :src="spriteRef['front_default']" alt="">
            </div>
            <div class="d-flex justify-content-center align-items-center description">
                <h5 class="p-2 bg-warning radius rounded-3">{{ languageDescription }}</h5>
            </div>
        </div>
        <div id="characteristics" class="p-4 bg-white rounded-4 shadow">
            <div class="d-flex justify-content-between align-items-center">
                <span>ID:</span>
                <h5>{{ pokemonStore.id }}</h5>
            </div>
            <div class="my-3 d-flex justify-content-between align-items-center">
                <span>Height:</span>
                <h5>{{ pokemonStore.height }}</h5>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <span>Type:</span>
                <IconsElement :key="index" :color-prop="pokemonTypes[pokemonType.type.name]['color']"
                    :url-image-prop="pokemonTypes[pokemonType.type.name]['url']"
                    v-for="(pokemonType, index) in pokemonStore.types" class="d-inline-block" />
            </div>
        </div>
        <div id="characteristics" class="p-4 bg-white rounded-4 mx-5">
            <div class="my-3 d-flex justify-content-between align-items-center">
                <span>Skills:</span>
                <span class="mx-1 bg-info rounded" :key="index" v-for="(ability, index) in pokemonStore.abilities">
                    {{ ability.ability.name }}
                </span>
            </div>
            <div :key="index" v-for="(stat, index) in pokemonStore.stats"
                class="my-3 d-flex justify-content-between align-items-center">
                <span>{{ stat.stat.name }}:</span>
                <h5>{{ stat.base_stat }}</h5>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    background-color: transparent !important;
    border: none
}

h5 {
    display: inline-block;
    margin: 0 0.4rem;
}

.name-pokemon {
    writing-mode: vertical-lr;
    text-orientation: upright;
    font-size: 4rem;
    color: whitesmoke;
    margin: 0 1rem;
    text-shadow: 2px 8px 4px #02646f;
    max-height: 100%;
}
</style>