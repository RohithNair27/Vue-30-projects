<script>
import PokimonCard from './components/PokimonCard.vue';
</script>

<template>
<header>
  <h1>Pokédex</h1>
</header>
<body>

    <form  class="container form-container">
      <input placeholder="Search Pokémon..."/>
      <button>Catch 'Em All</button>
    </form>
    <PokimonCard/>

</body>
</template>

<style scoped>
.form-container{
  display:flex;
  justify-content: space-between;
}
input{
  width:25%;
  padding:15px;
  border:none;
  border-radius: 10px;
}
button{
  all:unset;
  padding:15px;
  background-color:  var(--button-color);
  border-radius: 10px;
  color:var(--primary-color)
}

</style>
