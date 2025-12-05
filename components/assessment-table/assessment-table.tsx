'use client';

import { useTranslations } from 'next-intl';
import { ASSESSMENT_COLORS } from './constants';
import DevBadge from '../dev-badge';

export default function AssessmentTable() {
  const t = useTranslations('CurriculumPage');

  const assessmentTypes = ['forLearning', 'asLearning', 'ofLearning'] as const;
  const colorMap = {
    forLearning: ASSESSMENT_COLORS.forLearning,
    asLearning: ASSESSMENT_COLORS.asLearning,
    ofLearning: ASSESSMENT_COLORS.ofLearning,
  };

  return (
    <section className="relative bg-white py-12 md:py-20 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 rounded-lg overflow-hidden border-4 border-[#5a4a3a]">
          {assessmentTypes.map((assessmentType) => {
            const bullets = t.raw(`assessment.${assessmentType}.bullets`) as string[];
            return (
              <div key={assessmentType} className="flex flex-col">
                {/* Header */}
                <div
                  className={`${colorMap[assessmentType].header} py-6 px-4 text-center`}
                >
                  <h3 className="text-white text-xl md:text-2xl font-medium tracking-[0.15em] uppercase">
                    {t('assessment.title')}
                  </h3>
                  <p className="text-white text-2xl md:text-3xl font-medium tracking-[0.15em] uppercase mt-1">
                    <span className="underline decoration-2 underline-offset-4">
                      {t(`assessment.${assessmentType}.keyword`)}
                    </span>{' '}
                    {t('assessment.learning')}
                  </p>
                </div>

                {/* Content */}
                <div
                  className={`${colorMap[assessmentType].content} flex-1 py-6 px-5`}
                >
                  <ul className="space-y-4">
                    {bullets.map((bullet, index) => (
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
            );
          })}
        </div>
      </div>
      <DevBadge name="assessment-table" />
    </section>
  );
}
