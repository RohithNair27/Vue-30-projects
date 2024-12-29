<template>
  <div class="modal-body">
    <div class="modal-container"><slot></slot></div>
  </div>
</template>
<script setup>
defineEmits(["onClickOutside"]);
const props = defineProps({ Modal: Object });
</script>
<style>
.modal-body {
  z-index: 1;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-container {
  width: 50vw;
  height: fit-content;
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>
