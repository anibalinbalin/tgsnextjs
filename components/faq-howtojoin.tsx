"use client"

import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'
import { Button } from './ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const stepIds = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7'] as const

export default function FaqHowtojoin() {
    const t = useTranslations('HowToJoinPage')

    return (
        <section className="relative py-12 md:py-20 bg-white">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    <div className="flex flex-col items-start">
                        <h2 className="text-3xl md:text-4xl font-light text-[#D39885] mb-8 md:pt-4">{t('faq.title')}</h2>
                        <p className="text-2xl leading-relaxed font-light text-[#D39885] mb-8">{t('faq.subtitle')}</p>
                        <Button asChild className="bg-[#D39885] hover:bg-[#c08775] text-white">
                            <a href="#">{t('faq.registerInterest')}</a>
                        </Button>
                    </div>
                    <div>
                        <Accordion type="single" collapsible className="w-full">
                            {stepIds.map((stepId) => (
                                <AccordionItem key={stepId} value={stepId}>
                                    <AccordionTrigger className="text-xl md:text-2xl font-light text-[#D39885] hover:no-underline">
                                        {t(`faq.steps.${stepId}.title`)}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-black text-2xl leading-loose font-light">
                                        {t(`faq.steps.${stepId}.content`)}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
            <DevBadge name="faq-howtojoin" />
        </section>
    )
}
