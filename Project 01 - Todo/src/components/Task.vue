<script setup>
const props = defineProps(["eachTask"]);
</script>
<template>
  <div
    class="task-container"
    :class="{
      [props.eachTask.priority]: true,
    }"
  >
    <section class="task-info">
      <input type="checkbox" />
      <span :class="{ complete: props.eachTask.completed }">{{
        props.eachTask.description
      }}</span>
    </section>
    <button>❌</button>
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
</style>
