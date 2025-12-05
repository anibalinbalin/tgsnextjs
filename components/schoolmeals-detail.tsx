'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function SchoolmealsDetail() {
    const t = useTranslations('FeesPage')

    const nutritionLink = (chunks: React.ReactNode) => (
        <Link href="/nutrition" className="underline text-[#D39885]">{chunks}</Link>
    )

    return (
        <ContentBlock name="schoolmeals-detail" className="py-12 md:py-20 bg-white">
            <h1 className="text-center text-black" style={{ fontSize: '35px', lineHeight: '47px', fontWeight: 500 }}>{t('meals.title')}</h1>
            <p className="text-2xl leading-relaxed font-light text-black mt-6">{t.rich('meals.description', { nutritionLink })}</p>
        </ContentBlock>
    )
}
