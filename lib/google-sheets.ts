import { WeekData, DayMenu } from '@/components/menu-table/types';
import { WEEK_A, WEEK_B } from '@/components/menu-table/constants';

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const IS_DEV = process.env.NODE_ENV === 'development';

// In dev: no cache (instant updates). In prod: 1 hour cache (ISR)
const fetchOptions = IS_DEV
  ? { cache: 'no-store' as const }
  : { next: { revalidate: 3600 } };

/**
 * Parse a CSV string into rows (handles quoted fields with commas)
 */
function parseCSV(csv: string): string[][] {
  const rows: string[][] = [];
  const lines = csv.split('\n');

  for (const line of lines) {
    if (!line.trim()) continue;

    const row: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        row.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    row.push(current.trim());
    rows.push(row);
  }

  return rows;
}

/**
 * Convert a row from the CSV into a DayMenu object
 * Expected columns: Día, Snack Matutino, Proteína, Veggie, Guarnición, Ensalada 1, Ensalada 2, Postre, Snack Tarde
 */
function rowToDayMenu(row: string[]): DayMenu {
  return {
    day: row[0] || '',
    snackMatutino: row[1] || '',
    mainProtein: row[2] || '',
    mainVeggie: row[3] || '',
    sideDish: row[4] || '',
    salads: [row[5] || '', row[6] || ''].filter(Boolean),
    dessert: row[7] || '',
    afternoonSnack: row[8] || '',
  };
}

/**
 * Fetch a single week's menu from Google Sheets
 */
async function fetchWeekSheet(weekName: 'Week_A' | 'Week_B'): Promise<DayMenu[]> {
  if (!SHEET_ID) {
    throw new Error('GOOGLE_SHEET_ID not configured');
  }

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(weekName)}`;

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${weekName}: ${response.status}`);
  }

  const csv = await response.text();
  const rows = parseCSV(csv);

  // Skip header row (first row)
  const dataRows = rows.slice(1);

  return dataRows.map(rowToDayMenu);
}

/**
 * Fetch config from the Config sheet
 * Expected columns: Week, Dates (comma-separated)
 * Also reads TERM row for current term
 */
async function fetchConfig(): Promise<{ weekA: string[]; weekB: string[]; term: string }> {
  if (!SHEET_ID) {
    throw new Error('GOOGLE_SHEET_ID not configured');
  }

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Config`;

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    throw new Error(`Failed to fetch Config: ${response.status}`);
  }

  const csv = await response.text();
  const rows = parseCSV(csv);

  // Skip header row
  const dataRows = rows.slice(1);

  const config: { weekA: string[]; weekB: string[]; term: string } = {
    weekA: [],
    weekB: [],
    term: '4', // default fallback
  };

  for (const row of dataRows) {
    const key = row[0]?.toUpperCase();
    const value = row[1]?.trim() || '';

    if (key === 'A') {
      config.weekA = value.split(',').map((d) => d.trim());
    } else if (key === 'B') {
      config.weekB = value.split(',').map((d) => d.trim());
    } else if (key === 'TERM') {
      config.term = value;
    }
  }

  return config;
}

export interface MenuData {
  weekA: WeekData;
  weekB: WeekData;
  term: string;
}

/**
 * Fetch complete menu data from Google Sheets
 * Falls back to constants if fetch fails
 */
export async function fetchMenuData(): Promise<MenuData> {
  // If no sheet ID configured, use fallback
  if (!SHEET_ID) {
    console.log('No GOOGLE_SHEET_ID configured, using fallback data');
    return { weekA: WEEK_A, weekB: WEEK_B, term: '4' };
  }

  try {
    const [weekADays, weekBDays, config] = await Promise.all([
      fetchWeekSheet('Week_A'),
      fetchWeekSheet('Week_B'),
      fetchConfig(),
    ]);

    return {
      weekA: {
        id: 'A',
        dates: config.weekA.length > 0 ? config.weekA : WEEK_A.dates,
        days: weekADays.length > 0 ? weekADays : WEEK_A.days,
      },
      weekB: {
        id: 'B',
        dates: config.weekB.length > 0 ? config.weekB : WEEK_B.dates,
        days: weekBDays.length > 0 ? weekBDays : WEEK_B.days,
      },
      term: config.term,
    };
  } catch (error) {
    console.error('Failed to fetch menu from Google Sheets:', error);
    return { weekA: WEEK_A, weekB: WEEK_B, term: '4' };
  }
}
