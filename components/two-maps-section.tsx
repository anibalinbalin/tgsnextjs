import Image from 'next/image'
import DevBadge from './dev-badge'

export default function TwoMapsSection() {
    return (
        <section id="two-maps-section" className="relative w-full">
            <DevBadge name="two-maps-section" />
            <Image
                src="/assets/4-campus/1-learning/two_maps.jpg"
                alt="Two maps showing The Garzón School location"
                width={1920}
                height={1080}
                className="w-full h-auto"
            />
        </section>
    )
}
