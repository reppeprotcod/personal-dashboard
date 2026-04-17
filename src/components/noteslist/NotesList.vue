<script setup>
import { ref } from "vue";
import AddNote from "./AddNote.vue";
import NoteItem from "./NoteItem.vue";

const notes = ref([
  { id: 1, text: "something1" },
  { id: 2, text: "something12" },
  { id: 3, text: "something123" },
  { id: 4, text: "something1234" },
  { id: 5, text: "something12345" },
]);
let id = 6;

const onAdd = (input) => {
  notes.value.push({ id: id++, text: input });
};
const onRemove = (id) => {
  notes.value = notes.value.filter((note) => note.id !== id);
};
const onEdit = (id, text) => {
  const elem = notes.value.find((note) => note.id === id);
  elem.text = text;
};
</script>

<template>
  <div>
    <AddNote @addNote="onAdd" />
    <ul>
      <li v-for="note in notes" :key="note.id">
        <NoteItem
          :text="note.text"
          :id="note.id"
          @removeNote="onRemove"
          @editNote="onEdit"
        />
      </li>
    </ul>
  </div>
</template>
