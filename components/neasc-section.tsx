'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'

export default function NeascSection() {
    const t = useTranslations('AccreditationPage')

    return (
        <section className="relative py-12 md:py-20 bg-white">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start">
                    {/* Circular image */}
                    <div className="flex flex-col items-center">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 bg-white">
                            <Image
                                src="/assets/0_mainpage/acreditations_alpha_svg.svg"
                                alt={t('neasc.imageAlt')}
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                    </div>

                    {/* Text content */}
                    <div>
                        <h2 className="text-4xl md:text-4xl text-black font-light leading-relaxed">
                            <span className="border-b-2 border-[#D39885]">{t('neasc.title')}</span>
                        </h2>
                        <p className="mt-6 text-lg md:text-xl text-black/80 font-light leading-relaxed">
                            {t.rich('neasc.content', {
                                bold: (chunks) => <span className="font-bold">{chunks}</span>
                            })}
                        </p>
                    </div>
                </div>
            </div>
            <DevBadge name="neasc-section" />
        </section>
    )
}
