"use client"

import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function CoClubsFaqs() {
    const t = useTranslations('PathwaysPage')

    return (
        <section className="relative py-12 md:py-20 bg-[#8EB096]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    <div className="flex flex-col items-start">
                        <h2 className="text-3xl md:text-4xl font-light text-black mb-8 md:pt-4">{t('clubs.title')}</h2>
                    </div>
                    <div>
                        <Accordion type="single" collapsible className="w-full [&_[data-slot=accordion-item]]:border-black">
                            <AccordionItem value="wild">
                                <AccordionTrigger className="text-xl md:text-2xl font-light text-black hover:no-underline">
                                    {t('clubs.wild.title')}
                                </AccordionTrigger>
                                <AccordionContent className="text-black whitespace-pre-line text-2xl leading-loose font-light">
                                    <span className="block font-medium mb-2">{t('clubs.wild.subtitle')}</span>
                                    {t('clubs.wild.content')}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="pathway">
                                <AccordionTrigger className="text-xl md:text-2xl font-light text-black hover:no-underline">
                                    {t('clubs.pathway.title')}
                                </AccordionTrigger>
                                <AccordionContent className="text-black whitespace-pre-line text-2xl leading-loose font-light">
                                    {t('clubs.pathway.content')}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="sports">
                                <AccordionTrigger className="text-xl md:text-2xl font-light text-black hover:no-underline">
                                    {t('clubs.sports.title')}
                                </AccordionTrigger>
                                <AccordionContent className="text-black whitespace-pre-line text-2xl leading-loose font-light">
                                    {t('clubs.sports.content')}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            <DevBadge name="co-clubs-faqs" />
        </section>
    )
}
