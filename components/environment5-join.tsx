'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function Environment5Join() {
    const t = useTranslations('MovingToUruguayPage')

    return (
        <ContentBlock name="environment5-join" className="py-12 md:py-20 bg-white">
            <h1 className="text-center text-black" style={{ fontSize: '35px', lineHeight: '47px', fontWeight: 500 }}>{t('environment.title')}</h1>
            <p className="text-2xl leading-relaxed font-light text-black mt-6">{t('environment.content')}</p>
        </ContentBlock>
    )
}
