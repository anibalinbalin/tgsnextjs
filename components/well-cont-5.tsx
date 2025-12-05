'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function WellCont5() {
    const t = useTranslations('WellbeingPage')
    return (
        <ContentBlock name="well-cont-5" className="py-12 md:py-20 bg-[#D39885]">
            <p className="text-2xl leading-relaxed font-light text-white mb-8">{t('focus.intro')}</p>
            <ul className="text-2xl leading-relaxed font-light text-white space-y-4 list-disc list-inside ml-8">
                <li>{t.rich('focus.items.relationships', { underline: (chunks) => <span className="underline">{chunks}</span> })}</li>
                <li>{t.rich('focus.items.healthyHabits', { underline: (chunks) => <span className="underline">{chunks}</span> })}</li>
                <li>{t.rich('focus.items.sel', { underline: (chunks) => <span className="underline">{chunks}</span> })}</li>
                <li>{t.rich('focus.items.peerRelationships', { underline: (chunks) => <span className="underline">{chunks}</span> })}</li>
                <li>{t.rich('focus.items.resilience', { underline: (chunks) => <span className="underline">{chunks}</span> })}</li>
            </ul>
        </ContentBlock>
    )
}
