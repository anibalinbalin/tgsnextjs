'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function NextChapContent5() {
    const t = useTranslations('DonatePage')

    return (
        <ContentBlock name="next-chap-content5">
            <h2 className="text-balance text-center text-4xl leading-snug font-medium text-[#C65D3B]">
                {t('nextChapter.title')}
            </h2>
            <p className="text-2xl leading-relaxed font-light">
                {t('nextChapter.content')}
            </p>
        </ContentBlock>
    )
}
