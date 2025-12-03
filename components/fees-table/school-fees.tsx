'use client';

import React from 'react';
import { feeData, THEME_COLORS } from './constants';

export default function SchoolFeesTable() {
  const { applicationFee, enrolmentFee, siblingDiscounts, footnote } = feeData;

  return (
    <div className={`w-full ${THEME_COLORS.text}`}>
      <div className="flex flex-col border-2 border-black bg-white">

        {/* Application Fee Section */}
        <div className="flex flex-col">
          <div className={`${THEME_COLORS.headerBg} p-3 text-center border-b-2 border-black font-bold text-lg md:text-xl uppercase tracking-wide`}>
            {applicationFee.title}
          </div>
          <div className="p-4 text-center font-bold text-xl md:text-2xl border-b-2 border-black">
            {applicationFee.amount}
          </div>
        </div>

        {/* Enrolment Fee Section */}
        <div className="flex flex-col">
          <div className={`${THEME_COLORS.headerBg} p-3 text-center border-b-2 border-black font-bold text-lg md:text-xl uppercase tracking-wide`}>
            {enrolmentFee.title}
          </div>
          <div className="p-4 text-center font-bold text-xl md:text-2xl border-b-2 border-black">
            {enrolmentFee.amount}
          </div>
        </div>

        {/* Sibling Discounts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_1.5fr_1.5fr]">
          {/* Header Row */}
          <div className="hidden sm:block bg-white border-b-2 border-r-2 border-black"></div>
          <div className={`col-span-1 sm:col-span-2 ${THEME_COLORS.headerBg} p-3 text-center border-b-2 border-black font-bold text-lg uppercase tracking-wide sm:border-l-2`}>
            {siblingDiscounts.title}
          </div>
        </div>

        <div className="grid grid-cols-[1.2fr_1fr_1fr] sm:grid-cols-[1.5fr_1.5fr_1.5fr]">
          {/* Column Headers */}
          <div className="bg-white border-b-2 border-black sm:border-r-2"></div>
          <div className={`${THEME_COLORS.headerBg} p-2 text-center border-b-2 border-l-2 border-black font-bold uppercase text-sm md:text-base`}>
            {siblingDiscounts.columns.tuition}
          </div>
          <div className={`${THEME_COLORS.headerBg} p-2 text-center border-b-2 border-l-2 border-black font-bold uppercase text-sm md:text-base`}>
            {siblingDiscounts.columns.enrolment}
          </div>

          {/* Discount Rows */}
          {siblingDiscounts.rows.map((row, index) => {
            const isLastRow = index === siblingDiscounts.rows.length - 1;
            return (
              <React.Fragment key={row.id}>
                <div className={`p-3 font-bold text-base md:text-lg text-center sm:text-right sm:pr-8 flex items-center justify-center sm:justify-end sm:border-r-2 border-black ${!isLastRow ? 'border-b-2' : ''}`}>
                  {row.label}
                </div>
                <div className={`p-3 text-center font-bold text-base md:text-lg flex items-center justify-center bg-gray-50 border-l-2 border-black ${!isLastRow ? 'border-b-2' : ''}`}>
                  {row.tuitionDiscount}
                </div>
                <div className={`p-3 text-center font-bold text-base md:text-lg flex items-center justify-center bg-gray-50 border-l-2 border-black ${!isLastRow ? 'border-b-2' : ''}`}>
                  {row.enrolmentDiscount}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Footnote */}
      <div className="mt-4 text-center font-bold text-sm md:text-base uppercase tracking-wide">
        {footnote}
      </div>
    </div>
  );
}
