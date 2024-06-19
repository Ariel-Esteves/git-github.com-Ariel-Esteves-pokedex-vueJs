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
    <div class="d-flex justify-content-center align-items-center" id="container">
        <div id="characteristics">
            <div>
                <span>
                    ID
                </span>
                <h5>
                    {{ pokemonStore.id }}
                </h5>
            </div>
            <div>
                <span>
                    Height
                </span>
                <h5>
                    {{ pokemonStore.height }}
                </h5>
            </div>
            <div class="d-flex">
                <h3>abilities</h3>
                <span :key="index" v-for="(abilitie, key, index) in pokemonStore.abilities">
                    {{ abilitie.ability.name }}
                </span>
            </div>
            <div>
                <span>
                    Type
                </span>
                <IconsElement :key="index" :color-prop="pokemonTypes[pokemonType.type.name]['color']"
                    :url-image-prop="pokemonTypes[pokemonType.type.name]['url']"
                    v-for="(pokemonType, key, index) in pokemonStore.types" />
            </div>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center">
            <h5 class="">{{ pokemonStore.name }}</h5>
            <div class="card flip" style="width: 38rem;">
                <img :src="spriteUrl.url" alt="">
            </div>
            <div class="d-flex justify-content-center align-items-center">
                <span>Description</span>
                <h5>
                    {{ languageDescription }}
                </h5>
            </div>
        </div>
        <div id="characteristics" class="right">
            <div :key="index" v-for="(stats, index) in pokemonStore.stats" class="d-flex">
                <h5>{{ stats.stat.name }}</h5>
                <span>
                    {{ stats.base_stat }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-title {
    color: white;
    font-weight: 800;
    font-size: 20rem;
}

#container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 85%;
}


.flip {
    backface-visibility: visible !important;
    animation: flip 3s ease-in-out infinite;
    background-color: transparent;
}

.flip::after {
    display: block;
    content: "";
    width: 17.5rem;
    height: 17.5rem;
    transform: translate(55%, -155%);
    z-index: -1;
    border-radius: 100%;
    background-color: aliceblue;
    filter: blur(30px);
}

.flip:hover::after {
    display: block;
    content: "";
    width: 17.5rem;
    height: 17.5rem;
    transform: translate(55%, -150%);
    z-index: -2;
    border-radius: 100%;
    background-color: rgb(247, 247, 245);
    filter: blur(100px);
}

#characteristics {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 6%;
    padding: 10% 0;
    perspective: 180px
}

#characteristics div {
    font-size: large;
    text-align: right;
    justify-content: right;
    display: inline-block;
    transform: rotateY(10deg) rotate(-5deg)
}

.right div {
    font-size: large;
    text-align: right !important;
    justify-content: left !important;
    transform: rotateY(-10deg) rotateX(5deg) !important;
}


#characteristics div span {
    margin: 0 1rem;
    font-size: larger;
    text-align: right;
    justify-content: right;
}

h5 {
    display: inline-block;
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