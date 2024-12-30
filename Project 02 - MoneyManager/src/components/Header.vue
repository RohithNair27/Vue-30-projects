<template>
  <header>
    <section>
      <h1>MoneyApp</h1>
    </section>
    <!-- <button class="more-transaction-button">+</button> -->
  </header>
</template>
<script></script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px 50px;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
}
header h1 {
  color: rgb(37, 99, 235);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
}
.more-transaction-button {
  all: unset;
  background-color: rgb(37, 99, 235);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 30px;
  padding: 0;
  margin: 0;
  text-align: center;
}
</style>
