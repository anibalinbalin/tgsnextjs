'use client';

import TuitionTable from './tuition-table';
import SchoolFeesTable from './school-fees';
import DevBadge from '../dev-badge';

export default function FeesTableSection() {
  return (
    <section className="relative bg-white py-8 md:py-12 font-[var(--font-roboto-mono)]">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-8">
          <TuitionTable />
          <SchoolFeesTable />
        </div>
      </div>
      <DevBadge name="fees-table-section" />
    </section>
  );
}
