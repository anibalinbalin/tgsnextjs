import React from 'react'
import { HeroHeader } from '@/components/header'
import DevBadge from '@/components/dev-badge'

export default function AcrediHero() {
    return (
        <div className="relative h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/3-learning/5-accreditation/EleazarCuadros.28202529_RosanBosh-Previos_55.jpg)' }}>
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10">
                <HeroHeader />
                <main>
                    <section>
                        <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
                                        Recognised locally. Rising globally.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <DevBadge name="acredi-hero" />
        </div>
    )
}
