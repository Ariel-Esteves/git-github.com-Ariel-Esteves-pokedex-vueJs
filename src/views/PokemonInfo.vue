<script setup lang="ts">

import IconsElement from '@/components/IconsElement.vue';
import { getPokemons } from '@/configuration/client';
import { pokemonTypes } from '@/configuration/models';
import type { description } from '@/configuration/models/types';
import { usePokemonCharacteristicsStore, usePokemonStore } from '@/stores';
import { computed, onMounted, reactive, ref, type ComputedRef, type Ref } from 'vue';
import { useRoute } from 'vue-router';

const pokemonCharacteristicsStore = usePokemonCharacteristicsStore()
const pokemonStore = usePokemonStore()
const spriteArray: Ref = ref([]);
const spriteUrl = reactive({ index: 0, url: '' })

const route = useRoute();
const pokemonName = computed(() => {
    return route.params.pokemon;
});

onMounted(() => {
    const pokemonData = async () => { return await getPokemons({ name: pokemonName.value }) }
    pokemonData().then((data) => {
        pokemonStore.id = data.id
        pokemonStore.name = data.name
        pokemonStore.height = data.height
        pokemonStore.stats = data.stats
        pokemonStore.types = data.types
        pokemonStore.abilities = data.abilities
        spriteArray.value = [...spriteArray.value, data.sprites.other['official-artwork']]
        pokemonStore.weight = data.weight
    })
    console.log(pokemonData())
})

const languageDescription: ComputedRef<string> = computed(() => {
    const description = pokemonCharacteristicsStore.descriptions.filter((descriptionElement: description) =>
        descriptionElement.language.name == 'en') // return only one
    return description[0]?.description

}) // valid description by language

</script>
<template>
    <div class="d-flex justify-content-center align-items-center left" id="container">

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
                <span>abilities</span>
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
            <h5 class="name-pokemon">{{ pokemonStore.name }}</h5>
            <div class="card flip" style="width: 38rem;">
                {{ console.log(spriteArray) }}
                <img :src="spriteArray[0]['front_default']" alt="">
            </div>
            <div class="d-flex justify-content-center align-items-center description">
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
    max-height: 300px !important;
    backface-visibility: visible !important;
    animation: flip 3s ease-in-out infinite;
    background-color: transparent;

}

.flip::after {
    display: absolute;
    content: "";
    width: 17.5rem;
    height: 17.5rem;
    transform: translate(55%, -155%);
    z-index: -1;
    border-radius: 100%;
    background-color: aliceblue;
    filter: blur(30px);
}

#characteristics {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 6%;
    padding: 10% 0;
    perspective: 180px;
    transform: rotateY(-10deg) rotateX(5deg) !important;
}

#characteristics div {
    font-size: large;
    text-align: right;
    justify-content: right;
    display: inline-block;
    transform: rotateY(12deg) rotate(-5deg)
}

.right div {

    text-align: right !important;
    justify-content: left !important;
    transform: rotateY(-12deg) rotateX(5deg) !important;
}


#characteristics div span {
    margin: 0 1rem;
    font-size: larger;
    text-align: right;
    justify-content: right;
}

h5,
span {
    display: inline-block;
    text-shadow: -1px 4px rgb(0, 0, 0) !important;
    color: #fffddd;
    margin: 0 1rem;
    font-size: larger;
    text-align: right;
    justify-content: right;
    font-size: 1.8rem !important;

}

.characteristics div span {}

.description * {
    position: absolute;
    color: rgb(255, 255, 255) !important;
    text-shadow: -1px 4px rgb(0, 0, 0) !important;
    bottom: 0px !important;
}

* {
    border: 0
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

.name-pokemon {
    font-size: 7rem !important;

}
</style>