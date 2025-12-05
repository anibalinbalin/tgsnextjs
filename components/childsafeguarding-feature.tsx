'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'

export default function ChildSafeguardingFeature() {
    const t = useTranslations('SafeguardingPage')

    return (
        <section
            className="relative py-16 md:py-24 bg-white"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 75% 100%, 0 85%)' }}
        >
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col items-center text-center">
                    <div className="relative w-full max-w-xl h-24 md:h-32 mb-8 md:mb-12">
                        <Image
                            src="/assets/1_ourschool/6-safeguarding/CSG_Logo.png"
                            alt={t('childSafeguarding.logoAlt')}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <p className="text-2xl leading-relaxed font-light text-gray-700 max-w-4xl text-justify">
                        {t('childSafeguarding.content')}
                    </p>
                </div>
            </div>
            <DevBadge name="childsafeguarding-feature" />
        </section>
    )
}
