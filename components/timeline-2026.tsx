'use client'

import Image from 'next/image'
import DevBadge from './dev-badge'
import { Button } from './ui/button'
import { useTranslations } from 'next-intl'

export default function Timeline2026() {
    const t = useTranslations('HowToJoinPage')
    return (
        <section className="relative bg-[#D39885] py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">
                    {/* Left: Image */}
                    <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                        <Image
                            src="/assets/2_admissions/1-joinus/DSC_0059.jpg"
                            alt={t('timeline.imageAlt')}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="text-white">
                        <h2 className="text-3xl md:text-4xl font-medium mb-6">{t('timeline.title')}</h2>
                        <p className="text-2xl leading-relaxed font-light mb-8">
                            {t('timeline.description')}
                        </p>

                        {/* Deadline box */}
                        <div className="bg-white/90 rounded-2xl p-6 text-[#D39885] text-center mb-8">
                            <p className="text-xl md:text-2xl font-medium">{t('timeline.deadlineLabel')}</p>
                            <p className="text-2xl md:text-3xl font-medium">{t('timeline.deadlineDate')}</p>
                        </div>

                        <p className="text-2xl leading-relaxed font-light mb-6" dangerouslySetInnerHTML={{ __html: t.raw('timeline.decisionText') }} />

                        {/* Subsections with underlined headings */}
                        <div className="mb-6">
                            <h3 className="text-lg font-medium underline mb-2">{t('timeline.rollingTitle')}</h3>
                            <p className="text-2xl leading-relaxed font-light">
                                {t('timeline.rollingText')}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-medium underline mb-2">{t('timeline.relocatingTitle')}</h3>
                            <p className="text-2xl leading-relaxed font-light">
                                {t('timeline.relocatingText')}
                            </p>
                        </div>

                        <Button asChild className="bg-white/90 hover:bg-white text-[#D39885] border-white/50">
                            <a href="mailto:admissions@thegarzonschool.edu.uy?subject=Admissions">{t('timeline.applyNow')}</a>
                        </Button>
                    </div>
                </div>
            </div>
            <DevBadge name="timeline-2026" />
        </section>
    )
}
