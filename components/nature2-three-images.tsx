import Image from 'next/image'
import DevBadge from './dev-badge'

const images = [
    { src: '/assets/4-campus/2-nature/_DSC0470.JPG', alt: 'Children in nature at TGS 1' },
    { src: '/assets/4-campus/2-nature/IMG_9200.JPG', alt: 'Children in nature at TGS 2' },
    { src: '/assets/4-campus/2-nature/IMG_9234.JPG', alt: 'Children in nature at TGS 3' },
]

export default function Nature2ThreeImages() {
    return (
        <section id="nature2-three-images" className="relative w-full">
            <DevBadge name="nature2-three-images" />
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
