'use client'

import { useTranslations } from 'next-intl'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import DevBadge from '@/components/dev-badge'

type FaqKey = 'changemaker' | 'outdoors' | 'library' | 'events' | 'arts'

const faqKeys: FaqKey[] = ['changemaker', 'outdoors', 'library', 'events', 'arts']

export default function FaqCollective() {
    const t = useTranslations('CommitteesPage')

    return (
        <section className="relative pb-16 md:pb-32 bg-white">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-4xl space-y-6">
                    <p className="text-left text-black text-2xl leading-loose font-light">
                        {t('faq.intro')}
                    </p>
                    <div className="pt-8">
                        <Accordion type="single" collapsible className="w-full">
                            {faqKeys.map((key) => (
                                <AccordionItem key={key} value={key} className="border-b-2 border-black">
                                    <AccordionTrigger className="relative text-left font-medium hover:no-underline !items-center [&>svg]:absolute [&>svg]:right-0 text-black [&>svg]:text-black text-4xl leading-snug">
                                        {t(`faq.${key}.title`)}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-16 text-left text-black text-2xl leading-loose font-light">
                                        {t(`faq.${key}.content`)}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
            <DevBadge name="faq-collective" />
        </section>
    )
}
