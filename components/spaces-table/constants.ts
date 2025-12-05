import { PhaseData } from './types';

export const THEME_COLORS = {
  header: 'bg-[#b8823e]',
  early: {
    dark: 'bg-[#c56a53]',
    light: 'bg-[#df9682]',
  },
  primary: {
    dark: 'bg-[#42664f]',
    light: 'bg-[#87b29b]',
  },
  secondary: {
    dark: 'bg-[#b8823e]',
    light: 'bg-[#efc06e]',
  },
};

export const CURRICULUM_DATA: PhaseData[] = [
  {
    id: 'early-years',
    name: 'EARLY YEARS',
    themeColor: THEME_COLORS.early,
    nests: [
      {
        id: 'penguins',
        name: 'Penguins',
        grades: [
          { id: 'k2', name: 'K2', status: 'Waiting List Only' },
          { id: 'k3', name: 'K3', status: 'Waiting List Only' },
        ],
      },
      {
        id: 'jays',
        name: 'Jays',
        grades: [
          { id: 'k4', name: 'K4', status: '3 Space(s) Available' },
          { id: 'k5', name: 'K5', status: 'Waiting List Only' },
        ],
      },
    ],
  },
  {
    id: 'primary',
    name: 'PRIMARY',
    themeColor: THEME_COLORS.primary,
    nests: [
      {
        id: 'owls',
        name: 'Owls',
        grades: [
          { id: 'g1', name: 'Grade 1', status: 'Waiting List Only' },
          { id: 'g2', name: 'Grade 2', status: '2 Space(s) Available' },
        ],
      },
      {
        id: 'robins',
        name: 'Robins',
        grades: [
          { id: 'g3', name: 'Grade 3', status: '1 Space(s) Available' },
          { id: 'g4', name: 'Grade 4', status: 'Waiting List Only' },
        ],
      },
      {
        id: 'falcons',
        name: 'Falcons',
        grades: [
          { id: 'g5', name: 'Grade 5', status: 'Waiting List Only' },
          { id: 'g6', name: 'Grade 6', status: 'Waiting List Only' },
        ],
      },
    ],
  },
  {
    id: 'secondary',
    name: 'SECONDARY',
    themeColor: THEME_COLORS.secondary,
    nests: [
      {
        id: 'bosque',
        name: 'Bosque',
        grades: [
          { id: 'g7', name: 'Grade 7', status: '3 Space(s) Available' },
          { id: 'g8', name: 'Grade 8', status: '5 Space(s) Available' },
        ],
      },
      {
        id: 'rio',
        name: 'Río',
        grades: [
          { id: 'g9', name: 'Grade 9', status: '8 Space(s) Available' },
          { id: 'g10', name: 'Grade 10', status: 'Opening February 2027' },
        ],
      },
      {
        id: 'sierra',
        name: 'Sierra',
        grades: [
          { id: 'g11', name: 'Grade 11', status: 'Opening February 2028' },
          { id: 'g12', name: 'Grade 12', status: 'Opening February 2029' },
        ],
      },
    ],
  },
];
