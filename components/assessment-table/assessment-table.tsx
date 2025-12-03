'use client';

import { ASSESSMENT_DATA } from './constants';
import { AssessmentColumn } from './types';
import DevBadge from '../dev-badge';

export default function AssessmentTable() {
  return (
    <section className="relative bg-white py-12 md:py-20 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 rounded-lg overflow-hidden border-4 border-[#5a4a3a]">
          {ASSESSMENT_DATA.map((column: AssessmentColumn) => (
            <div key={column.id} className="flex flex-col">
              {/* Header */}
              <div
                className={`${column.colors.header} py-6 px-4 text-center`}
              >
                <h3 className="text-white text-xl md:text-2xl font-medium tracking-[0.15em] uppercase">
                  ASSESSMENT
                </h3>
                <p className="text-white text-2xl md:text-3xl font-medium tracking-[0.15em] uppercase mt-1">
                  <span className="underline decoration-2 underline-offset-4">
                    {column.keyword}
                  </span>{' '}
                  LEARNING
                </p>
              </div>

              {/* Content */}
              <div
                className={`${column.colors.content} flex-1 py-6 px-5`}
              >
                <ul className="space-y-4">
                  {column.bullets.map((bullet, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white text-base md:text-lg font-light leading-relaxed"
                    >
                      <span className="mt-2 w-2 h-2 rounded-full bg-white flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DevBadge name="assessment-table" />
    </section>
  );
}
