<template>
  <div class="transaction-container">
    <section class="transaction-text">
      <span>{{ data.description }}</span>
      <span>{{ data.paymentMethod }}</span>
    </section>
    <section class="transaction-text">
      <span :class="transactionType">{{ data.amount }}</span>
      <span>{{ data.date }}</span>
    </section>
  </div>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
  data: Object,
});
const transactionType = computed(() => {
  if (props.data.type === "INCOME") {
    return "transaction-income";
  } else {
    return "transaction-expense";
  }
});
</script>
<style>
.transaction-container {
  padding: 10px 20px 15px 0px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px gray solid;
}
.transaction-text {
  display: flex;
  flex-direction: column;
}
.transaction-income {
  background-color: rgb(34, 197, 94);
  border-radius: 5px;
  width: fit-content;
  padding: 5px;
}
.transaction-expense {
  background-color: red;
  border-radius: 5px;
  width: fit-content;
  padding: 5px;
}
</style>
