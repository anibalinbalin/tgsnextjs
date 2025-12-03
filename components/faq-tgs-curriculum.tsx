"use client"

import DevBadge from './dev-badge'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Apos = () => <span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>&apos;</span>

const faqItems = [
    { id: "identity", title: "Identity", content: <>Identity encompasses all the characteristics that define individuals, groups, and cultures, as well as how they perceive and express themselves. We study identity not only to promote self-awareness, but also to understand others and build our capacity for empathy.</> },
    { id: "expression", title: "Expression", content: <>Expression is related to the various ways in which individuals and groups convey ideas, feelings, and attitudes. This includes verbal and nonverbal communication, as well as creative forms of expression such as art, music, and literature. We study expression to understand the messages and meanings conveyed by others, to express ourselves more effectively, and to foster greater understanding and connection between people.</> },
    { id: "change", title: "Change", content: <>One of life<Apos />s great inevitabilities, change refers to the process of transformation or transition from one state or condition to another. Change can occur at different levels, such as individual, organisational, societal, or global. We study change to understand the world around us, the concept of cause and effect, and to help us develop strategies for managing and adapting to change.</> },
    { id: "function", title: "Function", content: <>Function refers to the purpose or role of a particular object, tool, or system in a given context. Functions can be found in different areas of our world such as mathematics, science, engineering, and social sciences. The study of function is essential for understanding how systems work, how they impact us and how we can influence them.</> },
    { id: "relationships", title: "Relationships", content: <>Relationships refers to connections and interactions between individuals, groups, or systems. They can take different forms, such as friendships, family ties, romantic partnerships or international alliances. Relationships play a crucial role in shaping our social, emotional, and cognitive development, as well as our health and well-being. The study of relationships is essential for understanding the complex dynamics of human interactions, and for fostering healthy and resilient communities.</> },
    { id: "responsibility", title: "Responsibility", content: <>Responsibility is the state of being accountable for one<Apos />s actions and decisions. It involves recognising the impact of our behaviour on others and taking steps to ensure that our actions align with ethical standards. The study of responsibility can help us to develop a sense of integrity, reinforce our commitment to ethics and values, and foster trust and credibility in our relationships with others.</> },
    { id: "life", title: "Life", content: <>Life relates to understanding the complex and dynamic relationships between living organisms and their environment. The biological study of life, which sits alongside more philosophical questions such as what it means to be living, helps us foster a deeper appreciation of the diversity and interconnectedness of life on Earth.</> },
    { id: "innovation", title: "Innovation", content: <>Innovation focuses on the development and application of new ideas, products, or processes. By fostering a culture of innovation and supporting innovative solutions, we can unlock new opportunities through collaboration and design thinking, and experience how our learning can be used to create positive social impact.</> },
]

export default function FaqTgsCurriculum() {
    return (
        <section className="relative py-12 md:py-20 bg-white">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    <div className="flex flex-col items-start">
                        <h2 className="text-3xl md:text-4xl font-light text-[#D39885] mb-8 md:pt-4">TGS Curriculum Concepts</h2>
                        <p className="text-2xl leading-relaxed font-light text-[#D39885]">Our curriculum explores 8 core concepts, which students traverse through inquiry-based learning on two-year cycles. As young learners develop and flourish, they will return to these same concepts but approach them from an increasingly abstract perspective.</p>
                    </div>
                    <div>
                        <Accordion type="single" collapsible className="w-full">
                            {faqItems.map((item) => (
                                <AccordionItem key={item.id} value={item.id}>
                                    <AccordionTrigger className="text-xl md:text-2xl font-light text-[#D39885] hover:no-underline">
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-black text-2xl leading-loose font-light">
                                        {item.content}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
            <DevBadge name="faq-tgs-curriculum" />
        </section>
    )
}
