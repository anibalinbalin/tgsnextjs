'use client';

import { WeekType } from './types';
import { Calendar, ChevronDown } from 'lucide-react';
import { THEME_COLORS } from './constants';

type HeaderVariant =
  | 'full'
  | 'minimal'
  | 'static'
  | 'inline-text'
  | 'underlined-tabs'
  | 'dropdown'
  | 'bottom-toggle';

interface MenuHeaderProps {
  currentWeek: WeekType;
  dates: string[];
  onToggleWeek: (week: WeekType) => void;
  variant?: HeaderVariant;
  term?: string;
}

export default function MenuHeader({
  currentWeek,
  dates,
  onToggleWeek,
  variant = 'full',
  term = '4',
}: MenuHeaderProps) {
  if (variant === 'static') {
    return (
      <div className="mb-8">
        <h2 className="text-4xl leading-snug font-medium text-[#C65D3B] mb-4">
          Weekly Menu
        </h2>
        <p className="text-2xl leading-relaxed font-light text-black">
          Explore our healthy options for <span className="font-bold text-[#D39885]">Week {currentWeek}</span>.
        </p>
      </div>
    );
  }

  // Variant 1: Inline text links
  if (variant === 'inline-text') {
    return (
      <div className="mb-8">
        <h2 className="text-4xl leading-snug font-medium text-[#C65D3B] mb-4">
          Weekly Menu
        </h2>
        <p className="text-2xl leading-relaxed font-light text-black">
          Explore our healthy options for{' '}
          <button
            onClick={() => onToggleWeek('A')}
            className={`font-bold transition-colors ${
              currentWeek === 'A'
                ? 'text-[#D39885] underline underline-offset-4'
                : 'text-gray-400 hover:text-[#D39885]'
            }`}
          >
            Week A
          </button>
          {' | '}
          <button
            onClick={() => onToggleWeek('B')}
            className={`font-bold transition-colors ${
              currentWeek === 'B'
                ? 'text-[#D39885] underline underline-offset-4'
                : 'text-gray-400 hover:text-[#D39885]'
            }`}
          >
            Week B
          </button>
        </p>
      </div>
    );
  }

  // Variant 2: Small underlined tabs
  if (variant === 'underlined-tabs') {
    return (
      <div className="mb-8">
        <h2 className="text-4xl leading-snug font-medium text-[#C65D3B] mb-2">
          Weekly Menu
        </h2>
        <div className="flex gap-4 mb-4 border-b border-gray-200">
          <button
            onClick={() => onToggleWeek('A')}
            className={`pb-2 text-sm font-medium transition-colors ${
              currentWeek === 'A'
                ? 'text-[#D39885] border-b-2 border-[#D39885] -mb-[1px]'
                : 'text-gray-500 hover:text-[#D39885]'
            }`}
          >
            Week A
          </button>
          <button
            onClick={() => onToggleWeek('B')}
            className={`pb-2 text-sm font-medium transition-colors ${
              currentWeek === 'B'
                ? 'text-[#D39885] border-b-2 border-[#D39885] -mb-[1px]'
                : 'text-gray-500 hover:text-[#D39885]'
            }`}
          >
            Week B
          </button>
        </div>
        <p className="text-2xl leading-relaxed font-light text-black">
          Explore our healthy options for the current term.
        </p>
      </div>
    );
  }

  // Variant 3: Dropdown select
  if (variant === 'dropdown') {
    return (
      <div className="mb-8">
        <h2 className="text-4xl leading-snug font-medium text-[#C65D3B] mb-4">
          Weekly Menu
        </h2>
        <p className="text-2xl leading-relaxed font-light text-black">
          Explore our healthy options for{' '}
          <span className="relative inline-block">
            <select
              value={currentWeek}
              onChange={(e) => onToggleWeek(e.target.value as WeekType)}
              className="appearance-none bg-transparent font-bold text-[#D39885] pr-5 cursor-pointer focus:outline-none border-b border-[#D39885]"
              style={{ fontSize: 'inherit', lineHeight: 'inherit' }}
            >
              <option value="A">Week A</option>
              <option value="B">Week B</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-[#D39885] pointer-events-none"
            />
          </span>
        </p>
      </div>
    );
  }

  // Variant 4: Bottom toggle - returns null, toggle is rendered separately
  if (variant === 'bottom-toggle') {
    return (
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-4xl leading-snug font-medium text-[#C65D3B]">
            Weekly Menu
          </h2>
          <span className="inline-flex items-center justify-center bg-[#D39885] text-white px-4 py-1.5 rounded-full text-lg font-medium tracking-wide">
            Term {term}
          </span>
        </div>
        <p className="text-2xl leading-relaxed font-light text-black">
          Explore our healthy options for <span className="font-bold text-[#D39885]">Week {currentWeek}</span>.
        </p>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <h2 className="text-4xl leading-snug font-medium text-[#C65D3B]">
            Weekly Menu
          </h2>
          <WeekToggle currentWeek={currentWeek} onToggleWeek={onToggleWeek} />
        </div>
        <p className="text-2xl leading-relaxed font-light text-black">
          Explore our healthy options for <span className="font-bold text-[#D39885]">Week {currentWeek}</span>.
        </p>
        <DateRanges dates={dates} />
      </div>
    );
  }

  // Full variant with branding
  return (
    <div className={`${THEME_COLORS.headerBg} text-white py-6 px-6 rounded-t-xl mb-0`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
            <span className="text-xl font-bold">P</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-wide uppercase">Piñadulce</h2>
            <p className="text-xs text-[#D39885] tracking-wider uppercase">Term {term} Menu</p>
          </div>
        </div>

        {/* Week Selector */}
        <WeekToggle currentWeek={currentWeek} onToggleWeek={onToggleWeek} dark />
      </div>

      {/* Date Ranges */}
      <div className="mt-4 pt-4 border-t border-white/20 text-xs md:text-sm text-white/80 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {dates.map((date, idx) => (
          <div key={idx} className="flex items-center gap-1">
            <Calendar size={12} className="text-[#D39885]" />
            <span>{date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface WeekToggleProps {
  currentWeek: WeekType;
  onToggleWeek: (week: WeekType) => void;
  dark?: boolean;
}

function WeekToggle({ currentWeek, onToggleWeek, dark }: WeekToggleProps) {
  const baseClasses = dark
    ? 'bg-white/10 border border-white/20'
    : 'bg-gray-100 border border-gray-200';

  const activeClasses = 'bg-[#D39885] text-white shadow-md';
  const inactiveClasses = dark
    ? 'text-white/70 hover:text-white'
    : 'text-gray-600 hover:text-gray-900';

  return (
    <div className={`flex items-center rounded-full p-1 ${baseClasses}`}>
      <button
        onClick={() => onToggleWeek('A')}
        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
          currentWeek === 'A' ? activeClasses : inactiveClasses
        }`}
      >
        WEEK A
      </button>
      <button
        onClick={() => onToggleWeek('B')}
        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
          currentWeek === 'B' ? activeClasses : inactiveClasses
        }`}
      >
        WEEK B
      </button>
    </div>
  );
}

function DateRanges({ dates }: { dates: string[] }) {
  return (
    <div className="mt-4 text-sm text-gray-600 flex flex-wrap gap-x-6 gap-y-2">
      {dates.map((date, idx) => (
        <div key={idx} className="flex items-center gap-1">
          <Calendar size={14} className="text-[#D39885]" />
          <span>{date}</span>
        </div>
      ))}
    </div>
  );
}

// Exported for bottom-toggle variant
export function BottomToggle({
  currentWeek,
  onToggleWeek,
}: {
  currentWeek: WeekType;
  onToggleWeek: (week: WeekType) => void;
}) {
  return (
    <div className="flex justify-center items-center gap-2 py-4 text-sm text-gray-600">
      <span>Viewing:</span>
      <button
        onClick={() => onToggleWeek('A')}
        className={`px-3 py-1 rounded transition-colors ${
          currentWeek === 'A'
            ? 'bg-[#D39885] text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Week A
      </button>
      <button
        onClick={() => onToggleWeek('B')}
        className={`px-3 py-1 rounded transition-colors ${
          currentWeek === 'B'
            ? 'bg-[#D39885] text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Week B
      </button>
    </div>
  );
}

export type { HeaderVariant };
