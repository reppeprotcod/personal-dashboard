import { startOfWeek, addDays, format } from "date-fns";
import { ru } from "date-fns/locale";

export const getWeekDays = (date) => {
  const start = startOfWeek(date, { weekStartsOn: 1 });
  const days = [];
  days.push(start); // или просто в цикле делать это - разницы нет ?
  for (let i = 1; i < 7; i++) {
    days.push(addDays(start, i));
  }
  return days;
};

export const formatDay = (date) => format(date, "d eee", { locale: ru }); // использовать ли явно locale?
export const isToday = (date) => isToday(date);
export const dateString = (date) => format(date, "yyyy-MM-dd");
