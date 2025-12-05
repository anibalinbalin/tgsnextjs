'use client'

import { useTranslations } from 'next-intl'
import TestiHero from '@/components/testi-hero'
import ParentIdeasDetail from '@/components/parent-ideas-detail'
import TestimonialCard from '@/components/testimonial-card'
import FallinloveFinalSection from '@/components/fallinlove-final-section'
import FooterSection from '@/components/footer'

export default function TestimonialsPage() {
    const t = useTranslations('TestimonialsPage')

    return (
        <main>
            <TestiHero />
            <ParentIdeasDetail />
            <TestimonialCard
                name="Aníbal"
                quote={t('testimonials.anibal.quote')}
                imageSrc="/assets/2_admissions/4-testimonials/_DSC2772.jpg"
                href="/testimonial1"
                buttonText={t('testimonials.anibal.readMore')}
            />
            <TestimonialCard
                name="Hannah"
                quote={t('testimonials.hannah.quote')}
                imageSrc="/assets/2_admissions/4-testimonials/_DSC2716.jpg"
                href="/testimonial2"
                buttonText={t('testimonials.hannah.readMore')}
                flipped
                inverted
            />
            <TestimonialCard
                name="Adam"
                quote={t('testimonials.adam.quote')}
                imageSrc="/assets/2_admissions/4-testimonials/TGS-11.jpg"
                href="/testimonial3"
                buttonText={t('testimonials.adam.readMore')}
            />
            <TestimonialCard
                name="Isabella"
                quote={t('testimonials.isabella.quote')}
                imageSrc="/placeholder.svg"
                href="/testimonial4"
                buttonText={t('testimonials.isabella.readMore')}
                flipped
                inverted
            />
            <TestimonialCard
                name="David"
                quote={t('testimonials.david.quote')}
                imageSrc="/placeholder.svg"
                href="/testimonial5"
                buttonText={t('testimonials.david.readMore')}
            />
            <FallinloveFinalSection />
            <FooterSection />
        </main>
    )
}
