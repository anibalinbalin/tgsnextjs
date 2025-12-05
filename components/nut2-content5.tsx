'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function Nut2Content5() {
    const t = useTranslations('NutritionPage')

    return (
        <ContentBlock name="nut2-content5" className="py-12 md:py-20 bg-white">
            <p className="text-2xl leading-relaxed font-light text-black">{t('menuIntro')}</p>
        </ContentBlock>
    )
}
