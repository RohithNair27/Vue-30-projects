<template>
  <div class="modal-body" @click="$emit('on-close-modal')">
    <form class="modal-container">
      <div class="modal-container-header">

        <h1>{{ modalDetails.modalInformation.header }}</h1>
        <span>{{ modalDetails.modalInformation.headerInfo }}</span>
      </div>
      <div class="modal-input-container">
        <section
          v-for="details in modalDetails.modalInformation.inputFields"
          class="input-container"
        >
          <label>{{ details.label }}</label>
          <input id="amount-input" :placeholder="details.placeholder" v-bind="modalDetails.modalInformation.value"/>
        </section>
        <section class="submit-container" v-if="modalDetails.modalInformation.dropDown">
          <select id="incomeCategories">
            <option
              v-for="details in modalDetails.modalInformation.dropDown"
              value="details.value"
            >
              {{ details.label }}
            </option>
          </select>
          <Button :data="modalDetails.modalInformation.submitButton" @onClick="$emit('add-transaction',$event)"/>
        </section>
      </div>
    </form>
  </div>
</template>
<script setup>
import Button from "./Button.vue";
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
  height: fit-content;
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius:10px;
 
}
.modal-container-header{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:20px;
  text-align:center;
}
.modal-container-header h1{
  padding:0px;
  margin:0px
  
}
.modal-input-container {
  height: fit-content;
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px;
  justify-self: center;
 
}
.modal-input-container input {
  all: unset;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px lightgray solid;
}
.modal-input-container label{
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

}
.submit-container select{
 
  height: 30px;
  width:50%;
  border-radius: 10px;
}

</style>
