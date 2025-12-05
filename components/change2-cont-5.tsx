'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function Change2Cont5() {
    const t = useTranslations('EducatingChangingWorldPage')

    return (
        <ContentBlock name="change2-cont-5" className="py-12 md:py-20 bg-white">
            <h2 className="text-balance text-center text-black text-3xl md:text-4xl font-light mb-6 underline decoration-[#D39885]">{t('engagedMinds.title')}</h2>
            <p className="text-2xl leading-relaxed font-light text-black">{t.rich('engagedMinds.content', {
                apostrophe: () => <span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>&apos;</span>
            })}</p>
        </ContentBlock>
    )
}
