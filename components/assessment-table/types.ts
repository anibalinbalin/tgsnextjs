export interface AssessmentColumn {
  id: string;
  keyword: string;
  bullets: string[];
  colors: {
    header: string;
    content: string;
  };
}
