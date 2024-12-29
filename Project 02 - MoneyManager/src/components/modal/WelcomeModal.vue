<template>
  <div class="welcome-container">
    <div>
      <img src="../../assets/coin-stack.svg" />
    </div>
    <div>
      <h1>Start Saving, Start Growing</h1>
      <p>
        With just a few simple steps, you can take control of your finances,
        track your spending, and start building your savings. Our platform is
        designed to make managing your money easier and more effective than ever
        before.
      </p>
      <button class="cost-button saving" @click="$emit('closeModal')">
        Let's go
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.welcome-container {
  text-align: center;
  padding: 20px;
  border-radius: 8px;
}
.welcome-container button {
  width: 30%;
}

h1 {
  font-size: 2em;
  color: rgb(37, 99, 235);
  margin-bottom: 20px;
}

p {
  font-size: 1.1em;
  line-height: 1.6;
  color: #333;
}
</style>
