<script setup>
const props = defineProps(["eachTask"]);
defineEmits(["delete-task", "task-status-changed"]);
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
      <input
        type="checkbox"
        v-model="tasksComplete"
        @change="$emit('task-status-changed', props.eachTask.id)"
      />
      <span :class="{ complete: props.eachTask.completed }">{{
        props.eachTask.description
      }}</span>
    </section>
    <button @click="$emit('delete-task', props.eachTask.id)">❌</button>
  </div>
</template>
<style>
.task-container {
  padding: 17px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.low {
  background-color: lightgreen;
}
.medium {
  background-color: lightyellow;
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
