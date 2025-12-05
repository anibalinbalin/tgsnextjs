'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'

export default function EntireLangStand() {
    const t = useTranslations('TranslanguagingPage')

    return (
        <section className="relative w-full">
            <div className="relative w-full h-[60vh] md:h-[70vh]">
                <Image
                    src="/assets/3-learning/3-translanguaging/_DSC1935.jpg"
                    alt={t('quote.imageAlt')}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 z-0" />
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="mx-auto max-w-4xl px-6">
                        <p className="text-center text-white text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">{t.rich('quote.text', {
                            highlight: (chunks) => <span className="bg-[#D39885] px-2">{chunks}</span>
                        })}</p>
                        <p className="text-center text-white text-xl md:text-2xl font-light mt-6">{t('quote.author')}</p>
                    </div>
                </div>
            </div>
            <DevBadge name="entire-lang-stand" />
        </section>
    )
}
