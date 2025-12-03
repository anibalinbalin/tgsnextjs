import { TuitionTier, FeeData } from './types';

// Shared theme colors
export const THEME_COLORS = {
  headerBg: 'bg-[#C6B696]',
  border: 'border-black',
  text: 'text-black',
};

// Table 1: Tuition Data
export const TABLE_HEADERS = {
  title: 'TUITION FEE (ANUALIDAD)',
  columns: ['GRADE', 'NEST', 'ANNUAL TUITION (USD)'],
};

export const tuitionData: TuitionTier[] = [
  {
    price: 10800,
    nests: [
      {
        name: 'PENGUINS',
        grades: ['K2', 'K3'],
      },
    ],
  },
  {
    price: 21600,
    nests: [
      {
        name: 'JAYS',
        grades: ['K4', 'K5'],
      },
      {
        name: 'OWLS',
        grades: ['P1', 'P2'],
      },
      {
        name: 'ROBINS',
        grades: ['P3', 'P4'],
      },
      {
        name: 'FALCONS',
        grades: ['P5', 'P6'],
      },
    ],
  },
  {
    price: 23600,
    nests: [
      {
        name: 'BOSQUE',
        grades: ['S1', 'S2'],
      },
      {
        name: 'RÍO',
        grades: ['S3'],
      },
    ],
  },
];

// Table 2: School Fees Data
export const feeData: FeeData = {
  applicationFee: {
    title: 'APPLICATION FEE (USD) **',
    amount: '$300',
  },
  enrolmentFee: {
    title: 'ENROLMENT FEE (USD) (INSCRIPCIÓN) **',
    amount: '$9500',
  },
  siblingDiscounts: {
    title: 'SIBLING DISCOUNTS',
    columns: {
      tuition: 'TUITION FEE',
      enrolment: 'ENROLMENT FEE',
    },
    rows: [
      { id: '1', label: '2nd child', tuitionDiscount: '10%', enrolmentDiscount: '40%' },
      { id: '2', label: '3rd child', tuitionDiscount: '15%', enrolmentDiscount: '50%' },
      { id: '3', label: '4th child', tuitionDiscount: '20%', enrolmentDiscount: '60%' },
    ],
  },
  footnote: '** Applies only to new families starting in 2026',
};
