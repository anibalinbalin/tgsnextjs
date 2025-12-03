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
    {
        id: "teachers",
        title: "Meet the Teachers",
        content: <>As a standard part of our admissions process, we ensure that your child has time to meet their new teachers. Giving children the opportunity to get acquainted with their teachers can help them to feel more prepared and confident as they enter TGS.</>
    },
    {
        id: "clubs",
        title: "Join our Co-Curricular Clubs",
        content: <>The perceived formality and sense of expectation can make a first engagement with a school stressful for children. During the term prior to your child<Apos />s enrolment at TGS, we open up all our Co-Curricular Clubs for them to participate in. Whether they choose to make new friends through surfing, community service, or learning Italian, meeting future classmates in a fun, low-pressure environment makes that first day a breeze!</>
    },
    {
        id: "playdates",
        title: "Play Dates with TGS Families",
        content: <>Families who relocate internationally to join TGS tend to do so during our winter break (June-July), after the academic year in the northern hemisphere has concluded. As we do not run Co-Curricular Clubs (above) during the holidays, we set up <Apos />play dates<Apos /> for both children and families to meet before the relocating child(ren)<Apos />s first day of school.</>
    },
    {
        id: "camp",
        title: "Summer Camp Experiences",
        content: <>Summer Camp experiences in December and February provide fun-packed bookends to the academic year at TGS. We extend invitations to all current students, as well as those set to join the School in the near future, to share in the thrill of outdoor activities.</>
    },
    {
        id: "workshops",
        title: "Workshops for Parents",
        content: <>A successful onboarding doesn<Apos />t end with a successful first day. Throughout the year, the Educational and Inclusion teams run workshops for parents designed to ensure alignment between home and school, and share strategies for supporting your child.</>
    },
    {
        id: "events",
        title: "Open Days & Events",
        content: <>We pride ourselves on being a School with porous walls — one in which best practice is shared across the community. We organise termly Open Days for prospective families to visit and get to know TGS, as well as occasional events for the wider community.</>
    },
]

export default function SoftLandingFaq() {
    return (
        <section className="relative py-12 md:py-20 bg-[#D39885]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    <div className="flex flex-col items-start">
                        <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">Soft Landing</h2>
                        <p className="text-2xl md:text-3xl font-light text-white leading-relaxed">
                            Proactive and positive student and family onboarding experiences set our learners up for success from day one.
                        </p>
                    </div>
                    <div>
                        <Accordion type="single" collapsible className="w-full" defaultValue="teachers">
                            {faqItems.map((item) => (
                                <AccordionItem key={item.id} value={item.id} className="border-b-2 border-white/30">
                                    <AccordionTrigger className="text-xl md:text-2xl font-medium text-white hover:no-underline [&>svg]:text-white">
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-white/90 text-2xl leading-loose font-light">
                                        {item.content}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
            <DevBadge name="soft-landing-faq" />
        </section>
    )
}
