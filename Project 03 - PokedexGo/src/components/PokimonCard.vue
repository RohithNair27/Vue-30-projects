<template>
  <div class="container pokimon-card-container">
    <span>#00{{ pokedexNumber + 1 }}</span>
    <img
      :src="pokemonInfo.image"
      class="uncaught-pokimon"
      v-if="pokemonInfo.status === `CAUGHT`"
    />
    <img
      src="../assets/pokeball-uncaught.svg"
      class="uncaught-pokimon"
      v-else
    />
    <button
      type="button"
      @click="$emit('getPokemonData', pokedexNumber + 1)"
      v-if="pokemonInfo.status !== `CAUGHT`"
    >
      <img src="../assets/pokeball-color.svg" />
    </button>
    <span v-else>{{ pokemonInfo.name }}</span>
  </div>
</template>
<script setup>
const props = defineProps({
  pokemonInfo: Object,
  pokedexNumber: Number,
});
</script>
<style scoped>
.pokimon-card-container {
  all: unset;
  background-color: var(--primary-color);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  all: unset;
}
.uncaught-pokimon {
  width: 80%;
  /* border: 1px black solid; */
}
</style>
