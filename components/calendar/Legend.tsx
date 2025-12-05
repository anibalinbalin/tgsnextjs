'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

interface LegendItemProps {
  colorClass: string;
  label: string;
}

const LegendItem: React.FC<LegendItemProps> = ({ colorClass, label }) => (
  <div className="flex items-center space-x-2">
    <div className={`w-4 h-4 rounded shadow-sm ${colorClass}`}></div>
    <span className="text-xs md:text-sm text-stone-600 font-medium">{label}</span>
  </div>
);

const Legend: React.FC = () => {
  const t = useTranslations('CalendarPage');

  return (
    <div className="bg-white p-6 rounded-lg border border-stone-200 mt-12">
      <h3 className="text-sm font-medium text-[#D39885] mb-4 uppercase tracking-wider">{t('legend.guide')}</h3>
      <div className="flex flex-wrap gap-4 md:gap-6">
        <LegendItem colorClass="bg-[#8EB096]" label={t('legend.schoolDay')} />
        <LegendItem colorClass="bg-[#802E3A]" label={t('legend.schoolHolidays')} />
        <LegendItem colorClass="bg-[#5B8BA0]" label={t('legend.nationalHoliday')} />
        <LegendItem colorClass="bg-[#D39885]" label={t('legend.professionalDev')} />
        <LegendItem colorClass="bg-[#C65D3B]" label={t('legend.celebration')} />
        <LegendItem colorClass="bg-[#5BA3A3]" label={t('legend.orientationCamp')} />
      </div>
    </div>
  );
};

export default Legend;
