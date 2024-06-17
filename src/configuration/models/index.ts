import type {
  endpointsApiPokemonInterface,
  pokePaginationInterface,
  pokemonCharacteristicsInterface,
  pokemonInterface,
  pokemonTypesInterface
} from './types'

export const pokemonModel: pokemonInterface = {
  name: '',
  abilities: [
    {
      ability: { name: '', url: '' },
      is_hidden: false,
      slot: 1
    }
    // You can add more abilities here if needed
  ],
  forms: [
    { name: '', url: '' }
    // You can add more forms here if needed
  ],
  sprites: {
    back_default: '',
    back_female: '', // Set to an empty string if the Pokemon doesn't have a female back sprite
    back_shiny: '',
    back_shiny_female: '',
    front_default: '',
    front_female: '', // Set to an empty string if the Pokemon doesn't have a female front sprite
    front_shiny: '',
    front_shiny_female: ''
  },
  types: {
    slot: 0,
    type: {
      name: '',
      url: ''
    }
  }
}

export const apiUrlConstant: endpointsApiPokemonInterface = {
  pokemon: {
    name: 'pokemon',
    url: 'https://pokeapi.co/api/v2/pokemon'
  },
  characteristics: {
    name: 'characteristics',
    url: 'https://pokeapi.co/api/v2/characteristic' //find by id
  }
}

export const pokemonPagination: pokePaginationInterface = {
  count: 0,
  next: '',
  previous: '',
  results: []
}

export const pokemonCharacteristics: pokemonCharacteristicsInterface = {
  descriptions: [],
  highest_stat: { name: '', url: '' },
  gene_modulo: 0,
  id: 0,
  possible_values: []
}

export const pokemonTypes: pokemonTypesInterface = {
  normal: { url: '', color: '#A8A8A8' }, // Light gray for normal
  fighting: { url: '', color: '#C02942' }, // Red for fighting
  flying: { url: '', color: '#A890F0' }, // Light blue for flying
  poison: { url: '', color: '#A040A0' }, // Purple for poison
  ground: { url: '', color: '#E0C068' }, // Light brown for ground
  rock: { url: '', color: '#B8A038' }, // Brown for rock
  bug: { url: '', color: '#A8B820' }, // Light green for bug
  ghost: { url: '', color: '#706890' }, // Lavender for ghost
  steel: { url: '', color: '#F0D040' }, // Gold for steel
  fire: { url: '', color: '#F08030' }, // Orange for fire
  water: { url: '', color: '#4096EE' }, // Blue for water
  grass: { url: '', color: '#78C850' }, // Green for grass
  electric: { url: '', color: '#F8D030' }, // Yellow for electric
  psychic: { url: '', color: '#F85888' }, // Pink for psychic
  ice: { url: '', color: '#98D8D8' }, // Light blue for ice
  dragon: { url: '', color: '#FA5858' }, // Red for dragon
  dark: { url: '', color: '#705878' }, // Purple for dark
  fairy: { url: '', color: '#EE99AC' }, // Pink for fairy
  unknown: { url: '', color: '#68A090' }, // Teal for unknown
  shadow: { url: '', color: '#705878' } // Purple for shadow (same as dark)
}
