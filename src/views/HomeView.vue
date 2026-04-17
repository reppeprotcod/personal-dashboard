<script setup>
import { computed, ref } from "vue";
import TodoList from "../components/todolist/TodoList.vue";
import NotesList from "../components/noteslist/NotesList.vue";
import BookmarksList from "../components/bookmarks/BookmarksList.vue";
</script>
<template>
  <div>
    <TodoList />
    <NotesList />
    <BookmarksList />
  </div>
</template>
<style scoped></style>
