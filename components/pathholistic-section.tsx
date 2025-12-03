import Image from 'next/image'
import DevBadge from './dev-badge'

export default function PathholisticSection() {
    return (
        <section className="relative grid grid-cols-1 md:grid-cols-2">
            <div className="bg-[#8EB096] py-12 md:py-20 px-6 flex items-center">
                <div className="max-w-xl ml-auto mr-8">
                    <div className="text-black space-y-6 text-2xl leading-relaxed font-light">
                        <p>
                            We regard Co-Curricular Clubs as vital in the holistic development of our students. Research has time and again evidenced that learners' gains, from socialisation and team skills, all the way through to stress management and improved mental health.
                        </p>
                        <p>
                            Co-Curricular Clubs give every child the opportunity to build self-confidence by honing a talent. The variety we offer gives every child endless possibilities to uncover skills and hobbies that can last a lifetime.
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative min-h-[400px] md:min-h-0">
                <Image
                    src="/assets/5-co-curricular/1-pathways/_DSC1960.jpg"
                    alt="Co-curricular activities"
                    fill
                    className="object-cover"
                />
            </div>
            <DevBadge name="pathholistic-section" />
        </section>
    )
}
