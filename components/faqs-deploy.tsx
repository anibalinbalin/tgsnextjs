import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import DevBadge from '@/components/dev-badge'

const Apos = () => <span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>&apos;</span>

export default function FaqsDeploy() {
    const faqItems = [
        {
            id: "entry-exams",
            title: "Does TGS have entry examinations?",
            content: <>Our school is founded on the belief that an individual<Apos />s potential for success extends far beyond performance on standardised tests. That<Apos />s why our admissions process considers the unique qualities and experiences that make up each child. When determining the <Apos />best fit,<Apos /> we evaluate academic, artistic, athletic, and community achievements that showcase exceptional potential to thrive at TGS. Additionally, we value families with a demonstrated, longstanding interest in education.</>
        },
        {
            id: "tuition-fee",
            title: "What is included in the Tuition Fee?",
            content: <>Our Tuition Fee covers all curricular activities and learning resources, including books, stationery, and iPads or MacBooks. It also includes compulsory curricular outings, associated transport, and campus maintenance. However, the cost of school lunches and Co-Curricular Clubs is not included in the Tuition Fee.</>
        },
        {
            id: "secondary-school",
            title: "When will TGS be opening secondary school?",
            content: <>We are excited to be opening 7th and 8th Grade at TGS in March 2025. As we continue to grow organically with our oldest cohort, we look forward to celebrating our first 12th Grade TGS graduates in 2029!</>
        },
        {
            id: "scholarships",
            title: "Does TGS offer Scholarships and/or Bursaries?",
            content: <>Currently, 10% of our student body attends The Garzón School on partial or full bursaries, made possible through long-term private donations to the TGS Endowment Fund. We remain deeply committed to growing the Fund as part of our mission to promote broader access to a life-changing TGS education.</>
        },
        {
            id: "sibling-discounts",
            title: "Do you offer sibling discounts on the Tuition Fee?",
            content: <>We are pleased to offer tuition fee discounts for families with multiple children attending The Garzón School. A 10% discount is applied to tuition fees for the second child, 15% for the third child, and 20% for the fourth child and beyond. This initiative reflects our commitment to supporting families and making a TGS education more accessible for siblings.</>
        },
        {
            id: "academic-calendar",
            title: "Does TGS operate on a northern (September–June) or southern (March–December) academic calendar?",
            content: <>The Garzón School operates on a southern hemisphere academic year, running from February to December. We start the academic year earlier than most Uruguayan schools, allowing us to evenly distribute terms while offering a longer winter break, which is especially appreciated by our families and staff with northern hemisphere roots. This approach ensures a balanced academic calendar that meets the needs of our diverse community. You can see the current year<Apos />s calendar by navigating to "Student Life" → "Calendar & Term Dates" on this website.</>
        },
        {
            id: "grade-placement",
            title: "We are moving from a school with a September-June academic calendar; how will TGS decide upon grade placement?",
            content: <>Several families have successfully transitioned from northern hemisphere schools to join TGS. This process typically involves a midyear entry point in August, with students placed in the cohort they have recently completed. This approach allows learners to acclimate to their new surroundings and adjust linguistically and socially before advancing to the next grade level the following February.</>
        }
    ]

    return (
        <section className="relative py-16 md:py-32 bg-[#D39885]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-4xl space-y-6">
                    <p className="text-left text-white text-2xl leading-loose font-light">
                        Have questions about The Garzón School? You<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>re not alone! Our FAQs page is here to provide quick and clear answers to the most common queries from prospective and current families. We<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>ve got you covered. If you don<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>t find the information you<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>re looking for, feel free to contact us directly—we<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>re here to help!
                    </p>
                    <div className="pt-8">
                        <Accordion type="single" collapsible className="w-full">
                            {faqItems.map((item) => (
                                <AccordionItem key={item.id} value={item.id} className="border-b-2 border-white">
                                    <AccordionTrigger className="relative text-left font-medium hover:no-underline !items-center [&>svg]:absolute [&>svg]:right-0 text-white [&>svg]:text-white text-4xl leading-snug">
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-16 text-left text-white text-2xl leading-loose font-light">
                                        {item.content}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Contact Section */}
                    <div className="pt-12 text-center">
                        <p className="text-xl md:text-2xl font-medium text-white">
                            Still can<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>t find what you<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>re looking for?
                        </p>
                        <Button
                            asChild
                            variant="terracotta"
                            size="lg"
                            className="mt-6"
                        >
                            <a href="mailto:admissions@thegarzonschool.edu.uy?subject=Admissions">
                                Drop our Admissions Officer a line
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
            <DevBadge name="faqs-deploy" />
        </section>
    )
}
