<template>
  <header>
    <AppHeader />
  </header>
  <main class="body-container">
    <form @submit.prevent="addTask">
      <input
        type="text"
        placeholder="Enter Your Tasks"
        v-model="inputText"
        maxlength="30"
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
        @task-status-changed="updateTaskStatus"
      />
    </div>
  </main>
</template>
<script setup>
import { ref, onMounted } from "vue";
import AppHeader from "./components/AppHeader.vue";
import Task from "./components/Task.vue";
import {
  getAllTasks,
  storeTasks,
  deleteSingleTask,
  updateTaskCompletionStatus,
} from "./utils/LocalStorage";
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
  storeTasks(newTask);
}
function deleteTask(id) {
  let index = tasksList.value.findIndex((element) => element.id === id);
  if (index != -1) {
    tasksList.value.splice(index, 1);
  }
  deleteSingleTask(id);
}
onMounted(() => {
  tasksList.value = getAllTasks();
});
function updateTaskStatus(id) {
  updateTaskCompletionStatus(id);
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
  width: 60%;
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
@media only screen and (max-width: 900px) {
  .body-container form,
  .tasks-container {
    width: 80%;
  }
}
@media only screen and (max-width: 500px) {
  .body-container form,
  .tasks-container {
    width: 100%;
  }
  .body-container form {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  .body-container form button {
    width: 30%;
    padding: 2px;
    align-self: center;
    min-width: 100px;
  }
  .body-container select {
    margin: 3px;
    padding: 4px;
    width: 50%;
    align-self: center;
    min-width: 100px;
  }
}
</style>
