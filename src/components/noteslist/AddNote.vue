<script setup>
import { ref } from "vue";

const emit = defineEmits(["addNote"]);
const note = ref("");

const onSubmit = () => {
  if (note.value && note.value.trim().length > 0) {
    emit("addNote", note.value);
    note.value = "";
  }
};
</script>
<template>
  <form @submit.prevent="onSubmit">
    <input v-model="note" id="inputNote" name="inputNote" type="text" />
    <button type="submit">Add</button>
  </form>
</template>
