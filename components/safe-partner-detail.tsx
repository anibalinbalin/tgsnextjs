'use client'

import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'

export default function SafePartnerDetail() {
    const t = useTranslations('SafeguardingPage')

    return (
        <section className="relative py-12 md:py-20 bg-[#D39885]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-4xl space-y-6 text-justify">
                    <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">{t('partner.title')}</h2>
                    <p className="text-2xl leading-relaxed font-light text-white">{t('partner.content')}</p>
                </div>
            </div>
            <DevBadge name="safe-partner-detail" />
        </section>
    )
}
