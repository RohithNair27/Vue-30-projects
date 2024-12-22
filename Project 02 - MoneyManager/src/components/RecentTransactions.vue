<template>
  <div class="recent-transactions-container">
    <span>Recent Transactions</span>
    <Transaction v-for="Details in TransactionDetails" :data="Details" />
  </div>
</template>
<script setup>
import Transaction from "./Transaction.vue";
import { TransactionDetails } from "../constants/TransactionDetails";
</script>
<style>
.recent-transactions-container {
  margin-top: 20px;
  width: 70%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
}
</style>
