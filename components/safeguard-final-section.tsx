'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import DevBadge from './dev-badge'

interface SafeguardFinalSectionProps {
    noClipPath?: boolean
}

export default function SafeguardFinalSection({ noClipPath }: SafeguardFinalSectionProps) {
    const t = useTranslations('Common')

    return (
        <section
            className="relative h-[50rem] overflow-hidden"
            style={noClipPath ? undefined : { clipPath: 'polygon(0 0, 75% 15%, 100% 0, 100% 100%, 0 100%)' }}
        >
            <Image
                src="/assets/1_ourschool/6-safeguarding/DSC_0924.jpg"
                alt={t('applyCta.imageAlt')}
                fill
                className="object-cover"
                priority={false}
            />
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10 @container mx-auto max-w-5xl px-6 h-full flex items-center justify-start">
                <div className="text-left space-y-8">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl text-balance text-white font-medium whitespace-pre-line">{t('applyCta.title')}</h2>
                    <p className="text-white text-xl">{t('applyCta.subtitle')}</p>
                    <div className="flex justify-start">
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-terracotta hover:bg-terracotta/90 text-white border-terracotta"
                        >
                            {t('applyCta.button')}
                        </Button>
                    </div>
                </div>
            </div>
            <DevBadge name="safeguard-final-section" />
        </section>
    )
}
