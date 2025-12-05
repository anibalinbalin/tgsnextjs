'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { THEME_COLORS } from './constants';

const discountRows = [
  { id: '1', key: 'child2', tuitionDiscount: '10%', enrolmentDiscount: '40%' },
  { id: '2', key: 'child3', tuitionDiscount: '15%', enrolmentDiscount: '50%' },
  { id: '3', key: 'child4', tuitionDiscount: '20%', enrolmentDiscount: '60%' },
];

export default function SchoolFeesTable() {
  const t = useTranslations('FeesPage');

  return (
    <div className={`w-full ${THEME_COLORS.text}`}>
      <div className="flex flex-col border-2 border-black bg-white">

        {/* Application Fee Section */}
        <div className="flex flex-col">
          <div className={`${THEME_COLORS.headerBg} p-3 text-center border-b-2 border-black font-bold text-lg md:text-xl uppercase tracking-wide`}>
            {t('table.applicationFee')}
          </div>
          <div className="p-4 text-center font-bold text-xl md:text-2xl border-b-2 border-black">
            $300
          </div>
        </div>

        {/* Enrolment Fee Section */}
        <div className="flex flex-col">
          <div className={`${THEME_COLORS.headerBg} p-3 text-center border-b-2 border-black font-bold text-lg md:text-xl uppercase tracking-wide`}>
            {t('table.enrolmentFee')}
          </div>
          <div className="p-4 text-center font-bold text-xl md:text-2xl border-b-2 border-black">
            $9500
          </div>
        </div>

        {/* Sibling Discounts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_1.5fr_1.5fr]">
          {/* Header Row */}
          <div className="hidden sm:block bg-white border-b-2 border-r-2 border-black"></div>
          <div className={`col-span-1 sm:col-span-2 ${THEME_COLORS.headerBg} p-3 text-center border-b-2 border-black font-bold text-lg uppercase tracking-wide sm:border-l-2`}>
            {t('table.siblingDiscounts')}
          </div>
        </div>

        <div className="grid grid-cols-[1.2fr_1fr_1fr] sm:grid-cols-[1.5fr_1.5fr_1.5fr]">
          {/* Column Headers */}
          <div className="bg-white border-b-2 border-black sm:border-r-2"></div>
          <div className={`${THEME_COLORS.headerBg} p-2 text-center border-b-2 border-l-2 border-black font-bold uppercase text-sm md:text-base`}>
            {t('table.tuitionFee')}
          </div>
          <div className={`${THEME_COLORS.headerBg} p-2 text-center border-b-2 border-l-2 border-black font-bold uppercase text-sm md:text-base`}>
            {t('table.enrolmentFeeCol')}
          </div>

          {/* Discount Rows */}
          {discountRows.map((row, index) => {
            const isLastRow = index === discountRows.length - 1;
            return (
              <React.Fragment key={row.id}>
                <div className={`p-3 font-bold text-base md:text-lg text-center sm:text-right sm:pr-8 flex items-center justify-center sm:justify-end sm:border-r-2 border-black ${!isLastRow ? 'border-b-2' : ''}`}>
                  {t(`table.${row.key}`)}
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
        {t('table.newFamiliesNote')}
      </div>
    </div>
  );
}
