"use client"

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const cultureKeys = ['camaraderie', 'leadership', 'pride', 'engagement', 'integrity', 'innovation', 'support', 'collaboration'] as const

export default function FaqGreatPlace() {
    const t = useTranslations('WorkPage')

    return (
        <section className="relative py-12 md:py-20 bg-white">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    <div className="flex flex-col items-start">
                        <h2 className="text-3xl md:text-4xl font-light text-[#D39885] mb-8 md:pt-4">{t('culture.title')}</h2>
                        <Image
                            src="/assets/1_ourschool/7-great_place/badge.png"
                            alt={t('culture.badgeAlt')}
                            width={280}
                            height={400}
                            className="w-48 md:w-64"
                        />
                    </div>
                    <div>
                        <Accordion type="single" collapsible className="w-full">
                            {cultureKeys.map((key) => (
                                <AccordionItem key={key} value={key}>
                                    <AccordionTrigger className="text-xl md:text-2xl font-light text-[#D39885] hover:no-underline">
                                        {t(`culture.${key}.title`)}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600">
                                        <strong>{t(`culture.${key}.percentage`)}</strong> {t(`culture.${key}.content`)}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
            <DevBadge name="faq-great-place" />
        </section>
    )
}
