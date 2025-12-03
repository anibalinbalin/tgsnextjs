export enum DayType {
  SCHOOL_DAY = 'SCHOOL_DAY',
  SCHOOL_HOLIDAY = 'SCHOOL_HOLIDAY',
  NATIONAL_HOLIDAY = 'NATIONAL_HOLIDAY',
  PD_DAY = 'PD_DAY',
  SUMMER_CAMP = 'SUMMER_CAMP',
  OUTDOOR_CAMP = 'OUTDOOR_CAMP',
  ORIENTATION_CAMP = 'ORIENTATION_CAMP',
  CELEBRATION = 'CELEBRATION',
  WEEKEND = 'WEEKEND',
  EMPTY = 'EMPTY'
}

export interface CalendarDay {
  date: Date;
  type: DayType;
  dayOfMonth: number;
  label?: string;
}

export interface MonthData {
  name: string;
  year: number;
  monthIndex: number;
  days: CalendarDay[];
}

export interface Term {
  name: string;
  dates: string;
}

export const TERMS: Term[] = [
  { name: 'TERM 1', dates: 'March 5th - April 30th' },
  { name: 'TERM 2', dates: 'May 12th - July 4th' },
  { name: 'TERM 3', dates: 'August 4th - October 10th' },
  { name: 'TERM 4', dates: 'October 20th - December 12th' },
];

export const TERMS_2026: Term[] = [
  { name: 'TERM 1', dates: 'February 18th - April 23rd' },
  { name: 'TERM 2', dates: 'May 4th - July 2nd' },
  { name: 'TERM 3', dates: 'August 3rd - October 8th' },
  { name: 'TERM 4', dates: 'October 19th - December 11th' },
];
