'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'
import { Button } from './ui/button'

export default function TeamCtaHero() {
    const t = useTranslations('TeamCtaPage')

    return (
        <div className="relative h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/1_ourschool/7-great_place/DSC_6360.jpg)' }}>
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10">
                <main>
                    <section>
                        <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                            <div className="relative mx-auto flex max-w-6xl flex-col px-6">
                                <div className="mx-auto max-w-5xl text-center">
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl mt-8 font-medium text-white lg:mt-16 whitespace-nowrap">{t('hero.title1')}<br />{t('hero.title2')}</h1>
                                    <div className="mt-8">
                                        <Button size="lg" className="px-8 py-6 bg-[#D39885] hover:bg-[#C65D3B] text-white">
                                            {t('hero.button')}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <DevBadge name="team-cta-hero" />
        </div>
    )
}
