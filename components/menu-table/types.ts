export type WeekType = 'A' | 'B';

export interface DayMenu {
  day: string;
  snackMatutino: string;
  mainProtein: string;
  mainVeggie: string;
  sideDish: string;
  salads: string[];
  dessert: string;
  afternoonSnack: string;
}

export interface WeekData {
  id: WeekType;
  dates: string[];
  days: DayMenu[];
}
