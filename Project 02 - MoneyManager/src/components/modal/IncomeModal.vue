<template>
  <div>
    <div class="modal-container-header">
      <div class="modal-header">
        <h1>Add Income</h1>
        <img src="../../assets/bank-svg.svg" class="bank-image" />
      </div>
      <span
        >Add the money spent and select the category closest to the item</span
      >
    </div>
    <form
      class="modal-input-container"
      @submit.prevent="
        $emit('add-income', {
          amount,
          incomeType,
          aboutExpense,
          type: TRANSACTION_TYPES.INCOME,
        })
      "
    >
      <label>Enter amount</label>
      <input
        placeholder="ex - $200"
        v-model="amount"
        type="number"
        pattern="[0-9]"
        required
      />
      <label>About the income</label>
      <input
        placeholder="For piza"
        v-model="aboutExpense"
        type="text"
        required
      />
      <section class="submit-container">
        <select v-model="incomeType">
          <option disabled>Select income type</option>
          <option value="Salary">Salary</option>
          <option value="Business">Business</option>
          <option value="Investments">Investments</option>
          <option value="Passive Income">Passive Income</option>
          <option value="Government Benefits">Government Benefits</option>
          <option value="Other">Other</option>
        </select>
        <button class="cost-button saving" type="submit">
          Add to the current balance
        </button>
      </section>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";

import { TRANSACTION_TYPES } from "@/constants/TransactionDetails";

let amount = ref();
let aboutExpense = ref();
let incomeType = ref("Salary");

</script>
<style>
.bank-image {
  width: 80px;
  margin-left: 10px;
}
.modal-header {
  display: flex;
  align-items: center;
}
h1 {
  font-size: 2em;
  color: rgb(37, 99, 235);
  margin-bottom: 20px;
}
</style>
