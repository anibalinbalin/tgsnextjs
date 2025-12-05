'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import GovernanceHero from '@/components/governance-hero'
import Content5Gov from '@/components/content-5-gov'
import MembershipGov from '@/components/membership-gov'
import CommitmentGov from '@/components/commitment-gov'
import Footer from '@/components/footer'
import DevBadge from '@/components/dev-badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Gallery6WithText } from '@/components/blocks/gallery6-w-text'

export default function GovernancePage() {
    const t = useTranslations('GovernancePage')

    const valuesItems = [
        {
            id: "safeguard",
            title: t('purpose.safeguard.title'),
            content: t('purpose.safeguard.content')
        },
        {
            id: "transparency",
            title: t('purpose.transparency.title'),
            content: t('purpose.transparency.content')
        },
        {
            id: "continuity",
            title: t('purpose.continuity.title'),
            content: t('purpose.continuity.content')
        },
        {
            id: "participation",
            title: t('purpose.participation.title'),
            content: t('purpose.participation.content')
        },
        {
            id: "impact",
            title: t('purpose.impact.title'),
            content: t('purpose.impact.content')
        }
    ]

    return (
        <>
            <GovernanceHero />
            <Content5Gov />

            {/* Values Accordion Section */}
            <section className="relative py-16 md:py-32 bg-white">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="mx-auto max-w-4xl space-y-6">
                        <h1 className="text-balance text-left text-6xl leading-tight font-medium text-[#D39885]">
                            {t('purpose.title')}
                        </h1>
                        <div className="pt-8">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="purpose-intro" className="border-b-2 border-[#D39885]">
                                    <AccordionTrigger className="relative text-left font-medium hover:no-underline !items-center [&>svg]:absolute [&>svg]:right-0 text-4xl leading-snug text-[#D39885]">
                                        {t('purpose.intro.title')}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-16 text-left text-2xl leading-loose font-light text-[#D39885]">
                                        {t('purpose.intro.content')}
                                    </AccordionContent>
                                </AccordionItem>
                                {valuesItems.map((item) => (
                                    <AccordionItem key={item.id} value={item.id} className="border-b-2 border-[#D39885]">
                                        <AccordionTrigger className="relative text-left font-medium hover:no-underline !items-center [&>svg]:absolute [&>svg]:right-0 text-4xl leading-snug text-[#D39885]">
                                            {item.title}
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-16 text-left text-2xl leading-loose font-light text-[#D39885]">
                                            {item.content}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <p className="text-left pt-8 text-2xl leading-loose font-light text-[#D39885]">
                            {t('purpose.conclusion')}
                        </p>
                    </div>
                </div>
                <DevBadge name="purpose-values-faq" />
            </section>

            {/* Banner Stand Section */}
            <section className="relative w-full">
                <div className="relative w-full h-[60vh] md:h-[70vh]">
                    <Image
                        src="/assets/1_ourschool/3-governance/EleazarCuadros.49.jpg"
                        alt="The Garzón School Community"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 z-0" />
                    <div className="relative z-10 h-full flex items-center justify-center">
                        <div className="mx-auto max-w-4xl px-6">
                            <p className="text-center text-white text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">{t('banner.text')}</p>
                        </div>
                    </div>
                </div>
                <DevBadge name="banner-stand" />
            </section>

            {/* How Governance FAQ Section */}
            <section className="relative py-16 md:py-32 bg-white">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="mx-auto max-w-4xl space-y-6">
                        <h1 className="text-balance text-left text-black text-4xl leading-snug font-medium">
                            {t('howGovernanceWorks.title')}
                        </h1>
                        <p className="text-left text-black text-2xl leading-loose font-light" dangerouslySetInnerHTML={{ __html: t.raw('howGovernanceWorks.intro') }} />
                        <div className="pt-8">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="statutes" className="border-b-2 border-black">
                                    <AccordionTrigger className="relative text-left font-medium hover:no-underline !items-center [&>svg]:absolute [&>svg]:right-0 text-black [&>svg]:text-black text-4xl leading-snug">
                                        {t('howGovernanceWorks.statutes.title')}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-16 text-left text-black text-2xl leading-loose font-light">
                                        <span dangerouslySetInnerHTML={{ __html: t.raw('howGovernanceWorks.statutes.content') }} />
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="general-assembly" className="border-b-2 border-black">
                                    <AccordionTrigger className="relative text-left font-medium hover:no-underline !items-center [&>svg]:absolute [&>svg]:right-0 text-black [&>svg]:text-black text-4xl leading-snug">
                                        {t('howGovernanceWorks.generalAssembly.title')}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-16 text-left text-black space-y-4 text-2xl leading-loose font-light">
                                        <p>{t('howGovernanceWorks.generalAssembly.intro')}</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            {(t.raw('howGovernanceWorks.generalAssembly.items') as string[]).map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                        <p className="pt-4"><strong>Why it matters:</strong><br />{t('howGovernanceWorks.generalAssembly.whyMatters')}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="board-directors" className="border-b-2 border-black">
                                    <AccordionTrigger className="relative text-left font-medium hover:no-underline !items-center [&>svg]:absolute [&>svg]:right-0 text-black [&>svg]:text-black text-4xl leading-snug">
                                        {t('howGovernanceWorks.boardOfDirectors.title')}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-16 text-left text-black space-y-4 text-2xl leading-loose font-light">
                                        <p>{t('howGovernanceWorks.boardOfDirectors.intro')}</p>
                                        <p>{t('howGovernanceWorks.boardOfDirectors.responsibilities')}</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            {(t.raw('howGovernanceWorks.boardOfDirectors.items') as string[]).map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                        <p className="pt-4"><strong>Why it matters:</strong><br />{t('howGovernanceWorks.boardOfDirectors.whyMatters')}</p>
                                        <p className="pt-4">{t('howGovernanceWorks.boardOfDirectors.manual')}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <DevBadge name="how-governance-faq" />
            </section>

            <section className="relative">
                <Gallery6WithText
                    heading={t('schoolBoard.title')}
                    showDemo={false}
                    showNavigation={false}
                    backgroundColor="#D39885"
                    textColor="white"
                    items={[
                        {
                            id: "board-1",
                            title: t('schoolBoard.members.bruno.name'),
                            role: t('schoolBoard.members.bruno.role'),
                            url: "#",
                            image: "/assets/1_ourschool/3-governance/board_assets/bruno.jpg",
                        },
                        {
                            id: "board-2",
                            title: t('schoolBoard.members.laure.name'),
                            role: t('schoolBoard.members.laure.role'),
                            url: "#",
                            image: "/assets/1_ourschool/3-governance/board_assets/laure.jpg",
                        },
                        {
                            id: "board-3",
                            title: t('schoolBoard.members.carolina.name'),
                            role: t('schoolBoard.members.carolina.role'),
                            url: "#",
                            image: "/assets/1_ourschool/3-governance/board_assets/carolina.jpg",
                        },
                    ]}
                />
                <DevBadge name="gallery6-board" />
            </section>

            <MembershipGov />

            <CommitmentGov />

            <Footer />
        </>
    )
}
