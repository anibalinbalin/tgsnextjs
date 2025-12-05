'use client'

import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'

export default function SafeQuote() {
    const t = useTranslations('SafeguardingPage')

    return (
        <div className="bg-[#D39885]">
            <section
                className="relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/assets/1_ourschool/6-safeguarding/TGS-5.JPG)',
                    clipPath: 'polygon(0 15%, 75% 0, 100% 15%, 100% 100%, 0 100%)'
                }}
            >
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="relative z-10 py-24 md:py-40 pt-32 md:pt-44">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mx-auto max-w-4xl text-center">
                            <blockquote className="text-4xl md:text-4xl font-medium text-white leading-relaxed mb-8">
                                <span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>{t('quote.text')}<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>
                            </blockquote>
                            <cite className="text-white/80 text-lg not-italic">
                                — {t('quote.author')}
                            </cite>
                        </div>
                    </div>
                </div>
                <DevBadge name="safe-quote" />
            </section>
        </div>
    )
}
