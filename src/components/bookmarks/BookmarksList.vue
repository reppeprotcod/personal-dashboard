<script setup>
import { ref } from "vue";
import AddBookmark from "./AddBookmark.vue";
import BookmarkItem from "./BookmarkItem.vue";

const bookmarks = ref([
  {
    id: 1,
    url: "https://translate.google.com/?sl=en&tl=ru&op=translate",
    title: "something1",
  },
  {
    id: 2,
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%88%D0%BA%D0%B0",
    title: "something2",
  },
  {
    id: 3,
    url: "https://translate.google.com/?sl=en&tl=ru&op=translate",
    title: "something3",
  },
]);
let id = 4;

const onAdd = (url, title) => {
  bookmarks.value.push({ id: id++, url: url, title: title });
};
const onRemove = (id) => {
  bookmarks.value = bookmarks.value.filter((bookmark) => bookmark.id !== id);
};
const onEdit = (id, url, title) => {
  const elem = bookmarks.value.find((bookmark) => bookmark.id === id);
  elem.url = url;
  elem.title = title;
};
</script>

<template>
  <div>
    <AddBookmark @addBookmark="onAdd" />
    <ul>
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
        <BookmarkItem
          :id="bookmark.id"
          :url="bookmark.url"
          :title="bookmark.title"
          @removeBookmark="onRemove"
          @editBookmark="onEdit"
        />
      </li>
    </ul>
  </div>
</template>
