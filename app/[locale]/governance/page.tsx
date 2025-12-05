import React from 'react'
import Image from 'next/image'
import GovernanceHero from '@/components/governance-hero'
import Content5Gov from '@/components/content-5-gov'
import MembershipGov from '@/components/membership-gov'
import CommitmentGov from '@/components/commitment-gov'
import Footer from '@/components/footer'
import DevBadge from '@/components/dev-badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Gallery6WithText } from '@/components/blocks/gallery6-w-text'

export default function GovernancePage() {
    const valuesItems = [
        {
            id: "safeguard",
            title: "Safeguard the school's mission and ethos",
            content: "The Asociación Civil exists first and foremost to protect the school's founding vision: a place where students' needs, learning quality, and wellbeing always come before financial interest. As a non-profit entity, TGS can make long-term educational decisions guided by its mission rather than by shareholders or short-term pressures. This ensures that every dollar the school earns or receives is reinvested directly into its people, its programs, and its purpose."
        },
        {
            id: "transparency",
            title: "Promote transparency and accountability",
            content: "The Asociación Civil model demands openness and shared responsibility. Every major institutional decision, from budget approval to leadership appointments, is overseen by a clear governance framework that is reviewed in annual assemblies and supported by public records. This means that families, staff, and the wider community can trust that TGS operates with integrity, that funds are managed responsibly, and that its leadership remains accountable to the collective it serves."
        },
        {
            id: "continuity",
            title: "Guarantee long-term continuity",
            content: "Schools that depend on individual owners or private investors often change direction when those individuals move on. As a community-owned, non-profit institution, The Garzón School is protected from that risk. The Asociación Civil structure ensures that the school's philosophy, resources, and leadership transition smoothly across generations, maintaining continuity in purpose and identity while allowing for growth and evolution over time."
        },
        {
            id: "participation",
            title: "Foster community participation",
            content: "Perhaps the greatest strength of the Asociación Civil model is that it invites every parent and guardian to play an active role in shaping the school's future. Membership is open, participation is encouraged, and dialogue is constant. Families are not merely clients — they are co-builders of an educational project grounded in shared values and collective trust. This sense of ownership and belonging is what gives The Garzón School its unique energy and resilience."
        },
        {
            id: "impact",
            title: "Ensure social impact and inclusion",
            content: "The Asociación Civil model enables The Garzón School to direct resources toward meaningful community impact rather than private profit, supporting our long-term goal of becoming a needs-blind institution where access depends on a student's potential, not a family's finances. By reinvesting surplus funds and mobilizing community support, the school sustains scholarships, outreach initiatives, and partnerships that open doors for talented children from all backgrounds. In this way, governance and social mission work hand in hand: every structural choice reinforces our belief that education should be a force for inclusion, fairness, and opportunity."
        }
    ]

    return (
        <>
            <GovernanceHero />
            <Content5Gov />

            {/* Values Accordion Section */}
            <section className="relative py-16 md:py-32 bg-white">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="mx-auto max-w-4xl space-y-6">
                        <h1 className="text-balance text-left text-6xl leading-tight font-medium text-[#D39885]">
                            Purpose of the Asociación Civil
                        </h1>
                        <div className="pt-8">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="purpose-intro" className="border-b-2 border-[#D39885]">
                                    <AccordionTrigger className="relative text-left font-medium hover:no-underline !items-center [&>svg]:absolute [&>svg]:right-0 text-4xl leading-snug text-[#D39885]">
                                        Why the Asociación Civil model matters
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-16 text-left text-2xl leading-loose font-light text-[#D39885]">
                                        The Garzón School operates as an Asociación Civil — a non-profit, community-governed institution legally structured to serve the collective good rather than private interest. This model is not merely administrative; it reflects a deliberate commitment to transparency, sustainability, and shared ownership. It shapes how decisions are made, how resources are used, and how the school remains accountable to its families, staff, and mission over time.
                                    </AccordionContent>
                                </AccordionItem>
                                {valuesItems.map((item) => (
                                    <AccordionItem key={item.id} value={item.id} className="border-b-2 border-[#D39885]">
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
                        <p className="text-left pt-8 text-2xl leading-loose font-light text-[#D39885]">
                            Every year, the school's leadership team and Board report back to members on achievements, challenges, and the allocation of resources. This participatory structure makes The Garzón School stronger, more stable, and more aligned with its purpose.
                        </p>
                    </div>
                </div>
                <DevBadge name="purpose-values-faq" />
            </section>

            {/* Banner Stand Section */}
            <section className="relative w-full">
                <div className="relative w-full h-[60vh] md:h-[70vh]">
                    <Image
                        src="/assets/1_ourschool/3-governance/EleazarCuadros.49.jpg"
                        alt="The Garzón School Community"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 z-0" />
                    <div className="relative z-10 h-full flex items-center justify-center">
                        <div className="mx-auto max-w-4xl px-6">
                            <p className="text-center text-white text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">In a region dominated by edu-businesses, The Garzón School stands apart as a non-profit institution built by and for its community.</p>
                        </div>
                    </div>
                </div>
                <DevBadge name="banner-stand" />
            </section>

            {/* How Governance FAQ Section */}
            <section className="relative py-16 md:py-32 bg-white">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="mx-auto max-w-4xl space-y-6">
                        <h1 className="text-balance text-left text-black text-4xl leading-snug font-medium">
                            How Governance Works
                        </h1>
                        <p className="text-left text-black text-2xl leading-loose font-light">
                            The Asociación Civil is governed by statutes approved by the MEC in <strong>January 2022</strong> and amended by the General Assembly in <strong>March 2025</strong>. Members meet annually to review the school's progress and vote on major decisions. Every three years, members elect the Board of Directors, which provides oversight, sets policy, and safeguards the mission.
                        </p>
                        <div className="pt-8">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="statutes" className="border-b-2 border-black">
                                    <AccordionTrigger className="relative text-left font-medium hover:no-underline !items-center [&>svg]:absolute [&>svg]:right-0 text-black [&>svg]:text-black text-4xl leading-snug">
                                        Statutes and Legal Framework
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-16 text-left text-black text-2xl leading-loose font-light">
                                        The Asociación Civil operates under statutes (estatutos) approved by the MEC on <strong>January 3, 2022</strong>, and amended by resolution of the General Assembly in <strong>March 2025</strong>. These statutes establish the rights and responsibilities of members, define governance processes, and regulate the relationship between the Board, leadership, and membership body.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="general-assembly" className="border-b-2 border-black">
                                    <AccordionTrigger className="relative text-left font-medium hover:no-underline !items-center [&>svg]:absolute [&>svg]:right-0 text-black [&>svg]:text-black text-4xl leading-snug">
                                        The General Assembly
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-16 text-left text-black space-y-4 text-2xl leading-loose font-light">
                                        <p>The General Assembly is the highest decision-making body of the Asociación Civil. It is composed of all members and meets at least once per year to:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Review and approve the Annual Report and Financial Statements.</li>
                                            <li>Discuss the strategic direction and priorities of the school.</li>
                                            <li>Vote on amendments to the statutes or key institutional matters.</li>
                                            <li>Elect the Board of Directors every three years.</li>
                                        </ul>
                                        <p className="pt-4"><strong>Why it matters:</strong><br />The General Assembly gives families and community members a direct voice in the school's future. It ensures that TGS remains a transparent, community-owned project rather than a privately held enterprise.</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="board-directors" className="border-b-2 border-black">
                                    <AccordionTrigger className="relative text-left font-medium hover:no-underline !items-center [&>svg]:absolute [&>svg]:right-0 text-black [&>svg]:text-black text-4xl leading-snug">
                                        The Board of Directors
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-16 text-left text-black space-y-4 text-2xl leading-loose font-light">
                                        <p>The Board of Directors (Comisión Directiva) is elected by the General Assembly to serve a three-year term. It provides oversight, strategic direction, and ensures that the school operates in full alignment with its mission and legal obligations.</p>
                                        <p>The Board's responsibilities include:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Overseeing the financial health and sustainability of the school.</li>
                                            <li>Approving strategic plans, budgets, and major projects.</li>
                                            <li>Supporting and supervising the Co-Heads of School in policy and leadership matters.</li>
                                            <li>Representing the Asociación Civil in legal and institutional contexts.</li>
                                        </ul>
                                        <p className="pt-4"><strong>Why it matters:</strong><br />The Board guarantees ethical governance and long-term continuity. It connects the community's vision to the school's day-to-day leadership, ensuring that decisions reflect both purpose and prudence.</p>
                                        <p className="pt-4">A full overview of the Board's role and operating protocols can be found in the Board Manual 2025.</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <DevBadge name="how-governance-faq" />
            </section>

            <section className="relative">
                <Gallery6WithText
                    heading="Our School Board"
                    showDemo={false}
                    showNavigation={false}
                    backgroundColor="#D39885"
                    textColor="white"
                    items={[
                        {
                            id: "board-1",
                            title: "Bruno Varela",
                            role: "President of the Board",
                            url: "#",
                            image: "/assets/1_ourschool/3-governance/board_assets/bruno.jpg",
                        },
                        {
                            id: "board-2",
                            title: "Laure de La Baume",
                            role: "Board Secretary",
                            url: "#",
                            image: "/assets/1_ourschool/3-governance/board_assets/laure.jpg",
                        },
                        {
                            id: "board-3",
                            title: "Carolina Pontelli",
                            role: "Board Treasurer",
                            url: "#",
                            image: "/assets/1_ourschool/3-governance/board_assets/carolina.jpg",
                        },
                    ]}
                />
                <DevBadge name="gallery6-board" />
            </section>

            <MembershipGov />

            <CommitmentGov />

            <Footer />
        </>
    )
}
