<script setup>
import { ref } from "vue";
const habitTitle = ref("");
const emit = defineEmits(["addHabit"]);

const onSubmit = () => {
  if (habitTitle.value && habitTitle.value.trim().length > 0) {
    emit("addHabit", habitTitle.value);
    habitTitle.value = "";
  }
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input v-model="habitTitle" type="text" id="inputTitle" name="inputTitle" />
    <button type="submit">Add</button>
  </form>
</template>
