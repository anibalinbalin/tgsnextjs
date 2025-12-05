'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import DevBadge from './dev-badge'

export default function CurriculumContent5Final() {
    const t = useTranslations('CurriculumPage')

    return (
        <section
            className="relative h-[50rem] overflow-hidden"
        >
            <Image
                src="/assets/3-learning/0-curriculum/EleazarCuadros_RosanBoshPrevios_49.jpg"
                alt={t('cta.imageAlt')}
                fill
                className="object-cover"
                priority={false}
            />
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10 @container mx-auto max-w-5xl px-6 h-full flex items-center justify-start">
                <div className="text-left space-y-8">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl text-balance text-white font-medium whitespace-pre-line">{t('cta.title')}</h2>
                    <p className="text-white text-xl">{t('cta.subtitle')}</p>
                    <div className="flex justify-start">
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-terracotta hover:bg-terracotta/90 text-white border-terracotta"
                        >
                            {t('cta.button')}
                        </Button>
                    </div>
                </div>
            </div>
            <DevBadge name="curriculum-content-5-final" />
        </section>
    )
}
