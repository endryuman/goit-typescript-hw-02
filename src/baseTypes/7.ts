/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Monday = 0,
  Tuesday = 0,
  Wednesday = 0,
  Thursday = 0,
  Friday = 0,
  Saturday = 1,
  Sunday = 1,
}

function isWeekend(day: string): boolean {
  if (Day[day] === 1) {
    return true;
  } else return false;
}

isWeekend("Tuesday");
