import Image from 'next/image'
import DevBadge from './dev-badge'

export default function EntireLangStand() {
    return (
        <section className="relative w-full">
            <div className="relative w-full h-[60vh] md:h-[70vh]">
                <Image
                    src="/assets/3-learning/3-translanguaging/_DSC1935.jpg"
                    alt="Translanguaging at The Garzón School"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 z-0" />
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="mx-auto max-w-4xl px-6">
                        <p className="text-center text-white text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">"Translanguaging refers to both the discourse practices of bilinguals, as well as to pedagogical practices that use the <span className="bg-[#D39885] px-2">entire complex linguistic repertoire</span> of bilingual students flexibly in order to teach rigorous content and develop language practices for academic use."</p>
                        <p className="text-center text-white text-xl md:text-2xl font-light mt-6">— García, 2016</p>
                    </div>
                </div>
            </div>
            <DevBadge name="entire-lang-stand" />
        </section>
    )
}
