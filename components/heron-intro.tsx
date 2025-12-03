import Image from 'next/image'
import DevBadge from './dev-badge'

export default function HeronIntro() {
    return (
        <section className="relative bg-terracotta pb-32">
            <div className="@container mx-auto max-w-7xl px-6 pt-12">
                <div className="mx-auto max-w-4xl text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Student Journalism Without Ceilings</h2>
                    <p className="text-white text-lg md:text-xl">At The Garzón School, we believe there should be no ceiling to what young people can achieve. That philosophy drives The Heron — our student-led newspaper, launched in 2023 — where learners don<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>t just parrot existing stories, they make them. From exclusive interviews with Nobel Prize winners and world record holders to conversations with globally renowned artists and pop icons, our students prove that age is no barrier to excellence, access, or impact. Here, journalism is more than a subject — it<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>s a platform for voice, agency, originality and world-class storytelling.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto grid max-w-sm gap-6 md:mt-8">
                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] rounded-lg">
                            <Image
                                src="/assets/5-co-curricular/2-theheron/IMG_8619.JPG"
                                alt="The Heron student journalism"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] rounded-lg">
                            <Image
                                src="/assets/5-co-curricular/2-theheron/DSC_49924.jpg"
                                alt="The Heron student journalism"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] rounded-lg">
                            <Image
                                src="/assets/5-co-curricular/2-theheron/IMG_82774.jpg"
                                alt="The Heron student journalism"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
                <p className="text-white text-lg md:text-xl text-center mt-12">Scroll down to find the latest edition of The Heron, featuring original reporting, interviews, and student perspectives.</p>
            </div>
            <DevBadge name="heron-intro" />
        </section>
    )
}
