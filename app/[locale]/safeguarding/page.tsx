import React from 'react'
import SafeguardHero from '@/components/safeguard-hero'
import SafeIdeasDetail from '@/components/safe-ideas-detail'
import SafePartnerDetail from '@/components/safe-partner-detail'
import SafeQuote from '@/components/safe-quote'
import ProactiveSection from '@/components/proactive-section'
import SafeguardingTeam from '@/components/safeguarding-team'
import ChildSafeguardingFeature from '@/components/childsafeguarding-feature'
import SafeguardFinalSection from '@/components/safeguard-final-section'
import Footer from '@/components/footer'

export default function SafeguardingPage() {
    return (
        <>
            <SafeguardHero />
            <SafeIdeasDetail />
            <SafePartnerDetail />
            <SafeQuote />
            <ProactiveSection />
            <SafeguardingTeam />
            <ChildSafeguardingFeature />
            <SafeguardFinalSection />
            <Footer />
        </>
    )
}
