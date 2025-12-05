'use client'

import React from 'react';
import { useTranslations } from 'next-intl';
import { CURRICULUM_DATA, THEME_COLORS } from './constants';
import { PhaseData, NestData, GradeData } from './types';
import DevBadge from '../dev-badge';

export default function CurriculumTable() {
  const t = useTranslations('SpacesPage.table');

  const translatePhase = (phaseId: string) => {
    const phaseMap: Record<string, string> = {
      'early-years': 'earlyYears',
      'primary': 'primary',
      'secondary': 'secondary',
    };
    return t(`phases.${phaseMap[phaseId]}`);
  };

  const translateGrade = (gradeId: string) => {
    const gradeMap: Record<string, string> = {
      'k2': 'k2', 'k3': 'k3', 'k4': 'k4', 'k5': 'k5',
      'g1': 'grade1', 'g2': 'grade2', 'g3': 'grade3', 'g4': 'grade4',
      'g5': 'grade5', 'g6': 'grade6', 'g7': 'grade7', 'g8': 'grade8',
      'g9': 'grade9', 'g10': 'grade10', 'g11': 'grade11', 'g12': 'grade12',
    };
    return t(`grades.${gradeMap[gradeId]}`);
  };

  const translateStatus = (status: string) => {
    if (status === 'Waiting List Only') {
      return t('status.waitingList');
    }
    const spacesMatch = status.match(/^(\d+) Space\(s\) Available$/);
    if (spacesMatch) {
      return t('status.spacesAvailable', { count: spacesMatch[1] });
    }
    const openingMatch = status.match(/^Opening (.+)$/);
    if (openingMatch) {
      return t('status.openingDate', { date: openingMatch[1] });
    }
    return status;
  };

  return (
    <section className="relative bg-white p-8 md:p-12 lg:p-24 font-[var(--font-roboto-mono)]">
      <div className="mx-auto max-w-7xl w-full">
        <div className="w-full overflow-x-auto pb-4">
          <table className="min-w-[800px] w-full border-separate border-spacing-0.5">
            <thead>
              <tr>
                <th
                  colSpan={4}
                  className={`${THEME_COLORS.header} text-white py-4 px-6 text-lg md:text-xl font-bold text-center tracking-wide rounded-t-sm`}
                >
                  {t('title')}
                </th>
              </tr>
            </thead>
            <tbody className="text-white font-medium text-base">
              {CURRICULUM_DATA.map((phase: PhaseData) => {
                const totalPhaseRows = phase.nests.reduce(
                  (acc, nest) => acc + nest.grades.length,
                  0
                );

                return (
                  <React.Fragment key={phase.id}>
                    {phase.nests.map((nest: NestData, nestIndex: number) => {
                      return nest.grades.map((grade: GradeData, gradeIndex: number) => {
                        const isPhaseFirstRow = nestIndex === 0 && gradeIndex === 0;
                        const isNestFirstRow = gradeIndex === 0;

                        return (
                          <tr key={grade.id} className="h-14">
                            {isPhaseFirstRow && (
                              <td
                                rowSpan={totalPhaseRows}
                                className={`${phase.themeColor.dark} text-center align-middle font-bold text-lg uppercase tracking-wider px-4 border border-white`}
                                style={{ width: '20%' }}
                              >
                                {translatePhase(phase.id)}
                              </td>
                            )}

                            {isNestFirstRow && (
                              <td
                                rowSpan={nest.grades.length}
                                className={`${phase.themeColor.light} text-center align-middle px-4 border border-white`}
                                style={{ width: '20%' }}
                              >
                                {nest.name}
                              </td>
                            )}

                            <td className={`${phase.themeColor.light} text-center align-middle px-4 border border-white`}>
                              {translateGrade(grade.id)}
                            </td>

                            <td className={`${phase.themeColor.light} text-center align-middle px-4 border border-white`}>
                              {translateStatus(grade.status)}
                            </td>
                          </tr>
                        );
                      });
                    })}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <DevBadge name="curriculum-table" />
    </section>
  );
}
