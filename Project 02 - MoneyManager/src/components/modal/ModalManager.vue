<template>
  <BaseModal v-if="modalDetails.isVisible" @close="$emit('close')">
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
    <EditSavingModal
      v-else-if="modalDetails.modalType === ModalTypeConstant.SAVING_MODAL"
      @edit-expense="$emit('modifyBalance', $event)"
    />
    <DeleteEverythingModal
      v-else-if="modalDetails.modalType === ModalTypeConstant.RESTART_MODAL"
      @delete-everything="$emit('modifyBalance', $event)"
      @close="$emit('close')"
    />
  </BaseModal>
</template>
<script setup>
import BaseModal from "../baseui/BaseModal.vue";
import IncomeModal from "./IncomeModal.vue";
import WelcomeModal from "./WelcomeModal.vue";
import ExpenseModal from "./ExpenseModal.vue";
import EditSavingModal from "./EditSavingModal.vue";
import DeleteEverythingModal from './DeleteEverythingModal.vue'

import { ModalTypeConstant } from "@/constants/ModalConstants";

defineProps(["modalDetails"]);
</script>
<style>

</style>
