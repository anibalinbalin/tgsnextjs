import Image from 'next/image'
import DevBadge from '@/components/dev-badge'

export default function NatureImageSection() {
    return (
        <div className="relative bg-white">
            <Image
                src="/assets/4-campus/2-nature/Screenshot2023-01-27at12.26.36.png"
                alt="Nature at The Garzón School"
                width={1920}
                height={1080}
                className="w-full h-auto"
            />
            <DevBadge name="nature-image-section" />
        </div>
    )
}
