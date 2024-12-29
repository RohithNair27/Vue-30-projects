<template>
  <BaseModal v-if="modalDetails.isVisible">
    <WelcomeModal
      v-if="modalDetails.modalType === ModalTypeConstant.WELCOME_MODAL"
      @closeModal="$emit('openAddIncomeModal')"
    />
    <IncomeModal
      v-else-if="modalDetails.modalType === ModalTypeConstant.INCOME_MODAL"
      @add-income="$emit('modifyBalance', $event)"
    />
    <ExpenseModal
      v-else-if="modalDetails.modalType === ModalTypeConstant.EXPENSE_MODAL"
      @add-expense="$emit('modifyBalance', $event)"
    />
  </BaseModal>
</template>
<script setup>
import BaseModal from "../baseui/BaseModal.vue";
import IncomeModal from "./IncomeModal.vue";
import WelcomeModal from "./WelcomeModal.vue";
import ExpenseModal from "./ExpenseModal.vue";

import { ModalTypeConstant } from "@/constants/ModalConstants";

defineProps(["modalDetails"]);
</script>
<style>
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
</style>
