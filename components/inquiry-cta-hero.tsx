'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import DevBadge from './dev-badge'
import { Button } from './ui/button'

export default function InquiryCtaHero() {
    const t = useTranslations('InquiryCtaPage')

    return (
        <div className="relative h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/3-learning/1-inquiry/IMG_7272.JPG)' }}>
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10">
                <main>
                    <section>
                        <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                            <div className="relative mx-auto flex max-w-6xl flex-col px-6">
                                <div className="mx-auto max-w-5xl text-center">
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl mt-8 font-medium text-white lg:mt-16">{t('hero.title')}</h1>
                                    <p className="mt-6 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">{t('hero.description')}</p>
                                    <div className="mt-8">
                                        <Button asChild size="lg" className="px-8 py-6 bg-[#D39885] hover:bg-[#C65D3B] text-white">
                                            <Link href="/team">{t('hero.button')}</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <DevBadge name="inquiry-cta-hero" />
        </div>
    )
}
