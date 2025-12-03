export interface GradeData {
  id: string;
  name: string;
  status: string;
}

export interface NestData {
  id: string;
  name: string;
  grades: GradeData[];
}

export interface PhaseData {
  id: string;
  name: string;
  themeColor: {
    dark: string;
    light: string;
  };
  nests: NestData[];
}
