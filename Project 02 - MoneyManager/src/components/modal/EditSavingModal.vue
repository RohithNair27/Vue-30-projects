<template>
  <div>
    <div class="modal-container-header">
      <div class="modal-header">
        <h1 class="modal-expense-header">Edit savings</h1>
        <img src="../../assets/money.svg" class="bank-image" />
      </div>
      <span>Add how much money you are planning to save</span>
    </div>
    <form
      class="modal-input-container"
      @submit.prevent="
        $emit('edit-expense', {
          amount,
          type: 'EDIT',
        })
      "
    >
      <label>Add amount</label>
      <input
        placeholder="Should be about 20% of you income"
        v-model="amount"
        type="number"
        pattern="[0-9]"
        required
      />
      <section>
        <button class="cost-button saving editbutton" type="submit">
          Add to the current balance
        </button>
        <button class="cost-button expense editbutton" type="submit">
          close
        </button>
      </section>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
let amount = ref("");
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
.editbutton {
  width: 40%;
  min-width: 200px;
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
