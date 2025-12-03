"use client"

import DevBadge from './dev-badge'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    {
        id: "wild",
        title: "W.I.L.D",
        subtitle: "Wilderness, Immersion, Leadership & Development",
        content: "— Outdoors Exploration"
    },
    {
        id: "pathway",
        title: "PATHWAY",
        subtitle: null,
        content: `Pathway Club Tier at The Garzón School are designed for students who are dedicated to long-term skill development in a specific area. These clubs follow a structured progression, allowing students to build expertise over time through consistent participation. With clear learning milestones, expert guidance, and a commitment to mastery, Pathway Clubs provide a deeper, more immersive experience. They are ideal for students who want to refine their talents, take on new challenges, and achieve meaningful growth in their chosen field.

— Culinary Arts
— Media & Communications
— Visual Arts`
    },
    {
        id: "sports",
        title: "SPORTS",
        subtitle: null,
        content: `— Football
— Horse Riding
— Skateboarding
— Surfing`
    },
]

export default function CoClubsFaqs() {
    return (
        <section className="relative py-12 md:py-20 bg-[#8EB096]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    <div className="flex flex-col items-start">
                        <h2 className="text-3xl md:text-4xl font-light text-black mb-8 md:pt-4">Co-Curricular Clubs 2025</h2>
                    </div>
                    <div>
                        <Accordion type="single" collapsible className="w-full [&_[data-slot=accordion-item]]:border-black">
                            {faqItems.map((item) => (
                                <AccordionItem key={item.id} value={item.id}>
                                    <AccordionTrigger className="text-xl md:text-2xl font-light text-black hover:no-underline">
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-black whitespace-pre-line text-2xl leading-loose font-light">
                                        {item.subtitle && (
                                            <span className="block font-medium mb-2">{item.subtitle}</span>
                                        )}
                                        {item.content}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
            <DevBadge name="co-clubs-faqs" />
        </section>
    )
}
