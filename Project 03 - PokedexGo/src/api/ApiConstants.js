const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export function getPokemon(id) {
  return `${BASE_URL}/${id}`;
}
