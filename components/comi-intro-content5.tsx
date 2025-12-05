'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function ComiIntroContent5() {
    const t = useTranslations('CommitteesPage')

    return (
        <ContentBlock name="comi-intro-content5" className="pt-12 md:pt-20 bg-white">
            <p className="text-2xl leading-relaxed font-light text-black">{t('intro')}</p>
        </ContentBlock>
    )
}
