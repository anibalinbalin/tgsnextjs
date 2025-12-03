// Tuition Table Types
export interface NestGroup {
  name: string;
  grades: string[];
}

export interface TuitionTier {
  price: number;
  nests: NestGroup[];
}

// School Fees Table Types
export interface FeeSection {
  title: string;
  amount: string;
}

export interface DiscountRow {
  id: string;
  label: string;
  tuitionDiscount: string;
  enrolmentDiscount: string;
}

export interface SiblingDiscounts {
  title: string;
  columns: {
    tuition: string;
    enrolment: string;
  };
  rows: DiscountRow[];
}

export interface FeeData {
  applicationFee: FeeSection;
  enrolmentFee: FeeSection;
  siblingDiscounts: SiblingDiscounts;
  footnote: string;
}
