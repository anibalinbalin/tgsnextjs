'use client'

import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'

export default function NeascBanner() {
    const t = useTranslations('AccreditationPage')

    return (
        <div className="relative bg-white">
            <div className="relative pt-12 md:pt-20">
                <img
                    src="/assets/3-learning/5-accreditation/_28202529_RosanBoshPrevios_1.jpg"
                    alt={t('neascBanner.imageAlt')}
                    className="w-full h-[300px] md:h-[400px] object-cover object-center"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 mt-12 md:mt-20">
                    <div className="text-center text-white px-6 max-w-4xl">
                        <blockquote className="text-4xl md:text-4xl font-light leading-relaxed">
                            {t('neascBanner.quote')}
                        </blockquote>
                        <p className="mt-6 text-lg md:text-xl font-medium">
                            {t('neascBanner.attribution')}
                        </p>
                    </div>
                </div>
            </div>
            <DevBadge name="neasc-banner" />
        </div>
    )
}
