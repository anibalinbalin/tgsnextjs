import Image from 'next/image'
import DevBadge from './dev-badge'

export default function AnepAcreSection() {
    return (
        <section className="relative py-12 md:py-20 bg-white">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start">
                    {/* Circular image */}
                    <div className="flex flex-col items-center">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 bg-white">
                            <Image
                                src="/assets/0_mainpage/acreditations_ANEP_alpha.png"
                                alt="ANEP Accreditation"
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                    </div>

                    {/* Text content */}
                    <div>
                        <h2 className="text-2xl md:text-4xl text-black font-light leading-relaxed">
                            <span className="border-b-2 border-[#D39885]">Accreditation & Standards of Excellence</span>
                        </h2>
                        <p className="mt-6 text-lg md:text-xl text-black/80 font-light leading-relaxed">
                            The Garzón School is a fully authorized educational institution under Uruguay<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>s <span className="font-bold">Administración Nacional de Educación Pública (ANEP)</span>, offering a bilingual program that meets and exceeds national standards across all grade levels. This authorization reflects our commitment to rigorous academic expectations, ethical governance, and compliance with all national education and safety regulations.
                        </p>
                    </div>
                </div>
            </div>
            <DevBadge name="anep-acre-section" />
        </section>
    )
}
