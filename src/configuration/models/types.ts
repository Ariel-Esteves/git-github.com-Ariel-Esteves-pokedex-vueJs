//pagination
export interface resultsInterface {
  name: string
  url: string
}

export interface pokePaginationInterface {
  count: number
  next: string
  previous: string
  results: Array<resultsInterface>
}
/// pokemon
export interface abilityInterface {
  name: string
  url: string
}

export interface abilitiesInterface {
  ability: abilityInterface
  is_hidden: boolean
  slot: number
}
////////////////////////////////

//forms

export interface formsInterface {
  name: string
  url: string
}

// sprites

export interface spritesInterface {
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
}

export interface typesPokemon {
  slot: number
  type: {
    name: string
    url: string
  }
}
export interface pokemonInterface {
  abilities: Array<abilitiesInterface>
  forms: Array<formsInterface>
  name: string
  sprites: spritesInterface
  types: typesPokemon
}

export interface apiUrlInterface {
  name: string
  url: string
}

export interface argsPokemonInterface {
  name?: string
  url?: string
}

export interface description {
  description: string
  language: {
    name: string
    url: string
  }
}

export interface pokemonCharacteristicsInterface {
  descriptions: Array<description>
  gene_modulo: number
  highest_stat: {
    name: string
    url: string
  }
  id: number
  possible_values: number[]
}

export interface endpointsApiPokemonInterface {
  pokemon: apiUrlInterface
  characteristics: apiUrlInterface
}

export interface pokemonTypesSubInterface {
  url: string
  color: string
}

export interface pokemonTypesInterface {
  normal: pokemonTypesSubInterface
  fighting: pokemonTypesSubInterface
  flying: pokemonTypesSubInterface
  poison: pokemonTypesSubInterface
  ground: pokemonTypesSubInterface
  rock: pokemonTypesSubInterface
  bug: pokemonTypesSubInterface
  ghost: pokemonTypesSubInterface
  steel: pokemonTypesSubInterface
  fire: pokemonTypesSubInterface
  water: pokemonTypesSubInterface
  grass: pokemonTypesSubInterface
  electric: pokemonTypesSubInterface
  psychic: pokemonTypesSubInterface
  ice: pokemonTypesSubInterface
  dragon: pokemonTypesSubInterface
  dark: pokemonTypesSubInterface
  fairy: pokemonTypesSubInterface
  unknown: pokemonTypesSubInterface
  shadow: pokemonTypesSubInterface
}
