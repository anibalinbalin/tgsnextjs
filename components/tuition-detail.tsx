'use client'

import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'

export default function TuitionDetail() {
    const t = useTranslations('FeesPage')

    return (
        <section className="relative py-12 md:py-20" style={{ backgroundColor: '#D39885' }}>
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <p className="text-white text-2xl leading-loose font-light">{t('tuition.description')}</p>
                </div>
            </div>
            <DevBadge name="tuition-detail" />
        </section>
    )
}
