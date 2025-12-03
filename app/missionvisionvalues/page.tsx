'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { HeroHeader } from '@/components/header'
import DevBadge from '@/components/dev-badge'
import Footer from '@/components/footer'
import IDEASValues from '@/components/ideas-values'
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function MissionVisionValuesPage() {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>()
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    useEffect(() => {
        if (!carouselApi) return

        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev())
            setCanScrollNext(carouselApi.canScrollNext())
        }

        updateSelection()
        carouselApi.on("select", updateSelection)
        return () => {
            carouselApi.off("select", updateSelection)
        }
    }, [carouselApi])

    const carouselItems = [
        {
            text: "We empower changemakers with authenticity, integrity, and purpose, inspired by nature and grounded in real-world learning.",
            label: "Our Mission"
        },
        {
            text: "We will be a transformative education movement for the region.",
            label: "Our Vision"
        }
    ]

    const valuesItems = [
        {
            id: "innovation",
            title: "Innovation",
            content: "We emphasise creative problem-solving and forward-thinking, grounded in research, to prepare students to drive purposeful change. Fostering curiosity, agility, and a willingness to challenge conventional ideas equips learners to navigate complexity, seize opportunities, and create meaningful impact in their communities and beyond."
        },
        {
            id: "diversity",
            title: "Diversity",
            content: "We celebrate diverse perspectives and foster an inclusive environment that values every individual's unique background, abilities, and contributions. Our commitment to authenticity extends to embracing socioeconomic and learning diversity, ensuring that all members of our community feel respected, supported, and empowered to thrive."
        },
        {
            id: "ethics",
            title: "Ethics",
            content: "At the heart of our mission is the cultivation of integrity, where students learn to make responsible choices and act with honesty and respect. By fostering empathy, accountability, and a commitment to doing what is right, we guide students to understand the impact of their decisions on themselves, others, and the world around them."
        },
        {
            id: "agency",
            title: "Agency",
            content: "Empowering students to take ownership of their learning and actions is central to developing purpose and confidence as changemakers. We encourage all learners to set meaningful goals, make informed decisions, and embrace challenges with autonomy, advocating for themselves and others as they shape their futures with purpose."
        },
        {
            id: "service",
            title: "Service",
            content: "Real-world learning and impact are central to our mission. Service connects students with their communities, fostering empathy, responsibility, and purpose. Through collaborative projects, we learn the value of contributing to something greater than ourselves and gain the skills to make a meaningful difference both locally and globally."
        }
    ]

    return (
        <>
            <div className="relative h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/1_ourschool/1_missionvisionvalues/DSC_0215.JPG)' }}>
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="relative z-10">
                    <HeroHeader />
                    <main>
                        <section className="h-[70vh] flex items-center">
                            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block w-full">
                                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                    <h1 className="max-w-2xl font-medium text-white text-5xl md:text-6xl lg:text-7xl">
                                        Empowering<br />changemakers.
                                    </h1>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
                <DevBadge name="mvv-hero" />
            </div>

            {/* Carousel Section */}
            <section className="relative py-16 md:py-32 bg-white">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="relative">
                        <Carousel setApi={setCarouselApi} className="w-full">
                            <CarouselContent>
                                {carouselItems.map((item, index) => (
                                    <CarouselItem key={index}>
                                        <div className="flex flex-col items-center justify-center min-h-[300px] px-4 md:px-12 text-center">
                                            <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 max-w-4xl leading-relaxed">
                                                {item.text}
                                            </p>
                                            <p className="text-lg md:text-xl font-medium text-black">
                                                {item.label}
                                            </p>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                        {/* Navigation Buttons */}
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full text-white hover:opacity-90"
                            style={{ backgroundColor: '#D39885' }}
                            onClick={() => carouselApi?.scrollPrev()}
                            disabled={!canScrollPrev}
                        >
                            <ChevronLeft className="h-4 w-4" />
                            <span className="sr-only">Previous slide</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full text-white hover:opacity-90"
                            style={{ backgroundColor: '#D39885' }}
                            onClick={() => carouselApi?.scrollNext()}
                            disabled={!canScrollNext}
                        >
                            <ChevronRight className="h-4 w-4" />
                            <span className="sr-only">Next slide</span>
                        </Button>
                    </div>
                </div>
                <DevBadge name="mvv-carousel" />
            </section>

            {/* Values Accordion Section */}
            <section className="relative py-16 md:py-32" style={{ backgroundColor: '#D39885' }}>
                <div className="mx-auto max-w-5xl px-6">
                    <div className="mx-auto max-w-4xl space-y-6">
                        <h2 className="text-balance text-center text-white flex items-center justify-center text-4xl leading-snug font-medium">
                            Our Values
                        </h2>
                        <p className="text-white text-justify text-2xl leading-loose font-light">
                            Every journey of change begins with an idea—a spark of curiosity, a moment of inspiration, or the recognition of a challenge that demands action. At The Garzón School, IDEAS (Innovation, Diversity, Ethics, Agency, and Service) form the essential framework that drives our mission to empower changemakers, shaping not just what we do but how we do it—fostering a culture of creativity, inclusivity, integrity, and purpose that prepares learners to make meaningful impacts in their communities and beyond.
                        </p>

                        <div className="pt-8">
                            <Accordion type="single" collapsible className="w-full">
                                {valuesItems.map((item) => (
                                    <AccordionItem key={item.id} value={item.id} className="border-white/40 border-b-2">
                                        <AccordionTrigger className="relative !justify-center text-center text-white font-medium hover:no-underline !items-center [&>svg]:absolute [&>svg]:right-0 [&>svg]:text-white text-4xl leading-snug">
                                            {item.title}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white pb-16 text-2xl leading-loose font-light">
                                            {item.content}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
                <DevBadge name="mvv-values" />
            </section>

            <IDEASValues />

            {/* Image Section */}
            <section className="relative w-full">
                <div className="relative w-full h-[60vh] md:h-[70vh]">
                    <Image
                        src="/assets/1_ourschool/1_missionvisionvalues/IMG_7646.JPG"
                        alt="The Garzón School"
                        fill
                        className="object-cover"
                    />
                </div>
                <DevBadge name="mvv-image" />
            </section>

            {/* IDEAS Values Detail Section */}
            <section className="relative py-12 md:py-20" style={{ backgroundColor: '#D39885' }}>
                <div className="mx-auto max-w-5xl px-6">
                    <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-justify">
                        <p className="text-white text-2xl leading-loose font-light">Innovation fuels creative problem-solving. Diversity broadens perspectives and builds empathy. Ethics ensures decisions are made with integrity. Agency empowers ownership and intentionality. Service connects learning with actions that create change. Together, these values form the backbone of our mission, ensuring changemakers emerge equipped to lead with authenticity, integrity, and purpose.</p>
                    </div>
                </div>
                <DevBadge name="mvv-ideas-detail" />
            </section>

            {/* Fall in Love Section */}
            <section className="relative w-full">
                <div className="relative w-full h-[60vh] md:h-[70vh]">
                    <Image
                        src="/assets/0_mainpage/fall_in_love.JPG"
                        alt="The Garzón School Community"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 z-0" />
                    <div className="relative z-10 h-full flex items-center justify-center">
                        <div className="mx-auto max-w-4xl px-6">
                            <p className="text-center text-white text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">With IDEAS at the heart of everything we do, we nurture a community where students are inspired to see possibilities, embrace challenges, and create a better future for themselves and the world.</p>
                        </div>
                    </div>
                </div>
                <DevBadge name="mvv-fall-in-love" />
            </section>

            <Footer />
        </>
    )
}
