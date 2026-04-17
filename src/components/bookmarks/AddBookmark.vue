<script setup>
import { ref } from "vue";

const emit = defineEmits(["addBookmark"]);
const url = ref("");
const urlTitle = ref("");

const onSubmit = () => {
  if (url.value && url.value.trim().length > 0) {
    const title =
      urlTitle.value && urlTitle.value.trim().length > 0
        ? urlTitle.value
        : url.value;
    emit("addBookmark", url.value, title);
    url.value = "";
    urlTitle.value = "";
  }
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="inputUrl">URL</label>
      <input v-model="url" type="text" id="inputUrl" name="inputUrl" />
    </div>
    <div>
      <label for="inputUrlTitle">Title</label>
      <input
        v-model="urlTitle"
        type="text"
        id="inputUrlTitle"
        name="inputUrlTitle"
      />
    </div>
    <button type="submit">Add</button>
  </form>
</template>
