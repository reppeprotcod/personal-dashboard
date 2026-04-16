<script setup>
import { nextTick, ref } from "vue";

const props = defineProps(["text", "isCompleted", "id"]);
const emit = defineEmits(["removeTodo", "editTodo"]);

const status = ref(props.isCompleted);
const isEditing = ref(false);
const currentValue = ref(props.text);
const editInput = ref(null);

const onRemove = () => {
  emit("removeTodo", props.id);
};
const onEdit = async () => {
  currentValue.value = props.text;
  isEditing.value = true;
};
const onSave = () => {
  emit("editTodo", props.id, currentValue.value);
  isEditing.value = false;
};
</script>
<template>
  <div class="todoItem">
    <input type="checkbox" v-model="status" :checked="status" />
    <p v-if="!isEditing" :class="{ complete: status }">
      {{ props.text }}
    </p>
    <form v-else-if="isEditing" @submit.prevent="onSave">
      <input
        name="editInput"
        id="editInput"
        type="text"
        v-model="currentValue"
        v-focus
      />
      <button type="submit">Save</button>
    </form>
    <button type="button" @click="onRemove">Remove</button>
    <button v-show="!isEditing" type="button" @click="onEdit">Edit</button>
  </div>
</template>

<style scoped>
.todoItem {
  display: flex;
}
.complete {
  text-decoration: line-through;
}
</style>
