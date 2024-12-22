<template>
  <div class="transaction-container">
    <section class="transaction-text">
      <span>{{ data.description }}</span>
      <span>{{ data.paymentMethod }}</span>
    </section>
    <section class="transaction-text">
      <span>{{ data.amount }}</span>
      <span>{{ data.date }}</span>
    </section>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  data: Object,
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
</style>
