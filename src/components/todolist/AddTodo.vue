<script setup>
import { ref } from "vue";

const inputValue = ref("");
const emit = defineEmits(["addTodo"]);

const onSubmit = () => {
  if (inputValue.value && inputValue.value.trim().length > 0) {
    emit("addTodo", inputValue.value);
    inputValue.value = "";
  }
};
</script>
<template>
  <form @submit.prevent="onSubmit">
    <input v-model="inputValue" type="text" name="inputValue" id="inputValue" />
    <button type="submit">Add</button>
  </form>
</template>
