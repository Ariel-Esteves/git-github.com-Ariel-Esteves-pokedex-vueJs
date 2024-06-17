<script setup lang="ts">

import type { description } from '@/configuration/models/types';
import { usePokemonCharacteristicsStore, usePokemonStore } from '@/stores';
import { computed, onMounted, reactive, ref, type ComputedRef } from 'vue';

const pokemonCharacteristicsStore = usePokemonCharacteristicsStore()
const pokemonStore = usePokemonStore()
const { front_default, back_default } = pokemonStore.sprites
const spritesObj: Object = {};
Object.assign(spritesObj, { front_default, back_default });
const spriteArray = Object.values(spritesObj)
const spriteUrl = reactive({ index: 0, url: '' })



onMounted(() => {
    setInterval(() => {
        if (spriteUrl.index == spriteArray.length - 1) {
            spriteUrl.index = 0
        } else {
            spriteUrl.index += 1
        }
        spriteUrl.url = spriteArray[spriteUrl.index]
    }, 1250)
})

const languageDescription: ComputedRef<string> = computed(() => {
    const description: description = pokemonCharacteristicsStore.descriptions.filter((descriptionElement: description) =>
        descriptionElement.language.name == 'en')[0] // return only one

    return description.description
}) // valid description by language

</script>
<template>
    <div class="d-flex container-fluid">
        <div class="card-body">
            <h5 class="card-title">{{ pokemonStore.name }}</h5>
            <div class="card" style="width: 27rem;">
                <img :src="spriteUrl.url" alt="">
            </div>
            <h6 class="card-subtitle mb-2 text-body-secondary" :key="index"
                v-for="(pokemonType, key, index) in pokemonStore.types">{{
                    pokemonType.type.name }}</h6>
        </div>
        <div :key="index" v-for="(characteristics, key, index) in pokemonCharacteristicsStore.descriptions">
            <div v-if="characteristics.language.name == 'en'" class="d-flex">
                <span>Description</span>
                <h5>
                    {{ languageDescription }}
                </h5>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    border: 0;
}

.container-fluid {
    background-color: skyblue;
}
</style>