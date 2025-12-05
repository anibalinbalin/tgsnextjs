'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function TransContent5() {
    const t = useTranslations('TranslanguagingPage')

    return (
        <ContentBlock name="trans-content-5" className="py-12 md:py-20 bg-white">
            <p className="text-2xl leading-relaxed font-light text-black">{t.rich('content1.text', {
                apostrophe: () => <span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>
            })}</p>
        </ContentBlock>
    )
}
