'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function GuidingFinal() {
    const t = useTranslations('AccreditationPage')

    return (
        <ContentBlock name="guiding-final" className="py-12 md:py-20 bg-white">
            <div className="mx-auto max-w-4xl space-y-6">
                <h2 className="text-center text-black underline text-4xl leading-snug font-medium decoration-[#D39885]">
                    {t('guidingPrinciples.title')}
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-black text-2xl leading-loose font-light">
                    <li><span className="font-bold">{t('guidingPrinciples.excellence.title')}</span> {t('guidingPrinciples.excellence.content')}</li>
                    <li><span className="font-bold">{t('guidingPrinciples.integrity.title')}</span> {t('guidingPrinciples.integrity.content')}</li>
                    <li><span className="font-bold">{t('guidingPrinciples.wellbeing.title')}</span> {t('guidingPrinciples.wellbeing.content')}</li>
                    <li><span className="font-bold">{t('guidingPrinciples.sustainability.title')}</span> {t('guidingPrinciples.sustainability.content')}</li>
                </ul>
            </div>
        </ContentBlock>
    )
}
