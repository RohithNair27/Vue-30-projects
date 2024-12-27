<template>
  <Modal
    v-if="modalVisible.isVisible"
    :modalDetails="modalVisible"
    @on-close-modal="onCloseModal"
    @add-transaction="onAddTransaction"
  />
  <Header />
  <main>
    <section class="total-cost-container">
      <section>
        <span class="total-cost-container-header">Current Balance</span>
        <h1 class="total-cost-container-price">
          ${{ financialData.currentBalance }}
        </h1>
      </section>
      <section class="total-cost-button-container">
        <Button v-for="info in buttonsInformation" :data="info" @onClick="onClickIncome"/>
      </section>
    </section>
    <section class="finance-container">
      <FinanceSummaryCard
        v-for="Details in financialData.overAllDetails"
        :data="Details"
      />
    </section>
    <RecentTransactions :transactions="financialData.transactions" />
  </main>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
import Modal from "./components/Modal.vue";
import FinanceSummaryCard from "./components/FinanceSummaryCard.vue";
import RecentTransactions from "./components/RecentTransactions.vue";

import { IncomeModal, AddInitalIncomeModal,AddExpenseModal,UpdateSavingGoalModal } from "./constants/ModalConstants";
import { getAllMoneyDetails } from "./utils/LocalStorage";

const modalVisible = ref({});

const buttonsInformation = [
  { id: 1, placeholder: "Add income" },
  { id: 2, placeholder: "Add expense" },
  { id: 3, placeholder: "Add saving goals" },
];
let financialData = ref({
  currentBalance: 0,
  overAllDetails: [
    {
      id: 1,
      description: "Income",
      value: 0,
      icon: "pi pi-arrow-up",
    },
    {
      id: 2,
      description: "Expense",
      value: 0,
      icon: "pi pi-arrow-down",
    },
    {
      id: 3,
      description: "Saving Goals",
      value: 0,
      icon: "pi pi-chart-bar",
    },
  ],

  
});
function checkNewUser() {
  let storedDetails = getAllMoneyDetails();
  if (!storedDetails.currentBalance) {
    modalVisible.value = {
      isVisible: true,
      modalInformation: AddInitalIncomeModal,
      
    };
  }
}
console.log(modalVisible.value,'this is the value')
function onClickIncome(typeOfTransaction){
  switch(typeOfTransaction){
    case 'Add income':
    
    modalVisible.value = {
    isVisible: true,
    modalInformation: IncomeModal,
  };
  break;
  case 'Add expense':
  modalVisible.value = {
    isVisible: true,
    modalInformation: AddExpenseModal,
  };
  break;
  case 'Add saving goals':
  modalVisible.value = {
    isVisible: true,
    modalInformation: UpdateSavingGoalModal,
  };
  }
  
}
function onAddTransaction(task){
  switch(task){
    case 'Add income':
   
  }
  
}
function onCloseModal() {
  modalVisible.value = {};
}
onMounted(() => {
  checkNewUser();
});
</script>
<style scoped>
main {
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.total-cost-container {
  margin-top: 20px;
  width: 70%;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
}
.total-cost-container-header {
  font-size: 18px;
}
.total-cost-container-price {
  padding: 0px;
  margin: 0px;
}
.total-cost-button-container {
  display: flex;
}
.finance-container {
  margin-top: 20px;
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
</style>
