"use client"

import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqKeys = ['teachers', 'clubs', 'playdates', 'camp', 'workshops', 'events'] as const

export default function SoftLandingFaq() {
    const t = useTranslations('SoftlandingPage')

    return (
        <section className="relative py-12 md:py-20 bg-[#D39885]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    <div className="flex flex-col items-start">
                        <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">{t('faq.title')}</h2>
                        <p className="text-2xl md:text-3xl font-light text-white leading-relaxed">
                            {t('faq.subtitle')}
                        </p>
                    </div>
                    <div>
                        <Accordion type="single" collapsible className="w-full" defaultValue="teachers">
                            {faqKeys.map((key) => (
                                <AccordionItem key={key} value={key} className="border-b-2 border-white/30">
                                    <AccordionTrigger className="text-xl md:text-2xl font-medium text-white hover:no-underline [&>svg]:text-white">
                                        {t(`faq.${key}.title`)}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-white/90 text-2xl leading-loose font-light">
                                        {t(`faq.${key}.content`)}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
            <DevBadge name="soft-landing-faq" />
        </section>
    )
}
