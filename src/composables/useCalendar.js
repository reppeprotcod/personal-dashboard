import { computed, ref } from "vue";
import { addWeeks, subWeeks } from "date-fns";
import { getWeekDays } from "../utils/date";

export function useCalendar() {
  const currentDate = ref(new Date());

  const weekDays = computed(() => getWeekDays(currentDate.value));

  const nextWeek = () => {
    currentDate.value = addWeeks(currentDate.value, 1);
  };

  const prevWeek = () => {
    currentDate.value = subWeeks(currentDate.value, 1);
  };

  const today = () => {
    currentDate.value = new Date();
  };

  return {
    currentDate,
    weekDays,
    nextWeek,
    prevWeek,
    today,
  };
}
