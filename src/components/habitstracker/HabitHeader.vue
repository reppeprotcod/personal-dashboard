<script setup>
import { ref } from "vue";
import { formatDay } from "../../utils/date";
import HabitItem from "./HabitItem.vue";
const props = defineProps(["habits", "weekDates"]);
const emit = defineEmits(["prevWeek", "nextWeek", "toggleClick"]);

console.log('weekDates[0].toString()', props.weekDates[0].toString())

const onPrev = () => {
  emit("prevWeek");
};
const onNext = () => {
  emit("nextWeek");
};
const onToggle = (habitId, date) => {
  emit("toggleClick", habitId, date);
};
</script>

<template>
  <div>
    <div style="display: flex">
      <button @click="onPrev"><</button>
      <span v-for="day in props.weekDates" :key="day.toString()">{{
        formatDay(day)
      }}</span>
      <button @click="onNext">></button>
    </div>
    <div v-for="habit in props.habits" :key="habit.id">
      <HabitItem
        :habit="habit"
        :weekDates="props.weekDates"
        @toggleClick="onToggle"
      />
    </div>
  </div>
</template>

<style scoped></style>
