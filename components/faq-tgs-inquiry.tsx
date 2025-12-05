"use client"

import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const attributeIds = ["knowledgeable", "creative", "inquirers", "collaborative", "authentic", "reflective"] as const

export default function FaqTgsInquiry() {
    const t = useTranslations('InquiryPage')

    return (
        <section className="relative py-12 md:py-20 bg-[#D39885]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    <div className="flex flex-col items-start">
                        <h2 className="text-3xl md:text-4xl font-light text-white mb-8 md:pt-4">{t('attributes.title')}</h2>
                    </div>
                    <div>
                        <Accordion type="single" collapsible className="w-full">
                            {attributeIds.map((id) => (
                                <AccordionItem key={id} value={id} className="border-white/30">
                                    <AccordionTrigger className="text-xl md:text-2xl font-light text-white hover:no-underline [&>svg]:text-white">
                                        {t(`attributes.${id}.title`)}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-white text-2xl leading-loose font-light">
                                        {t(`attributes.${id}.content`)}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
            <DevBadge name="faq-tgs-inquiry" />
        </section>
    )
}
