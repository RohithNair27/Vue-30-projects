<template>
  <div class="modal-body" @click="$emit('on-close-modal')">
    <form class="modal-container">
      <h1>{{ modalDetails.modalInformation.header }}</h1>
      <div class="modal-input-container">
        <section
          v-for="details in modalDetails.modalInformation.inputFields"
          class="input-container"
        >
          <label>{{ details.label }}</label>
          <input id="amount-input" :placeholder="details.placeholder" />
        </section>
        <section class="submit-container">
          <select id="incomeCategories">
            <option
              v-for="details in modalDetails.modalInformation.dropDown"
              value="details.value"
            >
              {{ details.label }}
            </option>
          </select>
          <Button :data="buttonsInformation" />
        </section>
      </div>
    </form>
  </div>
</template>
<script setup>
import Button from "./Button.vue";
const buttonsInformation = { id: 1, placeholder: "Add " };
defineEmits(["onClickOutside"]);
const props = defineProps({ modalDetails: Object });
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
  height: 50vh;
  position: relative;
  background-color: #fff;
  padding: 20px;
}
.modal-input-container {
  /* border: 1px black solid; */
  height: fit-content;
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-self: center;
}
.modal-input-container input {
  all: unset;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px lightgray solid;
}
.input-container {
  display: flex;
  flex-direction: column;
}
.submit-container {
  border: 1px black solid;
  display: flex;
  justify-content: space-between;
}
</style>
