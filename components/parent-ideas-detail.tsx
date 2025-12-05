'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function ParentIdeasDetail() {
    const t = useTranslations('TestimonialsPage')

    return (
        <ContentBlock name="parent-ideas-detail" className="py-12 md:py-20 bg-white">
            <p className="text-2xl leading-relaxed font-light text-[#D39885]">{t('intro')}</p>
        </ContentBlock>
    )
}
