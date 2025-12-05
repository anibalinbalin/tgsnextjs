'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'

export default function PathholisticSection() {
    const t = useTranslations('PathwaysPage')

    return (
        <section className="relative grid grid-cols-1 md:grid-cols-2">
            <div className="bg-[#8EB096] py-12 md:py-20 px-6 flex items-center">
                <div className="max-w-xl ml-auto mr-8">
                    <div className="text-black space-y-6 text-2xl leading-relaxed font-light">
                        <p>{t('holistic.p1')}</p>
                        <p>{t('holistic.p2')}</p>
                    </div>
                </div>
            </div>
            <div className="relative min-h-[400px] md:min-h-0">
                <Image
                    src="/assets/5-co-curricular/1-pathways/_DSC1960.jpg"
                    alt={t('holistic.imageAlt')}
                    fill
                    className="object-cover"
                />
            </div>
            <DevBadge name="pathholistic-section" />
        </section>
    )
}
