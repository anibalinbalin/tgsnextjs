import Image from 'next/image'
import DevBadge from './dev-badge'

export default function BannertgsLearning() {
    return (
        <section className="relative w-full">
            <div className="relative w-full h-[60vh] md:h-[70vh]">
                <Image
                    src="/assets/3-learning/0-curriculum/_DSC2642.jpg"
                    alt="Learning at The Garzón School"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="mx-auto max-w-4xl px-6">
                        <p className="text-center text-white text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed"><span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>TGS takes a unique approach to education, following the child<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>s interests and curiosity, like breadcrumbs, and developing from there.<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span></p>
                        <p className="text-center text-white text-xl md:text-2xl font-light mt-6">— Aníbal, TGS Parent</p>
                    </div>
                </div>
            </div>
            <DevBadge name="bannertgs-learning" />
        </section>
    )
}
