'use client';

import React, { useState, useMemo } from 'react';
import { generateYearData } from './utils';
import { MonthData } from './types';
import MonthGrid from './MonthGrid';
import MonthModal from './MonthModal';
import Legend from './Legend';
import DevBadge from '@/components/dev-badge';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const TERMS_TIMELINE_2025 = [
  { name: 'Term 1', dates: 'March 5th - April 30th', startMonth: 2, endMonth: 3.97, color: '#8EB096', weeks: 8 },
  { name: 'Term 2', dates: 'May 12th - July 4th', startMonth: 4.4, endMonth: 6.13, color: '#5B8BA0', weeks: 8 },
  { name: 'Term 3', dates: 'August 4th - October 10th', startMonth: 7.13, endMonth: 9.33, color: '#D39885', weeks: 10 },
  { name: 'Term 4', dates: 'October 20th - December 12th', startMonth: 9.67, endMonth: 11.4, color: '#802E3A', weeks: 8 },
];

const TERMS_TIMELINE_2026 = [
  { name: 'Term 1', dates: 'Feb 18th - April 23rd', startMonth: 1.6, endMonth: 3.77, color: '#8EB096', weeks: 9 },
  { name: 'Term 2', dates: 'May 4th - July 2nd', startMonth: 4.13, endMonth: 6.07, color: '#5B8BA0', weeks: 9 },
  { name: 'Term 3', dates: 'August 3rd - October 8th', startMonth: 7.1, endMonth: 9.27, color: '#D39885', weeks: 10 },
  { name: 'Term 4', dates: 'October 19th - December 11th', startMonth: 9.6, endMonth: 11.37, color: '#802E3A', weeks: 8 },
];

