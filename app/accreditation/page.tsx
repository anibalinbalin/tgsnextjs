import React from 'react'
import FooterSection from '@/components/footer'
import AcrediHero from '@/components/acredi-hero'
import AnepAcreSection from '@/components/anep-acre-section'
import NeascSection from '@/components/neasc-section'
import NeascBanner from '@/components/neasc-banner'
import CommitAccre5 from '@/components/commit-accre-5'
import GuidingFinal from '@/components/guiding-final'

export default function AccreditationPage() {
    return (
        <>
            <AcrediHero />

            <AnepAcreSection />

            <NeascSection />

            <NeascBanner />

            <CommitAccre5 />

            <GuidingFinal />

            <FooterSection />
        </>
    )
}
