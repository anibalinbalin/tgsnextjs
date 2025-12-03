import Image from 'next/image'
import DevBadge from './dev-badge'

export default function BannerLearning() {
    return (
        <section className="relative w-full">
            <div className="relative w-full h-[60vh] md:h-[70vh]">
                <Image
                    src="/assets/3-learning/0-curriculum/_DSC3866q25.JPG"
                    alt="Learning at The Garzón School"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="mx-auto max-w-4xl px-6">
                        <p className="text-center text-white text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">'Learning at The Garzón School is a meaningful journey of mutually expansive interaction between our whole selves and our environment.'</p>
                        <p className="text-center text-white text-xl md:text-2xl font-light mt-6">— TGS Definition of Learning</p>
                    </div>
                </div>
            </div>
            <DevBadge name="banner-learning" />
        </section>
    )
}
