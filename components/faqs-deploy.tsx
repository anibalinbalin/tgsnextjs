'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import DevBadge from '@/components/dev-badge'

export default function FaqsDeploy() {
    const t = useTranslations('FaqsPage')

    const faqIds = [
        'entryExams',
        'tuitionFee',
        'secondarySchool',
        'scholarships',
        'siblingDiscounts',
        'academicCalendar',
        'gradePlacement'
    ] as const

    return (
        <section className="relative py-16 md:py-32 bg-[#D39885]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-4xl space-y-6">
                    <p className="text-left text-white text-2xl leading-loose font-light">
                        {t('intro')}
                    </p>
                    <div className="pt-8">
                        <Accordion type="single" collapsible className="w-full">
                            {faqIds.map((faqId) => (
                                <AccordionItem key={faqId} value={faqId} className="border-b-2 border-white">
                                    <AccordionTrigger className="relative text-left font-medium hover:no-underline !items-center [&>svg]:absolute [&>svg]:right-0 text-white [&>svg]:text-white text-4xl leading-snug">
                                        {t(`faqs.${faqId}.title`)}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-16 text-left text-white text-2xl leading-loose font-light">
                                        {t(`faqs.${faqId}.content`)}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Contact Section */}
                    <div className="pt-12 text-center">
                        <p className="text-xl md:text-2xl font-medium text-white">
                            {t('contact.question')}
                        </p>
                        <Button
                            asChild
                            variant="terracotta"
                            size="lg"
                            className="mt-6"
                        >
                            <a href="mailto:admissions@thegarzonschool.edu.uy?subject=Admissions">
                                {t('contact.button')}
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
            <DevBadge name="faqs-deploy" />
        </section>
    )
}
