'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { HeroHeader } from '@/components/header'
import DevBadge from '@/components/dev-badge'

export default function HeronHero() {
    const t = useTranslations('HeronPage')

    return (
        <div className="relative h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/5-co-curricular/2-theheron/DSCF6452.jpg)' }}>
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10">
                <HeroHeader />
                <main>
                    <section>
                        <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
                                        {t('hero.title')}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <DevBadge name="heron-hero" />
        </div>
    )
}
