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
  other: {
    ['official-artwork']: {
      back_default: string
      front_default: string
    }
  }
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
  types: Array<typesPokemon>
  height: number
  weight: number
  id: number
  stats: Array<{
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
  }>
}

export interface apiUrlInterface {
  name: string
  url: string
}

export interface argsPokemonInterface {
  name?: string
  url?: string
}

export interface offsetUrlInterface {
  limit: number
  offset: number
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
  [key: string]: pokemonTypesSubInterface
}
