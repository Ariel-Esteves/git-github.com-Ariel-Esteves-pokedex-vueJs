<script setup lang="ts">
import { getPokemons, getPokemonsOffset } from '@/configuration/client';
import type { apiUrlInterface, pokemonInterface, pokePaginationInterface } from '@/configuration/models/types';
import { ref, reactive, onMounted, type Ref } from 'vue';
import IconsElement from './IconsElement.vue';
import { pokemonTypes } from '@/configuration/models';

const pokemonListArray: Ref<pokemonInterface[]> = ref([])
const offsetReact = reactive({
    limit: 40,
    offset: 0
})
const loadingRef = ref(true)
interface SortArrayData { id: number, name: string, url: string }

async function orderPokemons(): Promise<void> {
    if (loadingRef.value === false) loadingRef.value = !loadingRef.value
    const response: pokePaginationInterface = await getPokemonsOffset(offsetReact)
    const sortPokemons: SortArrayData[] = response.results.map((pokemonData: apiUrlInterface) => {
        const url = pokemonData.url
        const regex = /\/(\d+)\// // Matches digits between forward slashes
        const match = url.match(regex)

        if (match !== null) return ({
            id: parseInt(match[1]),
            name: pokemonData.name,
            url: pokemonData.url
        }) as SortArrayData;
        return null;
    }).filter((pokemonData) => pokemonData !== null).sort((a, b) => a.id - b.id);
    const pokemonsData = await Promise.all(sortPokemons.map(async (pokemonData) => {
        const dataReceived = await getPokemons(pokemonData)
        return {
            abilities: dataReceived.abilities,
            forms: dataReceived.forms,
            height: dataReceived.height,
            id: dataReceived.id,
            name: dataReceived.name,
            sprites: dataReceived.sprites.other['official-artwork'],
            stats: dataReceived.stats,
            types: dataReceived.types,
            weight: dataReceived.weight,
        }
    })).finally(() => loadingRef.value = !loadingRef.value)
    pokemonListArray.value = [...pokemonListArray.value, ...pokemonsData]

}
function passButton(n: number): void {
    pokemonListArray.value = []
    offsetReact.offset += n
    orderPokemons()
}




onMounted(() => {
    orderPokemons()
})
</script>
<template>
    <div class="p-3">
        <div class="d-flex flex-wrap justify-content-center">
            <div class="d-flex flex-wrap justify-content-center" :v-if="!loadingRef">
                <RouterLink :to="data.name" class="" :key="index" v-for="(data, index) in pokemonListArray">
                    <div class="card" style="width: 12rem;">
                        <div class="card">
                            <img :src="data.sprites.front_default" class="card-img-top" alt="...">
                        </div>
                        <div class="card">
                            <div class="row status-card m-0 p-0 b-0 d-flex justify-content-around">
                                <div class=" card-text p-0 col-8">
                                    <h3 class="card-title fs-6"><span>{{ data.name }}</span></h3>
                                    <h3 class="card-title fs-3 m-0"><span>{{ data.id }}</span></h3>
                                </div>
                                <div class="card-text col-1 p-0 justify-content-end d-flex flex-column">
                                    <h5 :key="index" v-for="(data1, index) in data.types">
                                        <IconsElement :color-prop="pokemonTypes[data1.type.name]['color']"
                                            :url-image-prop="pokemonTypes[data1.type.name]['url']" />

                                    </h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <!--loading-->
            <div v-if="loadingRef" class="d-flex flex-wrap justify-content-center">
                <div class="card loading-card" style="width: 12rem;" :key="index"
                    v-for="(n, index) in Array.from({ length: offsetReact.limit }, (_, index) => index)">
                    <div class="card placeholder-glow h-100 m-1">
                        <img src="..." class="card-img-top placeholder h-100" alt="...">
                    </div>
                    <div class="card">
                        <div class="row status-card m-0 p-0 b-0 d-flex justify-content-around">
                            <div class=" card-text p-0 col-10 placeholder-glow">
                                <span class="card-title fs-6 placeholder col-10"></span>
                                <div class="d-flex">
                                    <span class="card-title fs-3  placeholder col-8 "></span>
                                    <span class="card-title fs-3  placeholder col-4 mx-1"></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <!---->
        </div>
        <div class="container-bt d-flex justify-content-center mx-lg-5 mt-sm-3 px-5">
            <button class="btn btn-danger w-25" @click="() => passButton(-offsetReact.limit)">PREVIOUS</button>
            <div style="content: '';" class="p-4 rounded-circle bg-white mx-3"></div>
            <button class="btn btn-danger w-25" @click="() => passButton(+offsetReact.limit)">NEXT</button>
        </div>
    </div>


</template>

<style scoped>
.loading-card {
    height: 260px;
}
</style>
