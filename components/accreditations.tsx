import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import DevBadge from './dev-badge'
import { Button } from '@/components/ui/button'

export default async function Accreditations() {
    const t = await getTranslations('HomePage.accreditations')

    const accreditations = [
        {
            key: 'anep',
            name: t('anep.name'),
            logo: '/assets/0_mainpage/acreditations_ANEP_alpha.png',
            description: t('anep.description')
        },
        {
            key: 'neasc',
            name: t('neasc.name'),
            logo: '/assets/0_mainpage/acreditations_alpha_svg.svg',
            description: t('neasc.description')
        }
    ]

    return (
        <section className="relative bg-terracotta pt-16 md:pt-32 pb-32" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 75% 100%, 0 92%)' }}>
            <div className="mx-auto max-w-6xl px-6">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-0.5 bg-white/40 mx-auto mt-4" />
                </div>

                {/* Cards */}
                <div className="space-y-12">
                    {accreditations.map((acc) => (
                        <div
                            key={acc.key}
                            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
                        >
                            {/* Logo Container */}
                            <div className="flex-shrink-0">
                                <div className="w-52 h-52 md:w-56 md:h-56 bg-[#E8C4B8] rounded-2xl flex items-center justify-center p-10">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={acc.logo}
                                            alt={`${acc.name} Accreditation`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-light text-white mb-3 tracking-wide">
                                    {acc.name}
                                </h3>
                                <p className="text-white/90 text-lg leading-relaxed max-w-xl">
                                    {acc.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 flex justify-center">
                    <Button variant="terracotta" size="lg" asChild>
                        <Link href="/accreditation">
                            {t('learnMore')}
                        </Link>
                    </Button>
                </div>
            </div>
            <DevBadge name="accreditations" />
        </section>
    )
}
