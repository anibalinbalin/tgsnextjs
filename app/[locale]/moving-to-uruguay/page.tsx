'use client'

import { useTranslations } from 'next-intl'
import MovingHero from '@/components/moving-hero'
import MovingIntroDetail from '@/components/moving-intro-detail'
import SoftlandingIntro from '@/components/softlanding-intro'
import Quality5Join from '@/components/quality5-join'
import Community5Join from '@/components/community5-join'
import Outdoors5Join from '@/components/outdoors5-join'
import Environment5Join from '@/components/environment5-join'
import TestimonialCard from '@/components/testimonial-card'
import FallinloveFinalSection from '@/components/fallinlove-final-section'
import NondiscDetail from '@/components/nondisc-detail'
import Footer from '@/components/footer'

export default function MovingToUruguayPage() {
    const t = useTranslations('MovingToUruguayPage')

    return (
        <>
            <MovingHero />
            <MovingIntroDetail />
            <SoftlandingIntro />
            <Quality5Join />
            <Community5Join />
            <Outdoors5Join />
            <Environment5Join />
            <TestimonialCard
                name="Sam"
                quote={t('testimonial.quote')}
                imageSrc="/assets/2_admissions/5-moving/Sam.JPG"
                subtitle={t('testimonial.subtitle')}
                hideButton
            />
            <FallinloveFinalSection />
            <NondiscDetail />
            <Footer />
        </>
    )
}
