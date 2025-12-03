"use client"

import DevBadge from './dev-badge'
import { Button } from './ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Apos = () => <span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>&apos;</span>

const faqItems = [
    { id: "step1", title: "1. Register Interest", content: <>Let us know that you<Apos />re keen to explore your child(ren)<Apos />s admission, either through our website or directly to our Admissions Officer, Jacques (jacques@thegarzonschool.edu.uy).</> },
    { id: "step2", title: "2. Preliminary Information", content: <>Jacques will guide you through the next step of the process, during which we will ask for more detailed information regarding your family<Apos />s educational objectives and needs.</> },
    { id: "step3", title: "3. Virtual Appointment", content: <>At this stage you will meet online with our Co-Heads of School to find out more about our School<Apos />s unique proposition. You will also be able to ask and address those lingering questions.</> },
    { id: "step4", title: "4. School Tour", content: <>You will be invited to see the School in action, when possible during a regular school day. It is usually recommended that prospective students (especially those of a younger age) do not visit us until a firm commitment to joining has been made.</> },
    { id: "step5", title: "5. Conditional Offer", content: <>We will make an offer, subject to the prospective family<Apos />s timely submission of essential documentation, application fee, and a successful Family Appointment (next step).</> },
    { id: "step6", title: "6. Family Appointment", content: <>Your child(ren) will be invited in to meet their prospective teachers and engage in some fun learning activities alongside our wonderful Educational Psychologist, Catalina.</> },
    { id: "step7", title: "7. Unconditional Offer", content: <>Once the School has received all the necessary payments and paperwork, your child<Apos />s place in the School is locked in. At this point, it<Apos />s perfectly normal to start counting down the days!</> },
]

export default function FaqHowtojoin() {
    return (
        <section className="relative py-12 md:py-20 bg-white">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    <div className="flex flex-col items-start">
                        <h2 className="text-3xl md:text-4xl font-light text-[#D39885] mb-8 md:pt-4">How to Join</h2>
                        <p className="text-2xl leading-relaxed font-light text-[#D39885] mb-8">Our admissions process is carefully designed to ensure a perfect match.</p>
                        <Button asChild className="bg-[#D39885] hover:bg-[#c08775] text-white">
                            <a href="#">Register Interest</a>
                        </Button>
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
            <DevBadge name="faq-howtojoin" />
        </section>
    )
}
