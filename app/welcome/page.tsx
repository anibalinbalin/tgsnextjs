import React from 'react'
import Link from 'next/link'
import { HeroHeader } from '@/components/header'
import DevBadge from '@/components/dev-badge'
import FooterSection from '@/components/footer'

export default function WelcomePage() {
    return (
        <>
            <div className="relative h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/1_ourschool/0_welcome/IMG_9439.jpg)' }}>
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="relative z-10">
                    <HeroHeader />
                    <main>
                    <section>
                        <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                    {/* h1 removed as requested */}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                </div>
                <DevBadge name="welcome-hero" />
            </div>

            {/* Content Section */}
            <section className="relative py-16 md:py-32 bg-white">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="mx-auto max-w-4xl space-y-6 text-justify">
                        <h2 className="text-balance text-left text-4xl leading-snug font-medium text-[#C65D3B]">
                            Welcome to The Garzón School!
                        </h2>
                        <p className="text-2xl leading-relaxed font-light">
                            From our world-stage campus on Uruguay's famous golden coast, The Garzón School is proud to provide an education tailored to the needs and abilities of each individual learner. Small class sizes, with streamed lessons for Literacy and Mathematics, guarantee unparalleled individual attention for our learners. Our team strives to design <span className="font-bold underline" style={{ textDecorationColor: '#C65D3B' }}>joyful learning experiences</span>, underpinned by a magical school environment that buzzes with inquiry, collaboration and discovery.
                        </p>
                        <p className="text-2xl leading-relaxed font-light">
                            Set across 38 hectares of rolling countryside, woodland, and freshwater lakes, our <Link href="/learningvillage" className="font-bold" style={{ color: '#C65D3B' }}>purpose-built campus</Link> is a living classroom like no other. Designed to inspire creativity, agency, and a connection to the natural world, every space — from our light-filled studios to our open-air learning decks — has been thoughtfully crafted to spark curiosity and support deep, meaningful learning. Children are free to roam, explore, and engage with their surroundings in ways that cultivate confidence, resilience, and a sense of wonder.
                        </p>
                        <p className="text-2xl leading-relaxed font-light">
                            With our world changing at a rapid rate, we believe that agile thought, strong communication and advanced problem-solving are key to the leadership of the future. This is why our <span className="font-bold underline" style={{ textDecorationColor: '#C65D3B' }}>bespoke research-based curriculum</span>, designed and directed by our multidisciplinary team of world-class educators, focuses on developing competencies that place our learners on the path to success in life and, ultimately, to making a meaningful contribution to society.
                        </p>
                        <p className="text-2xl leading-relaxed font-light">
                            Our strong focus on <span className="font-bold underline" style={{ textDecorationColor: '#C65D3B' }}>wellbeing</span>, ethics and social-emotional learning (SEL) creates a 'home from home' in which children can blossom at their own pace, feeling supported and championed as they forge their own paths. We encourage expressions of individuality, and view the growth of each learner holistically. The success of this approach is tied to the robust school-family relationships we nurture, ensuring a two-way dialogue is maintained that is unwaveringly student-centred.
                        </p>
                        <p className="text-2xl leading-relaxed font-light">
                            Since opening doors in 2022, we have been inspired by the extent to which The Garzón School's mission has resonated with schools, educators and thought leaders in Uruguay and around the world. Indeed, it is what drew us to lead this one-of-a-kind project. We believe that TGS is more than a school; it is an <span className="font-bold underline" style={{ textDecorationColor: '#C65D3B' }}>educational movement</span> for the region. As we continue to grow and build, we will never cease to challenge, create and innovate.
                        </p>
                        <p className="text-2xl leading-relaxed font-light">
                            We encourage you to <span className="font-bold underline" style={{ textDecorationColor: '#C65D3B' }}>visit us</span> so you can experience first-hand everything that makes The Garzón School such an engaging and wondrous learning environment for children.
                        </p>
                        <div className="mt-12">
                            <img
                                src="/assets/1_ourschool/0_welcome/signatures.png"
                                alt="Signatures of Sam Irving and Leona Dauphin, Co-Heads of School"
                                className="w-full max-w-xl mx-auto"
                            />
                        </div>
                    </div>
                </div>
                <DevBadge name="content-welcome" />
            </section>

            <FooterSection />
        </>
    )
}
