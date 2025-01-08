<template>
  <body>
    <Loading :currentStatus="isLoading"></Loading>
    <div class="app-container">
      <header>
        <h1>Pokédex</h1>
      </header>
      <div class="form-container" @submit.prevent="NewPokedex">
        <input placeholder="Search Pokémon..." v-model="input" />
        <select v-model="status">
          <option value="ALL">All</option>
          <option value="CAUGHT">Caught</option>
        </select>
      </div>
      <div class="pokidex-container">
        <PokimonCard
          v-for="(pokemon, index) in filterdPokemonData"
          :pokemonInfo="pokemon"
          :pokedexNumber="index"
          :key="index"
          @getPokemonData="getPokemonData"
        />
      </div>
    </div>
  </body>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";

import PokimonCard from "./components/PokimonCard.vue";
import Loading from "./components/Loading.vue";

import { getPokemon } from "./api/ApiConstants";

let PokemonData = ref([]);
let input = ref("");
let status = ref("ALL");
let isLoading = ref(false);
async function NewPokedex() {
  isLoading.value = true;
  const COUNT = 150;
  for (let i = 0; i <= COUNT; i++) {
    let pokemon = {
      id: i + 1,
      name: "",
      image: null,
    };
    PokemonData.value.push(pokemon);
    isLoading.value = false;
  }
}
const filterdPokemonData = computed(() =>
  PokemonData.value.filter((element) => {
    if (status.value === "ALL") {
      return element.name.includes(input.value);
    } else {
      return element.name.includes(input.value) && element.status === "CAUGHT";
    }
  })
);
async function getPokemonData(id) {
  isLoading.value = true;
  try {
    let data = await getPokemon(id);
    PokemonData.value[id - 1] = {
      id,
      status: "CAUGHT",
      name: data.species.name,
      image: data.sprites.front_default,
    };

    isLoading.value = true;
  } catch (error) {
    console.log(error, "wrong");
  }
  isLoading.value = false;
}

onMounted(() => {
  NewPokedex();
});
</script>
<style scoped>
.app-container {
  /* border: 1px black solid; */
  padding: 30px;
}
header h1 {
  margin: 0;
  padding: 20px;
}
.form-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
input {
  width: 35%;
  padding: 10px;
  border: none;
  border-radius: 10px;
}
button {
  all: unset;
  padding: 10px;
  background-color: var(--button-color);
  border-radius: 10px;
  color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
}
button img {
  margin-right: 20px;
}
.pokidex-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  gap: 20px;
}
@media (max-width: 1000px) {
  .pokidex-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 800px) {
  .pokidex-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 650px) {
  .pokidex-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 500px) {
  .pokidex-container {
    grid-template-columns: 1fr;
  }
}
</style>
