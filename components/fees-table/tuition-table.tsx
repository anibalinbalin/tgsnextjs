'use client';

import React from 'react';
import { tuitionData, TABLE_HEADERS, THEME_COLORS } from './constants';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function TuitionTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className={`w-full min-w-[600px] border-collapse border-2 border-black text-center ${THEME_COLORS.text}`}>
        <thead>
          <tr>
            <th
              colSpan={3}
              className={`${THEME_COLORS.headerBg} border-2 border-black py-4 px-6 text-lg md:text-xl font-bold uppercase tracking-wide`}
            >
              {TABLE_HEADERS.title}
            </th>
          </tr>
          <tr className={THEME_COLORS.headerBg}>
            {TABLE_HEADERS.columns.map((col) => (
              <th
                key={col}
                className="border-2 border-black py-3 px-4 font-bold uppercase text-sm md:text-base"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white font-medium">
          {tuitionData.map((tier, tierIndex) => {
            const totalTierRows = tier.nests.reduce(
              (sum, nest) => sum + nest.grades.length,
              0
            );

            return (
              <React.Fragment key={`tier-${tierIndex}`}>
                {tier.nests.map((nest, nestIndex) => (
                  <React.Fragment key={`nest-${nest.name}`}>
                    {nest.grades.map((grade, gradeIndex) => {
                      const isFirstRowOfTier = nestIndex === 0 && gradeIndex === 0;
                      const isFirstRowOfNest = gradeIndex === 0;

                      return (
                        <tr key={grade} className="h-12">
                          <td className="border-2 border-black p-3 font-semibold text-base md:text-lg">
                            {grade}
                          </td>

                          {isFirstRowOfNest && (
                            <td
                              className="border-2 border-black p-3 font-bold uppercase tracking-wider text-sm md:text-base"
                              rowSpan={nest.grades.length}
                            >
                              {nest.name}
                            </td>
                          )}

                          {isFirstRowOfTier && (
                            <td
                              className="border-2 border-black p-3 text-lg md:text-xl font-bold"
                              rowSpan={totalTierRows}
                            >
                              {formatCurrency(tier.price)}
                            </td>
                          )}
                        </tr>
                      );
                    })}
                  </React.Fragment>
                ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <p className="mt-3 text-sm text-gray-500 text-center">
        * Tuition fees are subject to annual review.
      </p>
    </div>
  );
}
