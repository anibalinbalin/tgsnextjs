import Image from 'next/image'
import DevBadge from './dev-badge'

export default function IDEASValues() {
    const icons = [
        { src: '/assets/ourschool/1_missionvisionvalues/icons/chain.png', alt: 'Chain' },
        { src: '/assets/ourschool/1_missionvisionvalues/icons/community.png', alt: 'Community' },
        { src: '/assets/ourschool/1_missionvisionvalues/icons/diversity.png', alt: 'Diversity' },
        { src: '/assets/ourschool/1_missionvisionvalues/icons/equality.png', alt: 'Equality' },
        { src: '/assets/ourschool/1_missionvisionvalues/icons/rocket.png', alt: 'Rocket' }
    ]

    return (
        <section className="relative py-12 md:py-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-justify">
                    <div className="flex justify-center items-center gap-6 md:gap-8 mb-12">
                        {icons.map((icon, index) => (
                            <div key={index} className="relative h-32 w-32">
                                <Image
                                    src={icon.src}
                                    alt={icon.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-body-intro">IDEAS represents the core values that permeate every aspect of our school culture. These values shape how we think, learn, and engage with the world. They provide the mindset and tools that allow us to transform ideas into meaningful action, fostering a connection between purpose and impact.</p>
                </div>
            </div>
            <DevBadge name="ideas-values" />
        </section>
    )
}
