'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function OurcampusSection5() {
    const t = useTranslations('LearningVillagePage')

    return (
        <ContentBlock name="ourcampus-section5" className="py-12 md:py-20 bg-white">
            <p className="text-2xl leading-relaxed font-light text-black">{t('campusSize')}</p>
        </ContentBlock>
    )
}
