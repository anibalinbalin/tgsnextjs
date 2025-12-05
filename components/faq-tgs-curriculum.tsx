"use client"

import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqTgsCurriculum() {
    const t = useTranslations('CurriculumPage')

    const conceptIds = [
        'identity',
        'expression',
        'change',
        'function',
        'relationships',
        'responsibility',
        'life',
        'innovation'
    ] as const

    return (
        <section className="relative py-12 md:py-20 bg-white">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    <div className="flex flex-col items-start">
                        <h2 className="text-3xl md:text-4xl font-light text-[#D39885] mb-8 md:pt-4">{t('concepts.title')}</h2>
                        <p className="text-2xl leading-relaxed font-light text-[#D39885]">{t('concepts.intro')}</p>
                    </div>
                    <div>
                        <Accordion type="single" collapsible className="w-full">
                            {conceptIds.map((conceptId) => (
                                <AccordionItem key={conceptId} value={conceptId}>
                                    <AccordionTrigger className="text-xl md:text-2xl font-light text-[#D39885] hover:no-underline">
                                        {t(`concepts.${conceptId}.title`)}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-black text-2xl leading-loose font-light">
                                        {t(`concepts.${conceptId}.content`)}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
            <DevBadge name="faq-tgs-curriculum" />
        </section>
    )
}
