'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function PostvisitusContent5() {
    const t = useTranslations('NaturePage')

    return (
        <ContentBlock name="postvisitus-content-5" className="py-12 md:py-20 bg-[#8EB096]">
            <h2 className="text-4xl md:text-4xl text-white font-light leading-relaxed text-center">
                <span className="border-b-2 border-white">{t('runFree.title')}</span>
            </h2>
            <p className="text-2xl leading-relaxed font-light text-white">{t('runFree.content')}</p>
        </ContentBlock>
    )
}
