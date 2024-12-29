<template>
  <div>
    <div class="modal-container-header">
      <div class="modal-header">
        <h1 class="modal-expense-header">Add Expense</h1>
        <img src="../../assets/money.svg" class="bank-image" />
      </div>
      <span
        >Add the money spent and select the category closest to the item</span
      >
    </div>
    <form
      class="modal-input-container"
      @submit.prevent="
        $emit('add-expense', {
          amount,
          incomeType,
          aboutExpense,
          type: 'EXPENSE',
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
      <label>About the expense</label>
      <input
        placeholder="For piza"
        v-model="aboutExpense"
        type="text"
        required
      />
      <section class="submit-container">
        <select v-model="ExpenseType">
          <option disabled>Select expense type</option>
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transportation">Transportation</option>
          <option value="Healthcare">Healthcare</option>
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
let amount = ref("");
let aboutExpense = ref();
let ExpenseType = ref("Salary");
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
.modal-expense-header {
  font-size: 2em;
  color: rgb(224, 35, 35);
  margin-bottom: 20px;
}
</style>
