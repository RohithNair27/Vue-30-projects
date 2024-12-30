<template>
  <div class="transaction-container">
    <section class="transaction-text left-container">
      <span class="transaction-text-description">{{ transactionItem.description }}</span>
      <div class="transaction-payment-method">
        <i class="pi pi-credit-card" ></i>
        <span>{{ transactionItem.paymentMethod }}</span>
      </div>
    </section>
    <section class="transaction-text right-container">
      <span :class="transactionStyleConfig.class">{{
        `${transactionStyleConfig.icon} $${transactionItem.amount}`
      }}</span>
      <span class="transaction-date">{{ transactionItem.date }}</span>
    </section>
  </div>
</template>
<script setup>
import { computed } from "vue";

import { TRANSACTION_TYPES } from "@/constants/TransactionDetails";

const props = defineProps({
  transactionItem: Object,
});
const transactionStyleConfig = computed(() => {
  if (props.transactionItem.type === TRANSACTION_TYPES.INCOME) {
    return { class: "transaction-income", icon: "+" };
  } else {
    return { class: "transaction-expense", icon: "-" };
  }
});
</script>
<style scoped>
.transaction-container {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px rgb(218, 218, 218) solid;
}
.transaction-text {
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 20px;
}
.left-container{
  width:50%;
}

.transaction-text-description {
  color: var(--primary-color);
}
.transaction-income {
  background-color: var(--secondary-color-light);
  border-radius: 20px;
  width: fit-content;
  padding: 0px 8px 0px 8px;
  color:var(--secondary-color-dark);
  
}
.transaction-expense {
  background-color: #fee2e2;
  color:#af2729;
  border-radius: 20px;
  width: fit-content;
  padding: 0px 8px 0px 8px;
  font-weight: var(--font-weight-semibold);
  
}

.transaction-payment-method,.transaction-date{
  color: var(--color-text-tertiary);
  display:flex;
  align-items: center;
  margin-top: 8px;
  font-size: var(--font-size-sm);
  font-weight: var( --font-weight-normal);
 
}
.transaction-payment-method i{
  margin-right:5px;
  font-size: 1.2rem
}
</style>
