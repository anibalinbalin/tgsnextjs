'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'

export default function NutritionPinaSection() {
    const t = useTranslations('NutritionPage')

    return (
        <section className="relative py-12 md:py-20 bg-[#8EB096]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 md:gap-16 items-stretch">
                    <div className="flex flex-col items-start">
                        <h2 className="text-4xl md:text-4xl text-white font-light leading-relaxed mb-6">
                            <span className="border-b-2 border-white">{t('pina.title')}</span>
                        </h2>
                        <p className="text-white text-2xl leading-loose font-light">
                            {t('pina.description')}
                        </p>
                    </div>
                    <div className="h-full">
                        <a href="https://www.instagram.com/pinadulce_maldonado/" target="_blank" rel="noopener noreferrer" className="block h-full">
                            <Image
                                src="/assets/6-school_life/5-nutrition/_DSC04534.JPG"
                                alt={t('pina.imageAlt')}
                                width={600}
                                height={800}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <DevBadge name="nutrition-pina-section" />
        </section>
    )
}
