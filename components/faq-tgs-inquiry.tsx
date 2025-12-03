"use client"

import DevBadge from './dev-badge'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    { id: "knowledgeable", title: "Knowledgeable", content: "Learners at The Garzón School develop a love for acquiring knowledge in an experiential and joyful way. They are comfortable in expressing their curiosity. Children take pleasure while acquiring knowledge in an experiential way." },
    { id: "creative", title: "Creative", content: "We are an innovative learning community, focusing on imaginative and resourceful ways of expressing ourselves. We communicate with others and apply knowledge by developing ways of thinking to analyze and take responsible action in new and different contexts. Children are encouraged to use the knowledge they acquire to develop new ways of expressing themselves, communicating with others and new ways of thinking and being in the world." },
    { id: "inquirers", title: "Inquirers", content: "Our community embraces and encourages curiosity. We are motivated to look for answers to our questions through a research oriented approach. We are encouraged to take risks and immerse ourselves in the adventure of creating and sharing new knowledge. Our students feel ready to take risks, go into areas that are not fully researched and adapt new knowledge. We are not afraid of trying something new and taking on the adventure of doing something innovative. Even when we fail in something, we learn from our mistakes." },
    { id: "collaborative", title: "Collaborative", content: "Being collaborative is so much more than cooperation or teamwork. TGS learners grow with their teachers and from each other. We actively collaborate, share and co-create with the members of our community to effect positive change." },
    { id: "authentic", title: "Authentic", content: "We learn about ourselves and develop our identity. We embrace diversity and value different perspectives as fundamental attitudes to have a positive impact. We are confident in taking things into our own hands and leading the change we aim for. We are also mindful, reflecting on our emotions and experiences." },
    { id: "reflective", title: "Reflective", content: "We reflect, we proactively listen to others and self-assess how we learn. In doing so, we understand what we can improve and generate a virtuous cycle for learning. We work to understand our strengths and challenges so we develop as learners." },
]

export default function FaqTgsInquiry() {
    return (
        <section className="relative py-12 md:py-20 bg-[#D39885]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    <div className="flex flex-col items-start">
                        <h2 className="text-3xl md:text-4xl font-light text-white mb-8 md:pt-4">TGS Attributes & Dispositions</h2>
                    </div>
                    <div>
                        <Accordion type="single" collapsible className="w-full">
                            {faqItems.map((item) => (
                                <AccordionItem key={item.id} value={item.id} className="border-white/30">
                                    <AccordionTrigger className="text-xl md:text-2xl font-light text-white hover:no-underline [&>svg]:text-white">
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-white text-2xl leading-loose font-light">
                                        {item.content}
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
