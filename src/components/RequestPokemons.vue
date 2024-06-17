<script setup lang="ts">
import { getPokemonCharacteristics, getPokemons } from '@/configuration/client';
import type { pokemonCharacteristicsInterface, pokemonInterface } from '@/configuration/models/types';
import { usePokemonStore, usePokemonPaginationStore, usePokemonCharacteristicsStore } from '@/stores';
import { onMounted, reactive } from 'vue';

const pokemonStore = usePokemonStore()
const pokemonPaginationStore = usePokemonPaginationStore();
const pokemonCharacteristicsStore = usePokemonCharacteristicsStore();
const pokemonCollection: Array<pokemonInterface> = reactive([])

const listPokemons = async () => {
    pokemonPaginationStore.results.map(async (element) => {
        pokemonCollection.push(await getPokemons({ name: element.name }));
    })
}
const pokemons = async () => {
    pokemonPaginationStore.$patch(
        await getPokemons()
    )
    //get 60
    listPokemons()
    pokemonPaginationStore.$patch(
        await getPokemons()
    )
    listPokemons()
    pokemonPaginationStore.$patch(
        await getPokemons()
    )
    listPokemons();

}

const SelectPokemon = async (args: { data: pokemonInterface, idPokemon: number }) => {
    pokemonStore.$patch(args.data)
    //const characteristics: PokemonCharacteristicsInterface = await getPokemonCharacteristics(args.idPokemon)
    pokemonCharacteristicsStore.$patch(await getPokemonCharacteristics(args.idPokemon))
    //characteristics.descriptions.forEach(element => pokemonCharacteristicsStore.descriptions.push(element))

}

onMounted(() => { pokemons() })


</script>
<template>
    <div id="cards-container">
        <RouterLink to="/info" :key="index" v-for="(data, index) in pokemonCollection">
            <div class="card" style="width: 10rem;" :onclick="() => SelectPokemon({ data: data, idPokemon: index })">
                <img :src="data.sprites.front_default" class="card-img-top" alt="...">
                <div class="row">
                    <div class="card-body pt-0 col">
                        <h3 class="card-title fs-5"><span>{{ data.name }}</span></h3>
                        <h3 class="card-title fs-3"><span>{{ index }}</span></h3>
                    </div>
                    <div class="card-text col">
                        <h5 :key="index" v-for="(data1, key, index) in data.types">
                            {{ data1.type.name }}
                        </h5>
                    </div>
                </div>
            </div>
        </RouterLink>
        <div>
            <button @click="() => pokemons()">NEXT</button>
        </div>
    </div>

</template>

<style scoped>
#cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.4%;
    background-color: aqua;
    padding: 2%;
    gap: 0.8rem;
}
</style>
