<script setup>
import { ref } from "vue";
const props = defineProps(["text", "id"]);
const emit = defineEmits(["removeNote", "editNote"]);
const currentValue = ref(props.text);
const isEditing = ref(false);

const onRemove = () => {
  emit("removeNote", props.id);
};
const onEdit = () => {
  currentValue.value = props.text;
  isEditing.value = true;
};
const onSave = () => {
  emit("editNote", props.id, currentValue.value);
  isEditing.value = false;
};
</script>

<template>
  <div class="noteItem">
    <p v-if="!isEditing">{{ props.text }}</p>
    <form v-else-if="isEditing" @submit.prevent="onSave">
      <input
        type="text"
        name="inputEdit"
        id="editInput"
        v-model="currentValue"
        v-focus
      />
      <button type="submit">Save</button>
    </form>
    <button v-show="!isEditing" type="button" @click="onEdit">Edit</button>
    <button type="button" @click="onRemove">Remove</button>
  </div>
</template>

<style scoped>
.noteItem {
  display: flex;
}
</style>
