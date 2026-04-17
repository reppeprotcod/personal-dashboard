<script setup>
import { computed, ref } from "vue";
import TodoList from "../components/todolist/TodoList.vue";
import NotesList from "../components/noteslist/NotesList.vue";
</script>
<template>
  <div>
    <TodoList />
    <NotesList />
  </div>
</template>
<style scoped></style>
