<script setup lang="ts">
import { getPokemonCharacteristics, getPokemons } from '@/configuration/client';
import type { pokemonInterface } from '@/configuration/models/types';
import { usePokemonStore, usePokemonPaginationStore, usePokemonCharacteristicsStore, usePokemonCollection } from '@/stores';
import { onMounted } from 'vue';
import IconsElement from './IconsElement.vue';
import { pokemonPagination, pokemonTypes } from '@/configuration/models';

const pokemonStore = usePokemonStore()
const pokemonPaginationStore = usePokemonPaginationStore();
const pokemonCharacteristicsStore = usePokemonCharacteristicsStore();
const pokemonCollection = usePokemonCollection();

window.onscroll = function (ev) {
    const scrolledTo = window.scrollY + window.innerHeight
    const isReachBottom = document.body.scrollHeight <= scrolledTo

    if (isReachBottom) if (isReachBottom) pokemons();
};

const listPokemons = async () => {
    pokemonPaginationStore.results.map(async (element) => {
        pokemonCollection.pokemonList.push(await getPokemons({ name: element.name }));
    })
}
const pokemons = async () => {
    if (pokemonPagination.results.length < 1) {
        pokemonPaginationStore.$patch(
            await getPokemons()
        )
    } else {
        pokemonPaginationStore.$patch(
            await getPokemons({ url: pokemonPagination.next })
        )
    }

    //get 60
    listPokemons()
    pokemonPaginationStore.$patch(
        await getPokemons({ url: pokemonPaginationStore.next })
    )
    listPokemons()
    pokemonPaginationStore.$patch(
        await getPokemons({ url: pokemonPaginationStore.next })
    )
    listPokemons();

}

const SelectPokemon = async (args: { data: pokemonInterface, idPokemon: number }) => {
    pokemonStore.$patch(args.data)
    pokemonCharacteristicsStore.$patch(await getPokemonCharacteristics(args.idPokemon))

}

onMounted(() => { pokemons() })


</script>
<template>
    <div id="cards-container">
        <RouterLink to="/info" :key="index" v-for="(data, index) in pokemonCollection.pokemonList">
            <div class="card" style="width: 12rem;" :onclick="() => SelectPokemon({ data: data, idPokemon: index })">
                <img :src="data.sprites.front_default" class="card-img-top" alt="...">
                <div class="row status-card m-0 p-0 b-0 d-flex justify-content-around">
                    <div class=" card-text p-0 col-8">
                        <h3 class="card-title fs-5"><span>{{ data.name }}</span></h3>
                        <h3 class="card-title fs-3"><span>{{ index }}</span></h3>
                    </div>
                    <div class="card-text p-0 col-2">
                        <h5 :key="index" v-for="(data1, key, index) in data.types">
                            <IconsElement :color-prop="pokemonTypes[data1.type.name]['color']"
                                :url-image-prop="pokemonTypes[data1.type.name]['url']" />
                        </h5>
                    </div>
                </div>
            </div>
        </RouterLink>
        <div class="container-bt">
            <button @click="() => pokemons()">NEXT</button>
        </div>
    </div>

</template>

<style scoped>
* {
    color: rgb(9, 9, 9);
}

#cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0%;
    margin: 0;
    height: 100%;
}

.container-bt {
    height: auto;
    width: 100%;
    margin: auto;
}

.card {
    background: rgba(251, 234, 255, 0.8);
    backdrop-filter: saturate(15%) blur(30px);
    border: solid 4px whitesmoke;
}

.card:hover {
    position: relative;
    background: rgba(143, 132, 143, 0.8);
    backdrop-filter: saturate(15%) blur(30px);
    box-shadow: 10px 20px 20px 10px rgb(125, 206, 247);
    border: 2px solid;
}

.card:hover img {
    position: absolute;
    top: 25px;
    right: -28px;
    border-radius: 100%;
    z-index: 1;
    width: 250px;
    animation: pulse 0.8s infinite ease-in-out alternate;
}

.card::before {
    content: "";
    position: absolute;
    top: 20px;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #ffd5fe 0%, rgb(223, 187, 242) 10%, #ffd5fe 100%);
    filter: blur(30px);
    opacity: 10%;
    z-index: -1;
    transform: scale(0.9);
    border: 1px white;
}

.card .status-card:hover {
    animation: gelatine 2s infinite
}

.card:after {
    display: block;
    position: absolute;
    transform: translate(25%, 25%);
    z-index: -1;
    content: '';
    width: 8rem;
    height: 8rem;
    background-color: rgb(252, 242, 253);
    filter: blur(15px);

}

@keyframes gelatine {

    from,
    to {
        transform: scale(1, 1);
    }

    25% {
        transform: scale(0.9, 1.1);
    }

    50% {
        transform: scale(1.1, 0.9);
    }

    75% {
        transform: scale(0.95, 1.05);
    }
}

@keyframes pulse {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.2);
    }
}
</style>
