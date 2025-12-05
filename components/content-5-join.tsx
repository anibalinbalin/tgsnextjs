'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function Content5Join() {
    const t = useTranslations('HowToJoinPage')

    return (
        <ContentBlock name="content-5-join" className="py-12 md:py-20 bg-white">
            <h1 className="text-left text-black" style={{ fontSize: '35px', lineHeight: '47px', fontWeight: 500 }}>{t('intro.title')}</h1>
            <p className="text-2xl leading-relaxed font-light text-black mt-6">{t('intro.description')}</p>
        </ContentBlock>
    )
}
