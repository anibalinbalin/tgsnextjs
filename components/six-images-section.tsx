import Image from 'next/image'
import DevBadge from './dev-badge'

const images = [
    { src: '/assets/4-campus/1-learning/DJI_0592+3.jpg', alt: 'Aerial view of The Garzón School 1' },
    { src: '/assets/4-campus/1-learning/DJI_0592+4.jpg', alt: 'Aerial view of The Garzón School 2' },
    { src: '/assets/4-campus/1-learning/DJI_0593+5.jpg', alt: 'Aerial view of The Garzón School 3' },
    { src: '/assets/4-campus/1-learning/DJI_0593+6.jpg', alt: 'Aerial view of The Garzón School 4' },
    { src: '/assets/4-campus/1-learning/IMG_5515.jpg', alt: 'The Garzón School campus' },
    { src: '/assets/4-campus/1-learning/Screenshot+2022-08-21+at+18.41.10.png', alt: 'The Garzón School overview' },
]

export default function SixImagesSection() {
    return (
        <section id="six-images-section" className="relative w-full">
            <DevBadge name="six-images-section" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 md:gap-6 md:p-6">
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
