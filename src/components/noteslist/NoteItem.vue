<script setup>
import { ref } from "vue";
const props = defineProps(["text", "id", "isEditing"]);
const emit = defineEmits(["removeNote", "editNote", "setEditing"]);
const currentValue = ref(props.text);

const onRemove = () => {
  emit("removeNote", props.id);
};
const onEdit = () => {
  currentValue.value = props.text;
  emit("setEditing", props.id);
};
const onSave = () => {
  if (currentValue.value && currentValue.value.trim().length > 0) {
    emit("editNote", props.id, currentValue.value);
    emit("setEditing", null);
  }
};
</script>

<template>
  <div class="noteItem">
    <p v-if="!props.isEditing">{{ props.text }}</p>
    <form v-else-if="props.isEditing" @submit.prevent="onSave">
      <input
        type="text"
        name="inputEdit"
        id="editInput"
        v-model="currentValue"
        v-focus
      />
      <button type="submit">Save</button>
    </form>
    <button v-show="!props.isEditing" type="button" @click="onEdit">Edit</button>
    <button type="button" @click="onRemove">Remove</button>
  </div>
</template>

<style scoped>
.noteItem {
  display: flex;
}
</style>
