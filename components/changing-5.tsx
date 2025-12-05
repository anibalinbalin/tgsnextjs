'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function Changing5() {
    const t = useTranslations('EducatingChangingWorldPage')

    return (
        <ContentBlock name="changing-5" className="py-12 md:py-20 bg-white">
            <p className="text-2xl leading-relaxed font-light text-black">{t.rich('intro', {
                apostrophe: () => <span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>&apos;</span>,
                bold: (chunks) => <span className="font-bold">{chunks}</span>
            })}</p>
        </ContentBlock>
    )
}
