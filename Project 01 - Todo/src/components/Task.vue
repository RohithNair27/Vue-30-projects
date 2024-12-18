<script setup>
const props = defineProps(["eachTask"]);
defineEmits(["delete-task"]);
let tasksComplete = defineModel("tasks-completed");
</script>
<template>
  <div
    class="task-container"
    :class="{
      [props.eachTask.priority]: true,
    }"
  >
    <section class="task-info">
      <input type="checkbox" v-model="tasksComplete" />
      <span :class="{ complete: props.eachTask.completed }">{{
        props.eachTask.description
      }}</span>
    </section>
    <button @click="$emit('delete-task', props.eachTask.id)">❌</button>
  </div>
</template>
<style>
.task-container {
  padding: 20px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.low {
  background-color: lightgreen;
}
.medium {
  background-color: lightsalmon;
}
.high {
  background-color: lightcoral;
}
.task-container button {
  background: none;
  border: none;
}
.complete {
  text-decoration: line-through;
  color: gray;
}
.task-info input {
  margin-right: 20px;
}
</style>
