import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import DevBadge from '@/components/dev-badge'

export default function FaqCollective() {
    const faqItems = [
        {
            id: "changemaker-collective",
            title: "Changemaker Collective",
            content: "Turn purpose into action through bold projects rooted in empathy, responsibility, and inclusion, sparking connections that begin in Maldonado and ripple out to the world."
        },
        {
            id: "outdoors-adventure",
            title: "Outdoors & Adventure Committee",
            content: "Promote learning beyond the classroom with experiences that build resilience, confidence, and a deep connection to the natural world."
        },
        {
            id: "library",
            title: "Library Committee",
            content: "Foster curiosity and literacy by developing our library into a vibrant hub for resources, inquiry, creativity, and community learning."
        },
        {
            id: "events",
            title: "Events Committee",
            content: "Support the School with community, educational, and fundraising events, including our flagship TGS Talks programme."
        },
        {
            id: "arts",
            title: "Arts Committee",
            content: "Promote the arts at TGS through workshops, guest artists, exhibitions, performances, and more."
        }
    ]

    return (
        <section className="relative pb-16 md:pb-32 bg-white">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-4xl space-y-6">
                    <p className="text-left text-black text-2xl leading-loose font-light">
                        Find out more about the work of our active committees…
                    </p>
                    <div className="pt-8">
                        <Accordion type="single" collapsible className="w-full">
                            {faqItems.map((item) => (
                                <AccordionItem key={item.id} value={item.id} className="border-b-2 border-black">
                                    <AccordionTrigger className="relative text-left font-medium hover:no-underline !items-center [&>svg]:absolute [&>svg]:right-0 text-black [&>svg]:text-black text-4xl leading-snug">
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-16 text-left text-black text-2xl leading-loose font-light">
                                        {item.content}
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
