'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function ReportingsContent5() {
    const t = useTranslations('CurriculumPage')

    return (
        <ContentBlock name="reportings-content-5" className="py-12 md:py-20 bg-[#D39885]">
            <p className="text-2xl leading-relaxed font-light text-white">{t('reporting')}</p>
        </ContentBlock>
    )
}
