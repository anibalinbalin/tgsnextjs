'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function EntireContent5() {
    const t = useTranslations('TranslanguagingPage')

    return (
        <ContentBlock name="entire-content-5" className="py-12 md:py-20 bg-[#D39885]">
            <p className="text-2xl leading-relaxed font-light text-white">{t.rich('content2.text', {
                apostrophe: () => <span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>
            })}</p>
        </ContentBlock>
    )
}
