import Image from 'next/image'
import { Button } from '@/components/ui/button'

// Accreditation data
const accreditations = [
    {
        name: 'ANEP',
        logo: '/assets/0_mainpage/acreditations_ANEP_alpha.png',
        description: 'The Garzón School is a fully authorized educational institution under Uruguay\'s Administración Nacional de Educación Pública (ANEP), offering a bilingual program that meets and exceeds national standards across all grade levels.'
    },
    {
        name: 'NEASC',
        logo: '/assets/0_mainpage/acreditations_alpha_svg.svg',
        description: 'In 2025, The Garzón School achieved Eligibility for Accreditation from the New England Association of Schools and Colleges (NEASC) — one of the world\'s most respected international accreditation bodies.'
    }
]

// Option A: Horizontal Editorial Layout
function OptionA() {
    return (
        <section className="bg-[#D39885] py-20">
            <div className="mx-auto max-w-6xl px-6">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                        Recognised Excellence
                    </h2>
                    <div className="w-24 h-0.5 bg-white/40 mx-auto mt-4" />
                </div>

                {/* Cards */}
                <div className="space-y-8">
                    {accreditations.map((acc, idx) => (
                        <div
                            key={acc.name}
                            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
                        >
                            {/* Logo Container */}
                            <div className={`flex-shrink-0 ${idx === 1 ? 'md:order-2' : ''}`}>
                                <div className="w-40 h-40 md:w-48 md:h-48 bg-white rounded-2xl shadow-xl flex items-center justify-center p-6">
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
                            <div className={`text-center md:text-left ${idx === 1 ? 'md:order-1 md:text-right' : ''}`}>
                                <h3 className="text-3xl font-light text-white mb-3 tracking-wide">
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
                    <Button variant="terracotta" size="lg">
                        Find out more about our accreditation
                    </Button>
                </div>
            </div>
        </section>
    )
}

// Option B: Vertical Refined Layout
function OptionB() {
    return (
        <section className="bg-[#D39885] py-20">
            <div className="mx-auto max-w-6xl px-6">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                        Recognised Excellence
                    </h2>
                    <div className="w-24 h-0.5 bg-white/40 mx-auto mt-4" />
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                    {accreditations.map((acc) => (
                        <div
                            key={acc.name}
                            className="flex flex-col items-center text-center"
                        >
                            {/* Logo Container */}
                            <div className="w-36 h-36 bg-white rounded-2xl shadow-xl flex items-center justify-center p-5 mb-8">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={acc.logo}
                                        alt={`${acc.name} Accreditation`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide">
                                {acc.name}
                            </h3>
                            <p className="text-white/90 text-base md:text-lg leading-relaxed">
                                {acc.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 flex justify-center">
                    <Button variant="terracotta" size="lg">
                        Find out more about our accreditation
                    </Button>
                </div>
            </div>
        </section>
    )
}

// Option C1: Text Below Cards (with descriptions)
function OptionC1() {
    return (
        <section className="bg-[#D39885] py-20">
            <div className="mx-auto max-w-6xl px-6">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                        Recognised Excellence
                    </h2>
                    <div className="w-24 h-0.5 bg-white/40 mx-auto mt-4" />
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                    {accreditations.map((acc) => (
                        <div key={acc.name} className="flex flex-col items-center text-center">
                            {/* Logo Container - lighter terracotta */}
                            <div className="w-52 h-52 md:w-64 md:h-64 bg-[#E8C4B8] rounded-2xl flex items-center justify-center p-10">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={acc.logo}
                                        alt={`${acc.name} Accreditation`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Name */}
                            <h3 className="text-2xl font-light text-white mt-6 tracking-wide">
                                {acc.name}
                            </h3>

                            {/* Description */}
                            <p className="text-white/90 text-base leading-relaxed mt-3 max-w-md">
                                {acc.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 flex justify-center">
                    <Button variant="terracotta" size="lg">
                        Learn more
                    </Button>
                </div>
            </div>
        </section>
    )
}

// Option C2: Side-by-Side (logo left, text right)
function OptionC2() {
    return (
        <section className="bg-[#D39885] py-20">
            <div className="mx-auto max-w-6xl px-6">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                        Recognised Excellence
                    </h2>
                    <div className="w-24 h-0.5 bg-white/40 mx-auto mt-4" />
                </div>

                {/* Cards */}
                <div className="space-y-12">
                    {accreditations.map((acc) => (
                        <div
                            key={acc.name}
                            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
                        >
                            {/* Logo Container - lighter terracotta */}
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
                    <Button variant="terracotta" size="lg">
                        Learn more
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default function TestAccreditations() {
    return (
        <main className="min-h-screen bg-gray-100">
            {/* Page Header */}
            <div className="bg-white py-8 border-b">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-3xl font-light text-gray-900">
                        Accreditations Section — Design Options
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Comparing layouts with descriptions. Scroll to see both options.
                    </p>
                </div>
            </div>

            {/* Option C1 */}
            <div className="py-4 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6 mb-4">
                    <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                        Option C1: Text Below Cards
                    </span>
                </div>
                <OptionC1 />
            </div>

            {/* Divider */}
            <div className="h-16 bg-gray-100" />

            {/* Option C2 */}
            <div className="py-4 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6 mb-4">
                    <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                        Option C2: Side-by-Side
                    </span>
                </div>
                <OptionC2 />
            </div>

            {/* Footer spacing */}
            <div className="h-16 bg-gray-100" />
        </main>
    )
}
