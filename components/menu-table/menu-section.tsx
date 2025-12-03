'use client';

import { useState } from 'react';
import { WEEK_A, WEEK_B } from './constants';
import { WeekType, WeekData } from './types';
import MenuHeader, { BottomToggle, HeaderVariant } from './menu-header';
import MenuGrid from './menu-grid';
import MenuMobile from './menu-mobile';
import MenuFooter from './menu-footer';
import DevBadge from '../dev-badge';

interface MenuSectionProps {
  headerVariant?: HeaderVariant;
  showFooter?: boolean;
  /** Optional menu data from Google Sheets. Falls back to constants if not provided. */
  data?: { weekA: WeekData; weekB: WeekData };
}

export default function MenuSection({
  headerVariant = 'full',
  showFooter = true,
  data,
}: MenuSectionProps) {
  const [currentWeek, setCurrentWeek] = useState<WeekType>('A');

  // Use provided data or fall back to constants
  const weekA = data?.weekA ?? WEEK_A;
  const weekB = data?.weekB ?? WEEK_B;
  const activeData = currentWeek === 'A' ? weekA : weekB;

  return (
    <section className="relative py-12 md:py-20 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        {headerVariant !== 'full' && (
          <MenuHeader
            currentWeek={currentWeek}
            dates={activeData.dates}
            onToggleWeek={setCurrentWeek}
            variant={headerVariant}
          />
        )}

        <div className={headerVariant === 'full' ? 'rounded-xl shadow-xl overflow-hidden border-2 border-black' : ''}>
          {headerVariant === 'full' && (
            <MenuHeader
              currentWeek={currentWeek}
              dates={activeData.dates}
              onToggleWeek={setCurrentWeek}
              variant="full"
            />
          )}

          {/* Desktop View */}
          <div className="hidden lg:block">
            <MenuGrid days={activeData.days} />
          </div>

          {/* Mobile View */}
          <div className="lg:hidden">
            <MenuMobile days={activeData.days} />
          </div>

          {showFooter && headerVariant === 'full' && <MenuFooter />}
        </div>

        {/* Bottom toggle for 'bottom-toggle' variant */}
        {headerVariant === 'bottom-toggle' && (
          <BottomToggle currentWeek={currentWeek} onToggleWeek={setCurrentWeek} />
        )}

        {showFooter && headerVariant !== 'full' && (
          <div className="mt-8">
            <MenuFooter />
          </div>
        )}
      </div>
      <DevBadge name="menu-section" />
    </section>
  );
}
