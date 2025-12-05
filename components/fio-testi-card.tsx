'use client'

import { useTranslations } from 'next-intl'
import TestimonialCard from './testimonial-card'

export default function FioTestiCard() {
    const t = useTranslations('TranslanguagingPage')

    return (
        <TestimonialCard
            name={t('testimonial.name')}
            subtitle={t('testimonial.subtitle')}
            quote={t('testimonial.quote')}
            imageSrc="/assets/0_mainpage/staff/Fio.JPG"
            hideButton
            inverted
            textBlack
        />
    )
}
