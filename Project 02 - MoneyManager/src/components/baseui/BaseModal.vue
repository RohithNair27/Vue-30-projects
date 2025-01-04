<template>
  <div class="modal-body" @click.self="$emit('close')">
    <div class="modal-container" ><slot></slot></div>
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-container {
  width: 50vw;
  height: fit-content;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  display:flex;
  flex-direction: column;
  align-items:center;
}
.modal-container-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
}
.modal-container-header h1 {
  padding: 0px;
  margin: 0px;
}
.modal-input-container {
  height: fit-content;
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px;
  justify-self: center;
}
.modal-input-container select {
  border: 1px black solid;
}
.modal-input-container input {
  all: unset;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px lightgray solid;
}
.modal-input-container label {
  margin-bottom: 5px;
}
.input-container {
  display: flex;
  flex-direction: column;
}
.submit-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.submit-container select {
  /* height: 30px; */
  padding-left: 10px;
  width: 40%;
}
@media only screen and (max-width:800px){
  .modal-container {
    width:70%;
  }
  .submit-container{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center
  }
}
</style>
