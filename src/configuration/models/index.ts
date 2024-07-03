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
    other: {
      ['official-artwork']: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',

        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
      }
    }
  },
  types: [
    {
      slot: 1,
      type: {
        name: 'electric',
        url: 'https://pokeapi.co/api/v2/type/13/'
      }
    }
  ],
  height: 0,
  id: 0,
  stats: [{ base_stat: 0, effort: 0, stat: { name: 'aa', url: 'aa' } }],
  weight: 0
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

export const pokemonTypes: pokemonTypesInterface = {
  normal: {
    url: '<img width="100" height="100" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/carbon-copy/100/circled.png" alt="circled"/>',
    color: '#A8A8A8'
  },
  fighting: {
    url: '<img width="48" height="48" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/color/48/action.png" alt="action"/>',
    color: '#C02942'
  },
  flying: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios/50/wing.png" alt="wing"/>',
    color: '#A890F0'
  },
  poison: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios/50/poison.png" alt="poison"/>',
    color: '#A040A0'
  },
  ground: {
    url: '<img width="24" height="24" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/material-rounded/24/earth-element.png" alt="earth-element"/>',
    color: '#E0C068'
  },
  rock: {
    url: '<img width="48" height="48" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/emoji/48/rock-emoji.png" alt="rock-emoji"/>',
    color: '#B8A038'
  },
  bug: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios-filled/50/bug.png" alt="bug"/>',
    color: '#A8B820'
  },
  ghost: {
    url: '<img width="30" height="30" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios-glyphs/30/ghost--v1.png" alt="ghost--v1"/>',
    color: '#706890'
  },
  steel: {
    url: '<img width="48" height="48" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/color/48/steel-bars.png" alt="steel-bars"/>',
    color: '#F0D040'
  },
  fire: {
    url: '<img width="16" height="16" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/office/16/fire-element--v1.png" alt="fire-element--v1"/>',
    color: '#F08030'
  },
  water: {
    url: '<img width="48" height="48" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/color/48/water.png" alt="water"/>',
    color: '#4096EE'
  },
  grass: {
    url: '<img width="48" height="48" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/doodle/48/grass.png" alt="grass"/>',
    color: '#78C850'
  },
  electric: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios-filled/50/flash-on.png" alt="flash-on"/>',
    color: '#F8D030'
  },
  psychic: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios/50/fortune-teller--v1.png" alt="fortune-teller--v1"/>',
    color: '#F85888'
  },
  ice: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios-filled/50/winter.png" alt="winter"/>',
    color: '#98D8D8'
  },
  dragon: {
    url: '<img width="64" height="64" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/glyph-neue/64/dragon.png" alt="dragon"/>',
    color: '#FA5858'
  },
  dark: {
    url: '<img width="24" height="24" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/external-android-line-2px-amoghdesign/24/external-dark-multimedia-line-24px-android-line-2px-amoghdesign.png" alt="external-dark-multimedia-line-24px-android-line-2px-amoghdesign"/>',
    color: '#705878'
  },
  fairy: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios-filled/50/unicorn.png" alt="unicorn"/>',
    color: '#EE99AC'
  },
  unknown: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios-filled/50/question-mark.png" alt="question-mark"/>',
    color: '#68A090'
  },
  shadow: {
    url: '<img width="50" height="50" style="height: 60%;width: 60%;margin: 20%;" src="https://img.icons8.com/ios-filled/50/shadow-photography.png" alt="shadow-photography"/>',
    color: '#705878'
  }
}
