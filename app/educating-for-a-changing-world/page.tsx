import React from 'react'
import { HeroHeader } from '@/components/header'
import DevBadge from '@/components/dev-badge'
import FooterSection from '@/components/footer'
import Changing5 from '@/components/changing-5'
import Change1Content5 from '@/components/change1-content5'
import Change2Cont5 from '@/components/change2-cont-5'
import Change3Cont5 from '@/components/change3-cont5'
import Change3Cont5Text from '@/components/change3-cont-5'
import Change4Cont5 from '@/components/change4-cont5'
import ChangeFinalCont5 from '@/components/changefinal-cont-5'
import WellFinalSection from '@/components/well-final-section'

export default function EducatingForAChangingWorldPage() {
    return (
        <>
            <div className="relative h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/3-learning/4-changing/EleazarCuadros.2025_RosanBoshPrevios_56.jpg)' }}>
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="relative z-10">
                    <HeroHeader />
                    <main>
                    <section>
                        <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
                                        Beyond Grades. Beyond Screens. Beyond the expected.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                </div>
                <DevBadge name="educating-hero" />
            </div>

            <Changing5 />

            <Change1Content5 />

            <Change2Cont5 />

            <Change3Cont5 />

            <Change3Cont5Text />

            <Change4Cont5 />

            <ChangeFinalCont5 />

            <WellFinalSection />

            <FooterSection />
        </>
    )
}
