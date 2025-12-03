import Image from 'next/image'
import DevBadge from './dev-badge'

const images = [
    { src: '/assets/4-campus/2-nature/DJI_0592+3.jpg', alt: 'Aerial view of nature at TGS 1' },
    { src: '/assets/4-campus/2-nature/DJI_0593+4.jpg', alt: 'Aerial view of nature at TGS 2' },
    { src: '/assets/4-campus/2-nature/DJI_0593+6.jpg', alt: 'Aerial view of nature at TGS 3' },
]

export default function NatureThreeImages() {
    return (
        <section id="nature-three-images" className="relative w-full">
            <DevBadge name="nature-three-images" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 md:gap-6 md:p-6">
                {images.map((image, index) => (
                    <div key={index} className="relative aspect-[4/3]">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
