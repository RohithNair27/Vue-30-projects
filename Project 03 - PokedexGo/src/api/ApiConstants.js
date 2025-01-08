const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const DEFAULT_HEADERS = { "Content-Type": "application/json" };

async function fetchWrapper(url, options) {
  const response = await fetch(url, { ...options, DEFAULT_HEADERS });
  if (!response.ok) {
    return "ERROR";
  }
  return response.json();
}

//apis
export async function getPokemon(id) {
  return await fetchWrapper(`${BASE_URL}/${id}`, { method: "get" });
}
