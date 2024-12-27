<template>
  <button
    type="button"
    :class="{
      'cost-button': true,
      [iconBackground]: data.placeholder,
    }"
    @click="($emit('onClick',data.placeholder))"
  >
    {{ data.placeholder }}
  </button>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  data: Object,
});


let iconBackground = computed(() => {
  switch (props.data.placeholder) {
    case "Add income":
      return "income";
    case "Add expense":
      return "expense";
    default:
      return "saving";
  }
});
</script>
<style>
.cost-button {
  all: unset;
  margin: 10px;
  padding: 10px;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
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
</style>
