<script setup>
import { ref } from "vue";
const props = defineProps(["id", "url", "title", "isEditing"]);
const emit = defineEmits(["removeBookmark", "editBookmark", "setEditing"]);
const currentUrlValue = ref(props.url);
const currentTitleValue = ref(props.title);

const onRemove = () => {
  emit("removeBookmark", props.id);
};
const onEdit = () => {
  currentUrlValue.value = props.url;
  currentTitleValue.value = props.title;
  emit("setEditing", props.id);
};
const onSave = () => {
  if (currentUrlValue.value && currentUrlValue.value.trim().length > 0) {
    const title =
      currentTitleValue.value && currentTitleValue.value.trim().length > 0
        ? currentTitleValue.value
        : currentUrlValue.value;
    emit("editBookmark", props.id, currentUrlValue.value, title);
    emit("setEditing", null);
  }
};
</script>

<template>
  <div>
    <a v-if="!props.isEditing" :href="props.url" target="_blank">{{ props.title }}</a>
    <form v-else-if="props.isEditing" @submit.prevent="onSave">
      <div>
        <label for="inputUrl">URL</label>
        <input v-model="currentUrlValue" type="text" id="inputUrl" />
      </div>
      <div>
        <label for="inputUrlTitle">Title</label>
        <input
          v-focus
          v-model="currentTitleValue"
          type="text"
          id="inputUrlTitle"
        />
      </div>
      <button type="submit">Save</button>
    </form>
    <button type="button" @click="onRemove">Remove</button>
    <button v-show="!props.isEditing" type="button" @click="onEdit">Edit</button>
  </div>
</template>
