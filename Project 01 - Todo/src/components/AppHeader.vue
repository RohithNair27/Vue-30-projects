<script setup></script>
<template>
  <div class="header-container">
    <img src="../assets/logo.svg" alt="vue image" />
    <h1>Todo</h1>
  </div>
</template>
<style>
.header-container {
  height: 10vh;
  border: 1px lightgray solid;
  padding: 10px;
  display: flex;
  align-items: center;
  position: sticky;
}
.header-container img {
  height: 60%;
  object-fit: contain;
}
</style>
