<template>
  <div class="finance-summary-container">
    <section
      :class="{
        'finance-icon': true,
        [iconBackground]: data.description.toLowerCase(),
      }"
    >
      <i :class="data.icon" style="font-size: 1.5rem"></i>
    </section>
    <section class="finance-info">
      <span class="stat-label">{{ data.description }}</span>
      <span class="stat-amount">$ {{ data.value }}</span>
    </section>
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  data: Object,
});

let iconBackground = computed(() => {
  switch (props.data.description.toLowerCase()) {
    case "income":
      return "income";
    case "expense":
      return "expense";
    default:
      return "saving";
  }
});
</script>
<style>
.finance-summary-container {
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  align-items: center;
}
.stat-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  font-weight: var(--font-weight-medium);
}

.stat-amount {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}
.finance-icon {
  padding: 14px;
  border-radius: 10px;
  margin-left: 20px;
}
.income {
  background-color: rgb(34, 197, 94);
}
.expense {
  background-color: rgb(239, 68, 68);
}
.saving {
  background-color: rgb(59, 130, 246);
}
.finance-info {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
</style>
