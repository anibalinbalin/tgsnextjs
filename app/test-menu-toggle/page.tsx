'use client';

import { useState } from 'react';
import { WEEK_A, WEEK_B } from '@/components/menu-table/constants';
import { WeekType } from '@/components/menu-table/types';
import MenuHeader, { BottomToggle } from '@/components/menu-table/menu-header';
import MenuGrid from '@/components/menu-table/menu-grid';
import MenuMobile from '@/components/menu-table/menu-mobile';

function ToggleVariantSection({
  title,
  description,
  variant,
}: {
  title: string;
  description: string;
  variant: 'inline-text' | 'underlined-tabs' | 'dropdown' | 'bottom-toggle';
}) {
  const [currentWeek, setCurrentWeek] = useState<WeekType>('A');
  const activeData = currentWeek === 'A' ? WEEK_A : WEEK_B;

  return (
    <div className="py-8">
      <div className="mx-auto max-w-5xl px-6 mb-4">
        <h2 className="text-xl font-bold text-[#C65D3B] border-b-2 border-[#D39885] pb-2 inline-block">
          {title}
        </h2>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>

      <section className="bg-white py-8">
        <div className="mx-auto max-w-5xl px-6">
          <MenuHeader
            currentWeek={currentWeek}
            dates={activeData.dates}
            onToggleWeek={setCurrentWeek}
            variant={variant}
          />

          {/* Desktop View */}
          <div className="hidden lg:block">
            <MenuGrid days={activeData.days} />
          </div>

          {/* Mobile View */}
          <div className="lg:hidden">
            <MenuMobile days={activeData.days} />
          </div>

          {/* Bottom toggle for variant 4 */}
          {variant === 'bottom-toggle' && (
            <BottomToggle currentWeek={currentWeek} onToggleWeek={setCurrentWeek} />
          )}
        </div>
      </section>
    </div>
  );
}

export default function TestMenuTogglePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-8 px-6 bg-white border-b">
        <h1 className="text-3xl font-bold text-center">Subtle Toggle Variants</h1>
        <p className="text-center text-gray-600 mt-2">
          Clean C-style heading with different toggle approaches
        </p>
      </div>

      {/* Variant 1: Inline text links */}
      <ToggleVariantSection
        title="1. Inline Text Links"
        description={`"Explore options for Week A | Week B" - clickable text inline with the sentence`}
        variant="inline-text"
      />

      <hr className="border-t-4 border-[#8EB096]" />

      {/* Variant 2: Small underlined tabs */}
      <div className="bg-gray-50">
        <ToggleVariantSection
          title="2. Small Underlined Tabs"
          description="Tiny tabs under the heading with underline indicator"
          variant="underlined-tabs"
        />
      </div>

      <hr className="border-t-4 border-[#8EB096]" />

      {/* Variant 3: Dropdown select */}
      <ToggleVariantSection
        title="3. Dropdown Select"
        description={`Simple inline dropdown: "Week A ▼" - very compact`}
        variant="dropdown"
      />

      <hr className="border-t-4 border-[#8EB096]" />

      {/* Variant 4: Bottom of table */}
      <div className="bg-gray-50">
        <ToggleVariantSection
          title="4. Bottom of Table"
          description="Toggle at the bottom instead of header - less prominent"
          variant="bottom-toggle"
        />
      </div>
    </div>
  );
}
