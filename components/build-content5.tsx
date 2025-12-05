'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function BuildContent5() {
    const t = useTranslations('DonatePage')

    return (
        <ContentBlock name="build-content5">
            <h2 className="text-balance text-center text-4xl leading-snug font-medium text-[#C65D3B]">
                {t('buildFuture.title')}
            </h2>
            <p className="text-2xl leading-relaxed font-light">
                {t('buildFuture.content')}
            </p>
        </ContentBlock>
    )
}
