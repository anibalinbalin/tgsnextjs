'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import DevBadge from './dev-badge'

export default function TalentpoolSection() {
    const t = useTranslations('WorkPage')

    return (
        <section className="relative">
            {/* Hero Image */}
            <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                    src="/assets/1_ourschool/7-great_place/EleazarCuadros29_RosanBosh_3.jpg"
                    alt={t('talentpool.imageAlt')}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="bg-[#D39885] py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8">
                        {t('talentpool.title')}
                    </h2>

                    <p className="text-lg md:text-xl text-white/90 mb-6">
                        {t('talentpool.p1')}
                    </p>

                    <p className="text-lg md:text-xl text-white/90 mb-10">
                        {t('talentpool.p2')}
                    </p>

                    <Button
                        variant="outline"
                        className="bg-white text-[#D39885] border-white hover:bg-white/90 hover:text-[#D39885] px-8 py-6 text-base"
                    >
                        {t('talentpool.button')}
                    </Button>
                </div>
            </div>
            <DevBadge name="talentpool-section" />
        </section>
    )
}
