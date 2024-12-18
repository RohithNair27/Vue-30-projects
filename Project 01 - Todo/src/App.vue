<template>
  <header>
    <AppHeader />
  </header>
  <main class="body-container">
    <form @submit.prevent="addTask">
      <input
        type="text"
        placeholder="enter your tasks"
        v-model="inputText"
        required
      />
      <label for="priority"></label>
      <select v-model="taskPriority" id="priority" required>
        <option disabled selected value="">Select priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit">Add task</button>
    </form>
    <div class="tasks-container">
      <Task
        v-for="tasks in tasksList"
        :key="tasks.id"
        :each-task="tasks"
        v-model:tasks-completed="tasks.completed"
        @delete-task="deleteTask"
      />
    </div>
  </main>
</template>
<script setup>
import { ref } from "vue";
import AppHeader from "./components/AppHeader.vue";
import Task from "./components/Task.vue";

let tasksList = ref([]);
let inputText = ref("");
let taskPriority = ref("");
function addTask() {
  let newTask = {
    id: tasksList.value.length + 1,
    description: inputText.value,
    priority: taskPriority.value,
    completed: false,
  };
  tasksList.value.push(newTask);
  inputText.value = "";
}
function deleteTask(id) {
  let index = tasksList.value.findIndex((element) => element.id === id);
  if (index != -1) {
    tasksList.value.splice(index, 1);
  }
}
</script>

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
}
.body-container form {
  padding: 25px;
  display: flex;
}
.body-container input {
  flex: 1;
  margin: 3px;
  padding: 7px;
}
.body-container button {
  flex: 0.3;
  margin: 3px;
}
.body-container select {
  flex: 0.5;
  margin: 3px;
}
</style>
