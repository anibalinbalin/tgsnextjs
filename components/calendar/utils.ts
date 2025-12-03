import { DayType, CalendarDay, MonthData } from './types';

const isBetween = (date: Date, start: Date, end: Date) => {
  return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
};

const isSameDay = (d1: Date, d2: Date) => {
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
};

const getDayType2025 = (date: Date): DayType => {
  const month = date.getMonth();
  const day = date.getDate();
  const dayOfWeek = date.getDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) return DayType.WEEKEND;

  const nationalHolidays = [
    new Date(2025, 2, 3),
    new Date(2025, 2, 4),
    new Date(2025, 3, 17),
    new Date(2025, 3, 18),
    new Date(2025, 4, 1),
    new Date(2025, 5, 19),
    new Date(2025, 6, 18),
    new Date(2025, 7, 25),
    new Date(2025, 11, 25),
  ];
  if (nationalHolidays.some(h => isSameDay(h, date))) return DayType.NATIONAL_HOLIDAY;

  const pdDays = [
    new Date(2025, 4, 2),
    new Date(2025, 7, 1),
  ];
  if (pdDays.some(d => isSameDay(d, date))) return DayType.PD_DAY;

  const celebrationDays = [
    new Date(2025, 3, 30),
    new Date(2025, 6, 4),
    new Date(2025, 9, 10),
    new Date(2025, 11, 12),
  ];
  if (celebrationDays.some(d => isSameDay(d, date))) return DayType.CELEBRATION;

  if (month === 0) return DayType.SCHOOL_HOLIDAY;
  if (month === 1) return DayType.SCHOOL_HOLIDAY;

  if (month === 3 && day >= 14 && day <= 18) {
    if (day === 17 || day === 18) return DayType.NATIONAL_HOLIDAY;
    return DayType.SCHOOL_HOLIDAY;
  }

  if (isBetween(date, new Date(2025, 6, 7), new Date(2025, 7, 1))) {
    if (month === 7 && day === 1) return DayType.PD_DAY;
    if (month === 6 && day === 18) return DayType.NATIONAL_HOLIDAY;
    return DayType.SCHOOL_HOLIDAY;
  }

  if (isBetween(date, new Date(2025, 8, 22), new Date(2025, 8, 26))) return DayType.SCHOOL_HOLIDAY;

  if (month === 11 && day >= 13) return DayType.SCHOOL_HOLIDAY;

  if (isBetween(date, new Date(2025, 2, 5), new Date(2025, 3, 30))) return DayType.SCHOOL_DAY;
  if (isBetween(date, new Date(2025, 4, 12), new Date(2025, 6, 4))) return DayType.SCHOOL_DAY;
  if (isBetween(date, new Date(2025, 7, 4), new Date(2025, 9, 10))) return DayType.SCHOOL_DAY;
  if (isBetween(date, new Date(2025, 9, 20), new Date(2025, 11, 12))) return DayType.SCHOOL_DAY;

  return DayType.EMPTY;
};

const getDayType2026 = (date: Date): DayType => {
  const month = date.getMonth();
  const day = date.getDate();
  const dayOfWeek = date.getDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) return DayType.WEEKEND;

  // Orientation Learning Camp: Feb 18-20
  const orientationDays = [
    new Date(2026, 1, 18),
    new Date(2026, 1, 19),
    new Date(2026, 1, 20),
  ];
  if (orientationDays.some(d => isSameDay(d, date))) return DayType.ORIENTATION_CAMP;

  // Celebration of Learning: Apr 23, Jul 2, Oct 8, Dec 11
  const celebrationDays = [
    new Date(2026, 3, 23),
    new Date(2026, 6, 2),
    new Date(2026, 9, 8),
    new Date(2026, 11, 11),
  ];
  if (celebrationDays.some(d => isSameDay(d, date))) return DayType.CELEBRATION;

  // Professional Development Days: Apr 24, Jul 3, Oct 9
  const pdDays = [
    new Date(2026, 3, 24),
    new Date(2026, 6, 3),
    new Date(2026, 9, 9),
  ];
  if (pdDays.some(d => isSameDay(d, date))) return DayType.PD_DAY;

  // National Holidays
  const nationalHolidays = [
    new Date(2026, 4, 1),   // May 1 (Labor Day)
    new Date(2026, 4, 18),  // May 18 (Battle of Las Piedras)
    new Date(2026, 5, 19),  // Jun 19 (Artigas)
    new Date(2026, 6, 18),  // Jul 18 (Constitution)
    new Date(2026, 7, 25),  // Aug 25 (Independence)
    new Date(2026, 10, 2),  // Nov 2 (All Souls)
    new Date(2026, 11, 25), // Dec 25 (Christmas)
  ];
  if (nationalHolidays.some(h => isSameDay(h, date))) return DayType.NATIONAL_HOLIDAY;

  // School Holidays
  // Summer Break Part 1: Jan + Feb 1-17
  if (month === 0) return DayType.SCHOOL_HOLIDAY;
  if (month === 1 && day <= 17) return DayType.SCHOOL_HOLIDAY;

  // Autumn Break: Apr 27-30
  if (month === 3 && day >= 27) return DayType.SCHOOL_HOLIDAY;

  // Winter Break: Jul 6-31
  if (isBetween(date, new Date(2026, 6, 6), new Date(2026, 6, 31))) return DayType.SCHOOL_HOLIDAY;

  // Spring Break: Oct 12-16
  if (isBetween(date, new Date(2026, 9, 12), new Date(2026, 9, 16))) return DayType.SCHOOL_HOLIDAY;

  // Summer Break Part 2: Dec 14+
  if (month === 11 && day >= 14) return DayType.SCHOOL_HOLIDAY;

  // School Days (Terms)
  // Term 1: Feb 18 - Apr 23
  if (isBetween(date, new Date(2026, 1, 18), new Date(2026, 3, 23))) return DayType.SCHOOL_DAY;
  // Term 2: May 4 - Jul 2
  if (isBetween(date, new Date(2026, 4, 4), new Date(2026, 6, 2))) return DayType.SCHOOL_DAY;
  // Term 3: Aug 3 - Oct 8
  if (isBetween(date, new Date(2026, 7, 3), new Date(2026, 9, 8))) return DayType.SCHOOL_DAY;
  // Term 4: Oct 19 - Dec 11
  if (isBetween(date, new Date(2026, 9, 19), new Date(2026, 11, 11))) return DayType.SCHOOL_DAY;

  return DayType.EMPTY;
};

export const getDayType = (date: Date): DayType => {
  const year = date.getFullYear();
  if (year === 2025) return getDayType2025(date);
  if (year === 2026) return getDayType2026(date);
  return DayType.EMPTY;
};

export const generateYearData = (year: number): MonthData[] => {
  const months: MonthData[] = [];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  for (let i = 0; i < 12; i++) {
    const firstDay = new Date(year, i, 1);
    const lastDay = new Date(year, i + 1, 0);
    const numDays = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay();

    const days: CalendarDay[] = [];

    for (let j = 0; j < startDayOfWeek; j++) {
      days.push({
        date: new Date(year, i, 1),
        type: DayType.EMPTY,
        dayOfMonth: 0
      });
    }

    for (let d = 1; d <= numDays; d++) {
      const currentDate = new Date(year, i, d);
      days.push({
        date: currentDate,
        type: getDayType(currentDate),
        dayOfMonth: d
      });
    }

    months.push({
      name: monthNames[i],
      year,
      monthIndex: i,
      days
    });
  }

  return months;
};
