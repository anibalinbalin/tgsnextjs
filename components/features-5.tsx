import Image from 'next/image'
import DevBadge from './dev-badge'
import { Button } from '@/components/ui/button'

export default function FeaturesSection() {
    return (
        <section className="relative bg-[#D39885] pt-16 md:pt-32 pb-32" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 75% 100%, 0 85%)' }}>
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-stretch gap-12 md:grid-cols-2 md:gap-12">
                    <div className="relative rounded-lg border border-white/50 p-6 h-full">
                        <div className="aspect-76/59 relative rounded-lg">
                            <Image
                                src="/assets/0_mainpage/acreditations_ANEP_alpha.png"
                                alt="ANEP Accreditation"
                                fill
                                className="rounded-lg object-contain"
                            />
                        </div>
                        <div className="mt-6 text-white">
                            <h3 className="text-2xl font-bold mb-3">ANEP</h3>
                            <p className="text-base leading-relaxed">
                                The Garzón School is a fully authorized educational institution under Uruguay's Administración Nacional de Educación Pública (ANEP), offering a bilingual program that meets and exceeds national standards across all grade levels.
                            </p>
                        </div>
                    </div>
                    <div className="relative rounded-lg border border-white/50 p-6 h-full">
                        <div className="aspect-76/59 relative rounded-lg">
                            <Image
                                src="/assets/0_mainpage/acreditations_alpha_svg.svg"
                                alt="Accreditation"
                                fill
                                className="rounded-lg object-contain scale-[0.8]"
                            />
                        </div>
                        <div className="mt-6 text-white">
                            <h3 className="text-2xl font-bold mb-3">NEASC</h3>
                            <p className="text-base leading-relaxed">
                                In 2025, The Garzón School achieved Eligibility for Accreditation from the New England Association of Schools and Colleges (NEASC) — one of the world's most respected international accreditation bodies.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex justify-center">
                    <Button
                        variant="outline"
                        size="lg"
                        className="bg-white/90 hover:bg-white text-[#D39885] border-white/50"
                    >
                        Find out more about our accreditation
                    </Button>
                </div>
            </div>
            <DevBadge name="features-5" />
        </section>
    )
}
