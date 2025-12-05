'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function Content5Gov() {
    const t = useTranslations('GovernancePage')

    return (
        <ContentBlock name="content-5-gov" className="py-12 md:py-20 bg-[#D39885]">
            <p className="text-2xl leading-relaxed font-light text-white">{t('intro')}</p>
        </ContentBlock>
    )
}
