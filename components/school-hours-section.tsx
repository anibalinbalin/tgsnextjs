'use client'

import { useTranslations } from 'next-intl'
import DevBadge from '@/components/dev-badge'

export default function SchoolHoursSection() {
    const t = useTranslations('DayPage')

    return (
        <section className="relative py-16 md:py-24 bg-white">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-4xl space-y-4">
                    {/* K2-K3 Card */}
                    <div className="bg-[#8EB096] rounded-lg p-8 md:p-12 text-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
                            {t('hours.k2k3.title')}
                        </h3>
                        <p className="text-lg md:text-xl text-black">
                            <span className="font-semibold">{t('hours.k2k3.curricular')}</span> {t('hours.k2k3.time')}
                        </p>
                        <p className="text-lg md:text-xl text-black mt-2">
                            {t('hours.k2k3.nap')}
                        </p>
                    </div>

                    {/* K4-S2 Card */}
                    <div className="bg-[#8EB096] rounded-lg p-8 md:p-12 text-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
                            {t('hours.k4s2.title')}
                        </h3>
                        <p className="text-lg md:text-xl text-black">
                            <span className="font-semibold">{t('hours.k4s2.curricular')}</span> {t('hours.k4s2.time')}
                        </p>
                        <p className="text-lg md:text-xl text-black mt-2">
                            <span className="font-semibold">{t('hours.k4s2.coCurricular')}</span> {t('hours.k4s2.coCurricularTime')}
                        </p>
                    </div>
                </div>
            </div>
            <DevBadge name="school-hours-section" />
        </section>
    )
}
