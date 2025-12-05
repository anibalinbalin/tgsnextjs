'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function SpacesContent5Bottom() {
    const t = useTranslations('SpacesPage')

    return (
        <ContentBlock name="spaces-content-5-bottom" className="py-12 md:py-20 bg-white">
            <p className="text-2xl leading-relaxed font-light text-black">{t('bottom')}</p>
        </ContentBlock>
    )
}
