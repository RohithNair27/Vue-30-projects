<template>
  <Modal
    v-if="modalVisible.isVisible"
    :modalDetails="modalVisible"
    @on-close-modal="onCloseModal"
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
        <Button v-for="info in buttonsInformation" :data="info" />
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
import { computed, onMounted, ref, watch } from "vue";
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
import Modal from "./components/Modal.vue";
import FinanceSummaryCard from "./components/FinanceSummaryCard.vue";
import RecentTransactions from "./components/RecentTransactions.vue";

import { IncomeModal, AddInitalIncomeModal } from "./constants/ModalConstants";
import { getAllMoneyDetails } from "./utils/LocalStorage";

const modalVisible = ref({});

const buttonsInformation = [
  { id: 1, placeholder: "Add income" },
  { id: 2, placeholder: "Add expense" },
  { id: 3, placeholder: "Add saving goals" },
];
let financialData = ref({
  currentBalance: 2500.53,
  overAllDetails: [
    {
      id: 1,
      description: "Income",
      value: "4,000.00",
      icon: "pi pi-arrow-up",
    },
    {
      id: 2,
      description: "Expense",
      value: "2,500.00",
      icon: "pi pi-arrow-down",
    },
    {
      id: 3,
      description: "Saving Goals",
      value: "10,000.00",
      icon: "pi pi-chart-bar",
    },
  ],

  transactions: [
    {
      id: 1,
      description: "Grocery Shopping",
      amount: "-$85.50",
      paymentMethod: "Debit Card",
      date: "June 15, 2023",
    },
    {
      id: 2,
      description: "Salary Deposit",
      amount: "+$2,000.00",
      paymentMethod: "Direct Deposit",
      date: "June 1, 2023",
    },
    {
      id: 3,
      description: "Utility Bill",
      amount: "-$120.75",
      paymentMethod: "Online Payment",
      date: "June 10, 2023",
    },
    {
      id: 4,
      description: "Coffee Shop",
      amount: "-$12.50",
      paymentMethod: "Credit Card",
      date: "June 18, 2023",
    },
    {
      id: 5,
      description: "Freelance Payment",
      amount: "+$500.00",
      paymentMethod: "PayPal",
      date: "June 20, 2023",
    },
    {
      id: 6,
      description: "Rent",
      amount: "-$950.00",
      paymentMethod: "Bank Transfer",
      date: "June 5, 2023",
    },
    {
      id: 7,
      description: "Stock Dividend",
      amount: "+$150.00",
      paymentMethod: "Direct Deposit",
      date: "June 25, 2023",
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
function onCloseModal() {
  modalVisible.value = {};
}
console.log(modalVisible.value.isVisible, "this is the value");
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
