'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function WellbeingFinalContent5() {
    const t = useTranslations('WellbeingPage')
    return (
        <ContentBlock name="wellbeingfinal-content5" className="py-12 md:py-20 bg-white">
            <p className="text-2xl leading-relaxed font-light text-black">{t('educators')}</p>
        </ContentBlock>
    )
}
