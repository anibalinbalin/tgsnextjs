'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'

export default function HeronIntro() {
    const t = useTranslations('HeronPage')

    return (
        <section className="relative bg-terracotta pb-32">
            <div className="@container mx-auto max-w-7xl px-6 pt-12">
                <div className="mx-auto max-w-4xl text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">{t('intro.title')}</h2>
                    <p className="text-white text-lg md:text-xl">{t('intro.p1')}</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto grid max-w-sm gap-6 md:mt-8">
                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] rounded-lg">
                            <Image
                                src="/assets/5-co-curricular/2-theheron/IMG_8619.JPG"
                                alt={t('intro.imageAlt')}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] rounded-lg">
                            <Image
                                src="/assets/5-co-curricular/2-theheron/DSC_49924.jpg"
                                alt={t('intro.imageAlt')}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] rounded-lg">
                            <Image
                                src="/assets/5-co-curricular/2-theheron/IMG_82774.jpg"
                                alt={t('intro.imageAlt')}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
                <p className="text-white text-lg md:text-xl text-center mt-12">{t('intro.p2')}</p>
            </div>
            <DevBadge name="heron-intro" />
        </section>
    )
}
