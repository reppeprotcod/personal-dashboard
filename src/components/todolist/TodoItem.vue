<script setup>
import { ref } from "vue";

const props = defineProps(["text", "isCompleted", "id", "isEditing"]);
const emit = defineEmits(["removeTodo", "editTodo", "setEditing"]);

const status = ref(props.isCompleted);
const currentValue = ref(props.text);

const onRemove = () => {
  emit("removeTodo", props.id);
};
const onEdit = async () => {
  currentValue.value = props.text;
  emit("setEditing", props.id);
};
const onSave = () => {
  if (currentValue.value && currentValue.value.trim().length > 0) {
    emit("editTodo", props.id, currentValue.value);
    emit("setEditing", null);
  }
};
</script>
<template>
  <div class="todoItem">
    <input type="checkbox" v-model="status" :checked="status" />
    <p v-if="!props.isEditing" :class="{ complete: status }">
      {{ props.text }}
    </p>
    <form v-else-if="props.isEditing" @submit.prevent="onSave">
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
    <button v-show="!props.isEditing" type="button" @click="onEdit">Edit</button>
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
