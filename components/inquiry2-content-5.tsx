'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function Inquiry2Content5() {
    const t = useTranslations('InquiryPage')

    return (
        <ContentBlock name="inquiry2-content-5" className="py-12 md:py-20 bg-white">
            <p className="text-2xl leading-relaxed font-light text-black">{t('content.benefits')}</p>
        </ContentBlock>
    )
}
