<template>
  <header>
    <div>
      <h1>MoneyApp</h1>
    </div>
    <button type="button" @click="$emit('click-delete-all',ModalTypeConstant.RESTART_MODAL)" aria-label="Delete all items">
      <i class="pi pi-trash" aria-hidden="true"></i>
    </button>
  </header>
</template>
<script setup>
import { ModalTypeConstant } from '@/constants/ModalConstants';

defineEmits(['click-delete-all'])

</script>

<style scoped>
header {
  width:100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:1px 50px;
  box-sizing: border-box;
  background-color: var(--secondary-background-color);
  box-shadow: var(--box-shadow)
}
header h1 {
  color: var(--primary-color);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
}
header i{
  font-size: 1.5rem;
}
header button{
  all:unset;
  color: var(--color-text-tertiary);
  cursor: pointer;
}
header button:hover{
  color:var(--color-text-primary)
}

</style>
