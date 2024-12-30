<template>
  <div class="transaction-container">
    <section class="transaction-text">
      <span class="transaction-text-description">{{ data.description }}</span>
      <section>
        <i class="pi pi-credit-card" style="font-size: 1.5rem"></i>
        <span>{{ data.paymentMethod }}</span>
      </section>
    </section>
    <section class="transaction-text">
      <span :class="transactionType.class">{{
        `${transactionType.icon} $  ${data.amount}`
      }}</span>
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
    return { class: "transaction-income", icon: "+" };
  } else {
    return { class: "transaction-expense", icon: "-" };
  }
});
</script>
<style>
.transaction-container {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px rgb(218, 218, 218) solid;
}
.transaction-text {
  display: flex;
  flex-direction: column;
}
.transaction-text-description {
  color: var(--primary-color);
}
.transaction-income {
  background-color: rgb(34, 197, 94);
  border-radius: 20px;
  width: fit-content;
  padding: 5px;
}
.transaction-expense {
  background-color: red;
  border-radius: 20px;
  width: fit-content;
  padding: 5px;
}
</style>
