'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function RosanquoteSection() {
    const t = useTranslations('LearningVillagePage')

    return (
        <ContentBlock name="rosanquote-section" className="py-12 md:py-20 bg-[#D39885]">
            <p className="text-4xl md:text-4xl text-white font-light leading-relaxed">{t('rosanQuote.quote')}</p>
            <p className="text-xl text-white font-medium mt-4">{t('rosanQuote.attribution')}</p>
        </ContentBlock>
    )
}
