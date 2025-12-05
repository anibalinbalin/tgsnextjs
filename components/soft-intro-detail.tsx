'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function SoftIntroDetail() {
    const t = useTranslations('SoftlandingPage')

    return (
        <ContentBlock name="soft-intro-detail" className="py-12 md:py-20 bg-white">
            <p className="text-2xl leading-relaxed font-light text-black">{t('intro')}</p>
        </ContentBlock>
    )
}
