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
    { id: "pedagogical", title: <>You will be developing a unique pedagogical approach</>, content: <>At The Garzón School, we are dedicated to innovative, research-driven, and personalised education. Our educators enjoy two hours of collaborative planning time daily to design a bespoke, student-centred curriculum. Our concept-based curriculum emphasises competencies like <Apos />Think, Act, Relate, Communicate,<Apos /> fostering critical and design thinking. The integration of High Nature and High Tech, and our world-stage Roman Bosch campus proposition, creates a unique learning environment that inspires and challenges young learners.</> },
    { id: "valued", title: <>You will be valued and rewarded as a professional</>, content: <>We recognise that the success of our School is a direct reflection of the competence and passion of our team. To show our appreciation, we offer internationally benchmarked remuneration to our staff. Personal professional development allowances are provided to encourage continuous learning and growth. Additionally, we make the workday more enjoyable with perks like catered lunches and complimentary coffee.</> },
    { id: "development", title: <>You will get world-class professional development</>, content: <>Professional growth is at the heart of our mission. We offer allowances for personal professional development, encouraging our staff to continually evolve, learn, and lead in their respective fields. Collaboration is integral to our approach, and our team enjoys regular opportunities for shared planning and innovation. Our horizontal working structure also fosters peer learning, promoting a collaborative and enriching work environment that enhances growth and satisfaction. Working at The Garzón School means being part of an environment that nurtures talent and fosters educational leadership.</> },
    { id: "environment", title: <>You will be part of a vibrant work environment</>, content: <>At The Garzón School, you will be part of a community grounded in respect and care for others, where diversity and inclusion are embraced. You<Apos />ll enjoy working in a nurturing environment that prioritises well-being and ethics. With a 8:1 student-to-educator ratio, you<Apos />ll have the opportunity to provide unparalleled individual attention to learners, building strong relationships and contributing to a transformative educational movement for the region. Plus, you<Apos />ll get to enjoy our famous golden coast location, making it not just a workplace but a place of inspiration and joy.</> },
    { id: "coast", title: <>You will get to live on Uruguay<Apos />s golden coast</>, content: <>Beyond the professional rewards, working at The Garzón School comes with lifestyle perks that extend to living in Uruguay itself. Known for its high quality of life, beautiful landscapes, and friendly communities, Uruguay offers an enriching and balanced lifestyle. Our campus, in La Barra above Uruguay<Apos />s famous golden coast, is a beautiful place to work, inspiring creativity and connection with nature. Together with competitive salaries and opportunities for personal growth, The Garzón School and Uruguay provide a fulfilling and enriching work experience unlike any other.</> },
]

export default function PoolFaq() {
    return (
        <section className="relative py-16 md:py-32 bg-white">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-4xl space-y-6">
                    <h1 className="text-balance text-left text-6xl leading-tight font-medium text-[#D39885]">
                        Why work for The Garzón School?
                    </h1>
                    <div className="pt-8">
                        <Accordion type="single" collapsible className="w-full">
                            {faqItems.map((item) => (
                                <AccordionItem key={item.id} value={item.id} className="border-b-2" style={{ borderColor: '#D39885' }}>
                                    <AccordionTrigger className="relative text-left font-medium hover:no-underline !items-center [&>svg]:absolute [&>svg]:right-0 text-4xl leading-snug text-[#D39885]">
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-16 text-left text-2xl leading-loose font-light text-[#D39885]">
                                        {item.content}
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
