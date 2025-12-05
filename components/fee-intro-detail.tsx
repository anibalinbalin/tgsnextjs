'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function FeeIntroDetail() {
    const t = useTranslations('FeesPage')

    return (
        <ContentBlock name="fee-intro-detail" className="py-12 md:py-20 bg-white">
            <h2 className="text-3xl md:text-4xl font-medium text-[#C65D3B] mb-6">{t('intro.title')}</h2>
            <p className="text-2xl leading-relaxed font-light text-black">{t('intro.description')}</p>
        </ContentBlock>
    )
}
