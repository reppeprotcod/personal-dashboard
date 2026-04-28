<script setup>
import { ref } from "vue";
import { dateString } from "../../utils/date";
const props = defineProps(["habit", "weekDates"]);
const emit = defineEmits(["toggleClick"]);

console.log("habit: ", props.habit);
console.log("habit-title: ", props.habit.title);

const isChecked = (day) => props.habit.checkedDates.includes(dateString(day));

const onToggle = (day) => {
  emit("toggleClick", props.habit.id, dateString(day));
};
</script>

<template>
  <div style="display: flex;">
    <p>{{ props.habit.title }}</p>
    <input
      v-for="day in props.weekDates"
      :key="day.toString()"
      type="checkbox"
      @change="onToggle(day)"
      :checked="isChecked(day)"
    />
  </div>
</template>
