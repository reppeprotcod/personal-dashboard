<script setup>
import { computed, ref } from "vue";
import TodoList from "../components/todolist/TodoList.vue";
import NotesList from "../components/noteslist/NotesList.vue";
import BookmarksList from "../components/bookmarks/BookmarksList.vue";
import HabitsList from "../components/habitstracker/HabitsList.vue";

const date1 = new Date("2026-04-21");
const date2 = new Date("2026-04-21");
console.log(date1.toDateString() === date2.toDateString());
</script>
<template>
  <div>
    <TodoList />
    <NotesList />
    <BookmarksList />
    <HabitsList />
  </div>
</template>
<style scoped></style>
