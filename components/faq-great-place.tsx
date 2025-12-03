"use client"

import Image from 'next/image'
import DevBadge from './dev-badge'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Apos = () => <span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>&apos;</span>

const faqItems = [
    { id: "camaraderie", title: "Camaraderie", percentage: "99%", content: <>of our team reports a deep sense of enjoyment in the workplace, freedom to express themselves, and a strong bond and mutual affection across the team.</> },
    { id: "leadership", title: "Leadership", percentage: "98%", content: <>of our team has a positive view of School Leadership, viewing their behaviours as consistently resonating with the organisation<Apos />s strategy and values.</> },
    { id: "pride", title: "Pride", percentage: "97%", content: <>of our team reports feeling a sense of pride in their work, as well as positively regarding both their jobs and the School.</> },
    { id: "engagement", title: "Engagement", percentage: "96%", content: <>of our team reports being tuned into their work, happily giving more of themselves or their talents than is required.</> },
    { id: "integrity", title: "Integrity", percentage: "95%", content: <>of our team reports that School Leadership is committed to high principled standards and evidences their ability to take actions on these standards.</> },
    { id: "innovation", title: "Innovation", percentage: "94%", content: <>of our team reports that The Garzón School takes measures to continuously improve, adapt quickly, and generate game-changing opportunities.</> },
    { id: "support", title: "Support", percentage: "94%", content: <>of our team reports ample professional development opportunities, resources and equipment, as well as frequent acknowledgment of achievements.</> },
    { id: "collaboration", title: "Collaboration", percentage: "93%", content: <>of our team reports a strong willingness from School Leadership to engage employees in collective efforts.</> },
]

export default function FaqGreatPlace() {
    return (
        <section className="relative py-12 md:py-20 bg-white">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    <div className="flex flex-col items-start">
                        <h2 className="text-3xl md:text-4xl font-light text-[#D39885] mb-8 md:pt-4">Our Culture in Numbers</h2>
                        <Image
                            src="/assets/1_ourschool/7-great_place/badge.png"
                            alt="Great Place to Work Certified Badge"
                            width={280}
                            height={400}
                            className="w-48 md:w-64"
                        />
                    </div>
                    <div>
                        <Accordion type="single" collapsible className="w-full">
                            {faqItems.map((item) => (
                                <AccordionItem key={item.id} value={item.id}>
                                    <AccordionTrigger className="text-xl md:text-2xl font-light text-[#D39885] hover:no-underline">
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600">
                                        <strong>{item.percentage}</strong> {item.content}
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