const SchoolCalendar: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<MonthData | null>(null);

  const calendarData2025 = useMemo(() => generateYearData(2025), []);
  const calendarData2026 = useMemo(() => generateYearData(2026), []);

  return (
    <section className="relative py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <header className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-[#D39885] mb-4 text-6xl leading-tight font-medium">
              2025 Calendar
            </h2>
            <p className="text-stone-600 text-lg">Click on any month to view details</p>
          </div>

          {/* Horizontal Timeline - V4: All combined (taller + contrast + grid) */}
          <div className="max-w-5xl mx-auto pt-12">
            {/* Month labels - darker + with borders */}
            <div className="grid grid-cols-12 gap-0 mb-0">
              {MONTHS.map((month, i) => (
                <div key={i} className="text-sm text-stone-700 text-center font-semibold border-l border-stone-300 first:border-l-0 py-1">
                  {month}
                </div>
              ))}
            </div>

            {/* Timeline bar - TALLER (h-20) with grid lines */}
            <div className="relative h-20 bg-stone-100 rounded-lg">
              {/* Background layer with overflow hidden for rounded corners */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                {/* Grid lines */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`grid-${i}`}
                    className="absolute h-full border-l border-stone-400/30"
                    style={{ left: `${(i / 12) * 100}%` }}
                  />
                ))}

                {/* Summer holiday - Jan/Feb - darker */}
                <div
                  className="absolute h-full bg-stone-300 flex items-center justify-center"
                  style={{ left: '0%', width: '16.66%' }}
                >
                  <span className="text-sm text-stone-700 font-semibold hidden sm:block">Summer</span>
                </div>

                {/* Holiday gaps - darker */}
                {/* May Break: Apr 30 (3.97) to May 12 (4.4) */}
                <div
                  className="absolute h-full bg-stone-300"
                  style={{ left: `${(3.97 / 12) * 100}%`, width: `${((4.4 - 3.97) / 12) * 100}%` }}
                />
                <div
                  className="absolute h-full bg-stone-300 flex items-center justify-center"
                  style={{ left: `${(6.13 / 12) * 100}%`, width: `${(1 / 12) * 100}%` }}
                >
                  <span className="text-xs text-stone-700 font-semibold hidden md:block">Winter</span>
                </div>
                <div
                  className="absolute h-full bg-stone-300"
                  style={{ left: `${(9.33 / 12) * 100}%`, width: `${(0.34 / 12) * 100}%` }}
                />

                {/* Term color blocks (no tooltip here) */}
                {TERMS_TIMELINE_2025.map((term, i) => {
                  const startPercent = (term.startMonth / 12) * 100;
                  const endPercent = (term.endMonth / 12) * 100;
                  const width = endPercent - startPercent;

                  return (
                    <div
                      key={i}
                      className="absolute h-full"
                      style={{
                        left: `${startPercent}%`,
                        width: `${width}%`,
                        backgroundColor: term.color
                      }}
                    />
                  );
                })}
              </div>

              {/* Interactive layer (outside overflow-hidden) for tooltips */}
              {TERMS_TIMELINE_2025.map((term, i) => {
                const startPercent = (term.startMonth / 12) * 100;
                const endPercent = (term.endMonth / 12) * 100;
                const width = endPercent - startPercent;

                return (
                  <div
                    key={i}
                    className="absolute h-full flex items-center justify-center text-white font-medium cursor-default group"
                    style={{
                      left: `${startPercent}%`,
                      width: `${width}%`,
                    }}
                  >
                    <div className="text-center relative z-10">
                      <div className="text-sm font-semibold">{term.name}</div>
                      <div className="text-xs opacity-90">{term.weeks} weeks</div>
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-stone-800 text-white text-xs rounded-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                      <div className="font-medium">{term.name}</div>
                      <div className="text-stone-300">{term.dates}</div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-800"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-stone-700">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 bg-stone-300 rounded"></div>
                <span className="font-medium">Holidays</span>
              </div>
              <span className="text-stone-400">|</span>
              <span className="text-stone-500">Hover terms for exact dates</span>
            </div>
          </div>
        </header>

        {/* 2025 Calendar Grid */}
        <div className="relative">
          <DevBadge name="calendar-2025" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {calendarData2025.map((month, index) => (
              <div
                key={month.monthIndex}
                className="animate-card-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <MonthGrid
                  data={month}
                  onClick={() => setSelectedMonth(month)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2026 Section */}
        <div className="pt-24 md:pt-32 lg:pt-56">
          {/* 2026 Header */}
          <header className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-[#D39885] mb-4 text-6xl leading-tight font-medium">
                2026 Calendar
              </h2>
              <p className="text-stone-600 text-lg">Provisional calendar - Click on any month to view details</p>
            </div>

            {/* 2026 Timeline */}
            <div className="max-w-5xl mx-auto pt-12">
              <div className="grid grid-cols-12 gap-0 mb-0">
                {MONTHS.map((month, i) => (
                  <div key={i} className="text-sm text-stone-700 text-center font-semibold border-l border-stone-300 first:border-l-0 py-1">
                    {month}
                  </div>
                ))}
              </div>

              <div className="relative h-20 bg-stone-100 rounded-lg">
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={`grid-2026-${i}`}
                      className="absolute h-full border-l border-stone-400/30"
                      style={{ left: `${(i / 12) * 100}%` }}
                    />
                  ))}

                  {/* Summer holiday - Jan + Feb 1-17 (0 to 1.6) */}
                  <div
                    className="absolute h-full bg-stone-300 flex items-center justify-center"
                    style={{ left: '0%', width: `${(1.6 / 12) * 100}%` }}
                  >
                    <span className="text-sm text-stone-700 font-semibold hidden sm:block">Summer</span>
                  </div>

                  {/* Autumn Break: Apr 24 - May 3 (3.77 to 4.13) */}
                  <div
                    className="absolute h-full bg-stone-300"
                    style={{ left: `${(3.77 / 12) * 100}%`, width: `${((4.13 - 3.77) / 12) * 100}%` }}
                  />

                  {/* Winter Break: Jul 3 - Aug 2 (6.07 to 7.1) */}
                  <div
                    className="absolute h-full bg-stone-300 flex items-center justify-center"
                    style={{ left: `${(6.07 / 12) * 100}%`, width: `${((7.1 - 6.07) / 12) * 100}%` }}
                  >
                    <span className="text-xs text-stone-700 font-semibold hidden md:block">Winter</span>
                  </div>

                  {/* Spring Break: Oct 9 - Oct 18 (9.27 to 9.6) */}
                  <div
                    className="absolute h-full bg-stone-300"
                    style={{ left: `${(9.27 / 12) * 100}%`, width: `${((9.6 - 9.27) / 12) * 100}%` }}
                  />

                  {/* Summer Break End: Dec 12+ (11.37 to 12) */}
                  <div
                    className="absolute h-full bg-stone-300"
                    style={{ left: `${(11.37 / 12) * 100}%`, width: `${((12 - 11.37) / 12) * 100}%` }}
                  />

                  {/* Term color blocks */}
                  {TERMS_TIMELINE_2026.map((term, i) => {
                    const startPercent = (term.startMonth / 12) * 100;
                    const endPercent = (term.endMonth / 12) * 100;
                    const width = endPercent - startPercent;

                    return (
                      <div
                        key={`2026-term-${i}`}
                        className="absolute h-full"
                        style={{
                          left: `${startPercent}%`,
                          width: `${width}%`,
                          backgroundColor: term.color
                        }}
                      />
                    );
                  })}
                </div>

                {/* Interactive layer for tooltips */}
                {TERMS_TIMELINE_2026.map((term, i) => {
                  const startPercent = (term.startMonth / 12) * 100;
                  const endPercent = (term.endMonth / 12) * 100;
                  const width = endPercent - startPercent;

                  return (
                    <div
                      key={`2026-tooltip-${i}`}
                      className="absolute h-full flex items-center justify-center text-white font-medium cursor-default group"
                      style={{
                        left: `${startPercent}%`,
                        width: `${width}%`,
                      }}
                    >
                      <div className="text-center relative z-10">
                        <div className="text-sm font-semibold">{term.name}</div>
                        <div className="text-xs opacity-90">{term.weeks} weeks</div>
                      </div>

                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-stone-800 text-white text-xs rounded-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                        <div className="font-medium">{term.name}</div>
                        <div className="text-stone-300">{term.dates}</div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-800"></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center justify-center gap-4 text-sm text-stone-700">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-stone-300 rounded"></div>
                  <span className="font-medium">Holidays</span>
                </div>
                <span className="text-stone-400">|</span>
                <span className="text-stone-500">Hover terms for exact dates</span>
              </div>
            </div>
          </header>

          {/* 2026 Calendar Grid */}
          <div className="relative">
            <DevBadge name="calendar-2026" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {calendarData2026.map((month, index) => (
                <div
                  key={`2026-${month.monthIndex}`}
                  className="animate-card-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <MonthGrid
                    data={month}
                    onClick={() => setSelectedMonth(month)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <Legend />

      </div>

      {/* Modal */}
      {selectedMonth && (
        <MonthModal
          data={selectedMonth}
          onClose={() => setSelectedMonth(null)}
        />
      )}
    </section>
  );
};

export default SchoolCalendar;
