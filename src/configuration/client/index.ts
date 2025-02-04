import axios from 'axios'
import { apiUrlConstant } from '../models'
import type { apiUrlInterface, argsPokemonInterface, offsetUrlInterface } from '../models/types'

export async function getPokemons(args?: argsPokemonInterface) {
  if (args?.name) {
    return (await axios.get(apiUrlConstant.pokemon.url + '/' + args.name)).data
  } else if (args?.url) {
    return (await axios.get(args.url)).data
  }
  return (await axios.get(apiUrlConstant.pokemon.url)).data
} // get pokemon list with pagination or pokemon specific

export async function getPokemonCharacteristics(id: number) {
  return (await axios.get(apiUrlConstant.characteristics.url + '/' + id)).data
}
interface idType {
  id: number
}
export async function getPokemonsOffset(args: offsetUrlInterface) {
  return (
    await axios.get(
      apiUrlConstant.pokemon.url + '?limit=' + args?.limit + '&offset=' + args?.offset
    )
  ).data
}
