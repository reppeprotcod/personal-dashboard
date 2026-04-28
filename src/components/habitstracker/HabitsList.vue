<script setup>
import { ref } from "vue";
import AddHabit from "./AddHabit.vue";
import HabitItem from "./HabitItem.vue";
import { useCalendar } from "../../composables/useCalendar";
import { formatDay, dateString } from "../../utils/date";
import HabitHeader from "./HabitHeader.vue";

const { currentDate, weekDays, prevWeek, nextWeek } = useCalendar();
console.log("weekDays: ", weekDays.value);
console.log("currentDate: ", currentDate);
console.log("currentDate value: ", dateString(currentDate.value));


const habits = ref([
  {
    id: 1,
    title: "Water",
    createdAt: "2026-04-19",
    checkedDates: [
      dateString(new Date("2026-03-20")),
      dateString(new Date("2026-04-20")),
      dateString(new Date("2026-04-21")),
      dateString(new Date("2026-04-24")),
    ],
  },
  {
    id: 2,
    title: "Зарядка",
    createdAt: "2026-04-20",
    checkedDates: [
      dateString(new Date("2026-03-20")),
      dateString(new Date("2026-04-20")),
      dateString(new Date("2026-04-23")),
      dateString(new Date("2026-04-25")),
    ],
  },
]);
let id = 3;
const onAdd = (habitTitle) => {
  habits.value.push({
    id: id++,
    title: habitTitle,
    createdAt: dateString(currentDate.value),
    checkedDates: [],
  });
  console.log('habits-from-list-after-add ', habits);
  
};
const toggleCheck = (id, date) => {
  const habit = habits.value.find((item) => item.id === id);
  if (habit) {
    const dateIndex = habit.checkedDates.findIndex((item) => item === date);
    if (dateIndex === -1) habit.checkedDates.push(date);
    else habit.checkedDates.splice(dateIndex, 1);
    console.log("habit.checkedDates ", habit.checkedDates)
  }
};
</script>

<template>
  <AddHabit @addHabit="onAdd" />
  <HabitHeader
    :habits="habits"
    :weekDates="weekDays"
    @toggleClick="toggleCheck"
    @prevWeek="prevWeek"
    @nextWeek="nextWeek"
  />
</template>
