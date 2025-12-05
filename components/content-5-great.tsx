'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function Content5Great() {
    const t = useTranslations('WorkPage')

    return (
        <ContentBlock name="content-5-great" className="py-12 md:py-20 bg-[#D39885]">
            <p className="text-2xl leading-relaxed font-light text-white">{t('content5')}</p>
        </ContentBlock>
    )
}
