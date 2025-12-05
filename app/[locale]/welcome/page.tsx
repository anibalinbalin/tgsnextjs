'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { HeroHeader } from '@/components/header'
import DevBadge from '@/components/dev-badge'
import FooterSection from '@/components/footer'

export default function WelcomePage() {
    const t = useTranslations('WelcomePage')

    const highlight = (chunks: React.ReactNode) => (
        <span className="font-bold underline" style={{ textDecorationColor: '#C65D3B' }}>{chunks}</span>
    )

    const campusLink = (chunks: React.ReactNode) => (
        <Link href="/learningvillage" className="font-bold" style={{ color: '#C65D3B' }}>{chunks}</Link>
    )

    return (
        <>
            <div className="relative h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/1_ourschool/0_welcome/IMG_9439.jpg)' }}>
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="relative z-10">
                    <HeroHeader />
                    <main>
                    <section>
                        <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                    {/* h1 removed as requested */}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                </div>
                <DevBadge name="welcome-hero" />
            </div>

            {/* Content Section */}
            <section className="relative py-16 md:py-32 bg-white">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="mx-auto max-w-4xl space-y-6 text-justify">
                        <h2 className="text-balance text-left text-4xl leading-snug font-medium text-[#C65D3B]">
                            {t('title')}
                        </h2>
                        <p className="text-2xl leading-relaxed font-light">
                            {t.rich('p1', { highlight })}
                        </p>
                        <p className="text-2xl leading-relaxed font-light">
                            {t.rich('p2', { campusLink })}
                        </p>
                        <p className="text-2xl leading-relaxed font-light">
                            {t.rich('p3', { highlight })}
                        </p>
                        <p className="text-2xl leading-relaxed font-light">
                            {t.rich('p4', { highlight })}
                        </p>
                        <p className="text-2xl leading-relaxed font-light">
                            {t.rich('p5', { highlight })}
                        </p>
                        <p className="text-2xl leading-relaxed font-light">
                            {t.rich('p6', { highlight })}
                        </p>
                        <div className="mt-12">
                            <img
                                src="/assets/1_ourschool/0_welcome/signatures.png"
                                alt={t('signatureAlt')}
                                className="w-full max-w-xl mx-auto"
                            />
                        </div>
                    </div>
                </div>
                <DevBadge name="content-welcome" />
            </section>

            <FooterSection />
        </>
    )
}
