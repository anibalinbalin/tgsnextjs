import Image from 'next/image'
import DevBadge from './dev-badge'

export default function NeascSection() {
    return (
        <section className="relative py-12 md:py-20 bg-white">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start">
                    {/* Circular image */}
                    <div className="flex flex-col items-center">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 bg-white">
                            <Image
                                src="/assets/0_mainpage/acreditations_alpha_svg.svg"
                                alt="NEASC Accreditation"
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                    </div>

                    {/* Text content */}
                    <div>
                        <h2 className="text-2xl md:text-4xl text-black font-light leading-relaxed">
                            <span className="border-b-2 border-[#D39885]">NEASC</span>
                        </h2>
                        <p className="mt-6 text-lg md:text-xl text-black/80 font-light leading-relaxed">
                            In 2025, The Garzón School achieved <span className="font-bold">Eligibility for Accreditation</span> from the <span className="font-bold">New England Association of Schools and Colleges (NEASC)</span> — one of the world<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>s most respected international accreditation bodies. Following our <span className="font-bold">Foundation Standards Visit</span> in June 2025, NEASC commended the school for its "clear and shared commitment to reimagine education in ways that are joyful, meaningful, and rooted in purpose." This milestone marks the successful completion of the first phase of NEASC<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>s <span className="font-bold">ACE Learning Pathway</span>, which recognizes schools that demonstrate the structures, leadership, and educational philosophy needed to deliver high-quality, future-ready learning.
                        </p>
                    </div>
                </div>
            </div>
            <DevBadge name="neasc-section" />
        </section>
    )
}
