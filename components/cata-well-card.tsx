'use client'

import { useTranslations } from 'next-intl'
import TestimonialCard from './testimonial-card'

export default function CataWellCard() {
    const t = useTranslations('WellbeingPage')
    return (
        <TestimonialCard
            name="Catalina Garat"
            subtitle={t('testimonial.subtitle')}
            quote={t('testimonial.quote')}
            imageSrc="/assets/3-learning/2-wellbeing/Cata.jpg"
            hideButton
            inverted
            textBlack
        />
    )
}
