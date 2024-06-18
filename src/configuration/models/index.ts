import type {
  endpointsApiPokemonInterface,
  pokePaginationInterface,
  pokemonCharacteristicsInterface,
  pokemonInterface,
  pokemonTypesInterface
} from './types'

export const pokemonModel: pokemonInterface = {
  name: 'pikachu',
  abilities: [
    {
      ability: {
        name: 'static',
        url: 'https://pokeapi.co/api/v2/ability/9/'
      },
      is_hidden: false,
      slot: 1
    },
    {
      ability: {
        name: 'lightning-rod',
        url: 'https://pokeapi.co/api/v2/ability/31/'
      },
      is_hidden: true,
      slot: 3
    }
    // You can add more abilities here if needed
  ],
  forms: [
    // You can add more forms here if needed
    {
      name: 'pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon-form/25/'
    }
  ],
  sprites: {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
    back_female: '', // Set to an empty string if the Pokemon doesn't have a female back sprite
    back_shiny: '',
    back_shiny_female: '',
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    front_female: '', // Set to an empty string if the Pokemon doesn't have a female front sprite
    front_shiny: '',
    front_shiny_female: ''
  },
  types: [
    {
      slot: 1,
      type: {
        name: 'electric',
        url: 'https://pokeapi.co/api/v2/type/13/'
      }
    }
  ]
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
  descriptions: [
    {
      description: 'Likes to relax',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/'
      }
    }
  ],
  highest_stat: { name: '', url: '' },
  gene_modulo: 0,
  id: 0,
  possible_values: []
}

export const pokemonCollection: { pokemonList: Array<pokemonInterface> } = { pokemonList: [] }

export const pokemonTypes: pokemonTypesInterface = {
  normal: {
    url: '<img width="100" height="100" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/carbon-copy/100/circled.png" alt="circled"/>',
    color: '#A8A8A8'
  }, // Light gray for normal
  fighting: {
    url: '<img width="48" height="48" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/color/48/action.png" alt="action"/>',
    color: '#C02942'
  }, // Red for fighting
  flying: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios/50/wing.png" alt="wing"/>',
    color: '#A890F0'
  }, // Light blue for flying
  poison: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios/50/poison.png" alt="poison"/>',
    color: '#A040A0'
  }, // Purple for poison
  ground: {
    url: '<img width="24" height="24" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/material-rounded/24/earth-element.png" alt="earth-element"/>',
    color: '#E0C068'
  }, // Light brown for ground
  rock: {
    url: '<img width="48" height="48" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/emoji/48/rock-emoji.png" alt="rock-emoji"/>',
    color: '#B8A038'
  }, // Brown for rock
  bug: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios-filled/50/bug.png" alt="bug"/>',
    color: '#A8B820'
  }, // Light green for bug
  ghost: {
    url: '<img width="30" height="30" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios-glyphs/30/ghost--v1.png" alt="ghost--v1"/>',
    color: '#706890'
  }, // Lavender for ghost
  steel: {
    url: '<img width="48" height="48" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/color/48/steel-bars.png" alt="steel-bars"/>',
    color: '#F0D040'
  }, // Gold for steel
  fire: {
    url: '<img width="16" height="16" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/office/16/fire-element--v1.png" alt="fire-element--v1"/>',
    color: '#F08030'
  }, // Orange for fire
  water: {
    url: '<img width="48" height="48" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/color/48/water.png" alt="water"/>',
    color: '#4096EE'
  }, // Blue for water
  grass: {
    url: '<img width="48" height="48" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/doodle/48/grass.png" alt="grass"/>',
    color: '#78C850'
  }, // Green for grass
  electric: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios-filled/50/flash-on.png" alt="flash-on"/>',
    color: '#F8D030'
  }, // Yellow for electric
  psychic: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios/50/fortune-teller--v1.png" alt="fortune-teller--v1"/>',
    color: '#F85888'
  }, // Pink for psychic
  ice: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios-filled/50/winter.png" alt="winter"/>',
    color: '#98D8D8'
  }, // Light blue for ice
  dragon: {
    url: '<img width="64" height="64" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/glyph-neue/64/dragon.png" alt="dragon"/>',
    color: '#FA5858'
  }, // Red for dragon
  dark: {
    url: '<img width="24" height="24" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/external-android-line-2px-amoghdesign/24/external-dark-multimedia-line-24px-android-line-2px-amoghdesign.png" alt="external-dark-multimedia-line-24px-android-line-2px-amoghdesign"/>',
    color: '#705878'
  }, // Purple for dark
  fairy: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios-filled/50/unicorn.png" alt="unicorn"/>',
    color: '#EE99AC'
  }, // Pink for fairy
  unknown: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios-filled/50/question-mark.png" alt="question-mark"/>',
    color: '#68A090'
  }, // Teal for unknown
  shadow: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios-filled/50/shadow-photography.png" alt="shadow-photography"/>',
    color: '#705878'
  } // Purple for shadow (same as dark)
}
