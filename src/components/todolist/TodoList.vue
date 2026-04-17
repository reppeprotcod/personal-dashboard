<script setup>
import { computed, ref } from "vue";
import AddTodo from "./AddTodo.vue";
import TodoItem from "./TodoItem.vue";

const items = ref([
  { id: 1, text: "something1", isCompleted: false },
  { id: 2, text: "something12", isCompleted: false },
  { id: 3, text: "something123", isCompleted: false },
  { id: 4, text: "something1234", isCompleted: false },
  { id: 5, text: "something12345", isCompleted: false },
]);
let id = 6;
const editingId = ref(null);

const onAdd = (input) => {
  items.value.push({ id: id++, text: input, isCompleted: false });
};
const onRemove = (id) => {
  items.value = items.value.filter((item) => item.id !== id);
};
const onEdit = (id, text) => {
  const elem = items.value.find((item) => item.id === id);
  elem.text = text;
};
const setEditingId = (id) => {
  editingId.value = id;
}
</script>

<template>
  <div>
    <AddTodo @addTodo="onAdd" />

    <ul>
      <li v-for="item in items" :key="item.id">
        <TodoItem
          :text="item.text"
          :isCompleted="item.isCompleted"
          :id="item.id"
          :isEditing="item.id === editingId"
          @removeTodo="onRemove"
          @editTodo="onEdit"
          @setEditing="setEditingId"
        />
      </li>
    </ul>
  </div>
</template>
