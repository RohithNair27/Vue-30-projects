<script setup>
import { ref } from "vue";
import AppHeader from "./components/AppHeader.vue";
import Task from "./components/Task.vue";

let TasksList = ref([
  {
    id: 1,
    description: "buy milk for kids",
    priority: "low",
    completed: false,
  },
  {
    id: 1,
    description: "buy milk for kids",
    priority: "low",
    completed: false,
  },
  {
    id: 1,
    description: "buy milk for kids",
    priority: "low",
    completed: false,
  },
  {
    id: 1,
    description: "buy milk for kids",
    priority: "low",
    completed: false,
  },
  {
    id: 2,
    description: "And never see them",
    priority: "high",
    completed: false,
  },
  {
    id: 1,
    description: "buy milk for kids",
    priority: "low",
    completed: false,
  },
  {
    id: 3,
    description: "And never see them",
    priority: "medium",
    completed: false,
  },
  {
    id: 1,
    description: "buy milk for kids",
    priority: "low",
    completed: false,
  },
  {
    id: 1,
    description: "buy milk for kids",
    priority: "low",
    completed: false,
  },
]);
</script>

<template>
  <header>
    <AppHeader />
  </header>

  <main class="body-container">
    <form @submit.prevent="">
      <input type="text" placeholder="enter your tasks" />
      <button>Add task</button>
    </form>
    <div class="tasks-container">
      <Task v-for="tasks in TasksList" :key="tasks.id" :eachTask="tasks" />
    </div>
  </main>
</template>

<style scoped>
.body-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.body-container form,
.tasks-container {
  width: 50%;
  /* border: 1px black solid; */
}
.body-container form {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.body-container input {
  width: 40%;
  height: 30px;
  /* padding: 5px; */
  margin-right: 10px;
}
.body-container button {
  height: 30px;
  /* padding: 5px; */
}
</style>
