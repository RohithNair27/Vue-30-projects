<template>
  <Header />
  <main>
    <section class="total-cost-container">
      <span class="total-cost-container-header">Current Balance</span>
      <h1 class="total-cost-container-price">$2,500.53</h1>
    </section>
    <section class="finance-container">
      <FinanceSummaryCard v-for="Details in CardDetails" :data="Details" />
    </section>
    <RecentTransactions />
  </main>
</template>
<script setup>
import Header from "./components/Header.vue";
import FinanceSummaryCard from "./components/FinanceSummaryCard.vue";
import RecentTransactions from "./components/RecentTransactions.vue";
import { CardDetails } from "./constants/cardDetails";
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
  flex-direction: column;
  padding: 20px;
}
.total-cost-container-header {
  font-size: 18px;
}
.total-cost-container-price {
  padding: 0px;
  margin: 0px;
}
.finance-container {
  margin-top: 20px;
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
</style>
