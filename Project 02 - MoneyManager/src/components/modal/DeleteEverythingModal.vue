<template>
    
      <div class="modal-container-header">
        <div class="modal-header">
          <h1 class="modal-expense-header">Restart?</h1>
        </div>
        <span>Don't restart just because you spent a lot. Use this as motivation to save more money</span>
      </div>
      <form
        class="modal-input-container"
        @submit.prevent="
          $emit('delete-everything', {
            type: TRANSACTION_TYPES.RESTART,
          })
        "
      >   
          <button class="cost-button saving editbutton" type="button" @click="$emit('close')">
            No, don't delete the data
          </button>
          <button class="cost-button expense editbutton" type="submit">
            Delete
          </button>

      </form>

  </template>
  <script setup>
  import { ref } from "vue";
  
  import { TRANSACTION_TYPES } from "@/constants/TransactionDetails";
  
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
  