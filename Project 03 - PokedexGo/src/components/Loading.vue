<template>
  <div class="loading-container" v-if="currentStatus">
    <img src="../assets/Pokeball_animation.gif" />
  </div>
</template>
<script setup>
const props = defineProps({ currentStatus: Boolean });
</script>
<style>
.loading-container {
  position: fixed;
  background-color: var(--seconday-background-color);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
