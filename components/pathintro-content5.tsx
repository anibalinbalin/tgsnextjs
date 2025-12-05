'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function PathintroContent5() {
    const t = useTranslations('PathwaysPage')

    return (
        <ContentBlock name="pathintro-content5" className="py-12 md:py-20 bg-white">
            <p className="text-center text-black text-2xl leading-relaxed font-light">{t('intro')}</p>
        </ContentBlock>
    )
}
