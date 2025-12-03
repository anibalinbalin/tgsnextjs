import { AssessmentColumn } from './types';

export const ASSESSMENT_COLORS = {
  forLearning: {
    header: 'bg-[#b8823e]',
    content: 'bg-[#efc06e]',
  },
  asLearning: {
    header: 'bg-[#42664f]',
    content: 'bg-[#87b29b]',
  },
  ofLearning: {
    header: 'bg-[#c56a53]',
    content: 'bg-[#df9682]',
  },
};

export const ASSESSMENT_DATA: AssessmentColumn[] = [
  {
    id: 'for-learning',
    keyword: 'FOR',
    bullets: [
      'Enables teachers to use information about students\' knowledge, understanding and skills to inform teaching',
      'Teachers provide feedback to students about their learning and how to improve',
    ],
    colors: ASSESSMENT_COLORS.forLearning,
  },
  {
    id: 'as-learning',
    keyword: 'AS',
    bullets: [
      'Involves students in the learning process where they monitor their own progress, ask questions and practise skills',
      'Students use self-assessment and teacher feedback to reflect on their learning, consolidate their understanding and work towards learning goals.',
    ],
    colors: ASSESSMENT_COLORS.asLearning,
  },
  {
    id: 'of-learning',
    keyword: 'OF',
    bullets: [
      'Assists teachers to use evidence of student learning to assess student achievement against learning goals and standards',
    ],
    colors: ASSESSMENT_COLORS.ofLearning,
  },
];
