<script setup lang="ts">

import IconsElement from '@/components/IconsElement.vue';
import { pokemonTypes } from '@/configuration/models';
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
    }, 1335)
})

const languageDescription: ComputedRef<string> = computed(() => {
    const description = pokemonCharacteristicsStore.descriptions.filter((descriptionElement: description) =>
        descriptionElement.language.name == 'en') // return only one
    return description[0]?.description

}) // valid description by language

</script>
<template>
    <div class="d-flex container-fluid">
        <div class="card-body">
            <h5 class="card-title">{{ pokemonStore.name }}</h5>
            <div class="card flip" style="width: 27rem;">
                <img :src="spriteUrl.url" alt="">
            </div>

            <IconsElement :key="index" :color-prop="pokemonTypes[pokemonType.type.name]['color']"
                :url-image-prop="pokemonTypes[pokemonType.type.name]['url']"
                v-for="(pokemonType, key, index) in pokemonStore.types" />
        </div>
        <div class="d-flex">
            <span>Description</span>
            <h5>
                {{ languageDescription }}
            </h5>
        </div>
        <IconsElement />
    </div>
</template>

<style scoped>
.card-body * {
    color: white;
    font-weight: 800;
    font-size: 5rem;
}

.card {
    border: 0;
}

* {
    color: black
}

.flip {
    position: relative;
    backface-visibility: visible !important;
    animation: flip 3s ease-in-out infinite;
    background-color: transparent;
}

@keyframes flip {
    0% {
        transform: rotateY(0);
        animation-timing-function: ease-in;
    }

    50% {
        transform: rotateY(180deg);
        animation-timing-function: ease-in;
    }

    100% {
        transform: rotateY(360deg);
        animation-timing-function: ease-in;
    }
}

img {

    mix-blend-mode: multiply;
}
</style>