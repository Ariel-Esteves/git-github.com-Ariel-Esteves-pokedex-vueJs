import { defineStore } from 'pinia'
import {
  pokemonCharacteristics,
  pokemonCollection,
  pokemonModel,
  pokemonPagination
} from '../configuration/models'

export const usePokemonStore = defineStore('pokemon', {
  state: () => pokemonModel,
  actions: {}
})

export const usePokemonPaginationStore = defineStore('pokemonPagination', {
  state: () => pokemonPagination,
  actions: {}
})

export const usePokemonCharacteristicsStore = defineStore('pokemonCharacteristics', {
  state: () => pokemonCharacteristics,
  actions: {}
})

export const usePokemonCollection = defineStore('pokemonCollection', {
  state: () => pokemonCollection
})
