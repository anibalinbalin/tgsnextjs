'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function Well2Cont5() {
    const t = useTranslations('WellbeingPage')
    return (
        <ContentBlock name="well2-cont-5" className="py-12 md:py-20 bg-[#D39885]">
            <p className="text-2xl leading-relaxed font-light text-white">{t('inclusion')}</p>
        </ContentBlock>
    )
}
