'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function CocurricularDetail() {
    const t = useTranslations('FeesPage')

    const bold = (chunks: React.ReactNode) => (
        <span className="font-bold">{chunks}</span>
    )

    return (
        <ContentBlock name="cocurricular-detail" className="py-12 md:py-20 bg-white">
            <h1 className="text-center text-black" style={{ fontSize: '35px', lineHeight: '47px', fontWeight: 500 }}>{t('coCurricular.title')}</h1>
            <p className="text-2xl leading-relaxed font-light text-black mt-6">{t.rich('coCurricular.description', { bold })}</p>
        </ContentBlock>
    )
}
