'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'
import { Button } from './ui/button'

export default function ComeLevels() {
    const t = useTranslations('OpenMorningsPage')

    return (
        <section className="relative bg-[#D39885] pb-32">
            <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
                <div className="mx-auto max-w-4xl space-y-6 text-justify">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">{t('discover.title')}</h2>
                    <p className="text-2xl leading-relaxed font-light text-white">{t('discover.description')}</p>
                </div>
            </div>
            <div className="@container mx-auto max-w-7xl px-6">
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto grid max-w-sm gap-6 md:mt-8">
                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] mb-6 rounded-lg">
                            <Image
                                src="/assets/2_admissions/1-joinus/_DSC0643_3.JPG"
                                alt={t('events.june.imageAlt')}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-white mb-6">{t('events.june.date')}</h3>
                            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-terracotta">
                                <a href="https://forms.gle/vLnDSUrsovLX5Do19" target="_blank" rel="noopener noreferrer">{t('events.rsvp')}</a>
                            </Button>
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] mb-6 rounded-lg">
                            <Image
                                src="/assets/2_admissions/1-joinus/2025RosanBoshPrevios_11.jpg"
                                alt={t('events.august.imageAlt')}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-white mb-6">{t('events.august.date')}</h3>
                            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-terracotta">
                                <a href="https://forms.gle/vLnDSUrsovLX5Do19" target="_blank" rel="noopener noreferrer">{t('events.rsvp')}</a>
                            </Button>
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] mb-6 rounded-lg">
                            <Image
                                src="/assets/2_admissions/1-joinus/EleazarCuadros2025_RosanBosh_13.jpg"
                                alt={t('events.november.imageAlt')}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-white mb-6">{t('events.november.date')}</h3>
                            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-terracotta">
                                <a href="https://forms.gle/vLnDSUrsovLX5Do19" target="_blank" rel="noopener noreferrer">{t('events.rsvp')}</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <DevBadge name="come-levels" />
        </section>
    )
}
