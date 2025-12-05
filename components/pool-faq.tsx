"use client"

import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const whyWorkKeys = ['pedagogical', 'valued', 'development', 'environment', 'coast'] as const

export default function PoolFaq() {
    const t = useTranslations('WorkPage')

    return (
        <section className="relative py-16 md:py-32 bg-white">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-4xl space-y-6">
                    <h1 className="text-balance text-left text-6xl leading-tight font-medium text-[#D39885]">
                        {t('whyWork.title')}
                    </h1>
                    <div className="pt-8">
                        <Accordion type="single" collapsible className="w-full">
                            {whyWorkKeys.map((key) => (
                                <AccordionItem key={key} value={key} className="border-b-2" style={{ borderColor: '#D39885' }}>
                                    <AccordionTrigger className="relative text-left font-medium hover:no-underline !items-center [&>svg]:absolute [&>svg]:right-0 text-4xl leading-snug text-[#D39885]">
                                        {t(`whyWork.${key}.title`)}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-16 text-left text-2xl leading-loose font-light text-[#D39885]">
                                        {t(`whyWork.${key}.content`)}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
            <DevBadge name="pool-faq" />
        </section>
    )
}
