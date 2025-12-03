'use client'

import React from 'react';
import { CURRICULUM_DATA, TABLE_TITLE, THEME_COLORS } from './constants';
import { PhaseData, NestData, GradeData } from './types';
import DevBadge from '../dev-badge';

export default function CurriculumTable() {
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
                  {TABLE_TITLE}
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
                                {phase.name}
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
                              {grade.name}
                            </td>

                            <td className={`${phase.themeColor.light} text-center align-middle px-4 border border-white`}>
                              {grade.status}
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
