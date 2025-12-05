import Image from 'next/image'
import Link from 'next/link'
import DevBadge from './dev-badge'

interface TestimonialCardProps {
    name: string
    quote: string
    imageSrc: string
    buttonText?: string
    href?: string
    subtitle?: string
    flipped?: boolean
    inverted?: boolean
    hideButton?: boolean
    textBlack?: boolean
}

export default function TestimonialCard({ name, quote, imageSrc, buttonText, href, subtitle, flipped, inverted, hideButton, textBlack }: TestimonialCardProps) {
    const bgColor = inverted ? 'bg-white' : 'bg-[#D39885]'
    const textColor = textBlack ? 'text-black' : (inverted ? 'text-[#D39885]' : 'text-white')
    const buttonClasses = inverted
        ? 'bg-[#D39885] text-white'
        : 'bg-white text-[#D39885]'
    const gridCols = flipped
        ? 'md:grid-cols-[1fr_auto]'
        : 'md:grid-cols-[auto_1fr]'

    return (
        <section className={`relative py-12 md:py-20 ${bgColor}`}>
            <div className="mx-auto max-w-6xl px-6">
                <div className={`grid grid-cols-1 ${gridCols} gap-8 md:gap-16 items-start`}>
                    {/* Circular image + subtitle */}
                    <div className={`flex flex-col items-center ${flipped ? 'md:order-2' : ''}`}>
                        <div className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 ${inverted ? 'bg-white' : 'bg-[#D39885]'}`}>
                            {imageSrc !== '/placeholder.svg' && (
                                <Image src={imageSrc} alt={name} fill className="object-cover" />
                            )}
                        </div>
                        {subtitle && (
                            <p className={`mt-6 text-xl font-medium ${textColor}`}>{subtitle}</p>
                        )}
                    </div>

                    {/* Quote + button */}
                    <div className={flipped ? 'md:order-1 md:text-right' : ''}>
                        <blockquote className={`text-4xl md:text-4xl ${textColor} font-light leading-relaxed`}>
                            "{quote}"
                        </blockquote>
                        {!hideButton && (
                            <Link href={href || '#'} className={`inline-block mt-8 ${buttonClasses} rounded-md px-6 py-3 text-base font-medium`}>
                                {buttonText || `Read ${name}'s full testimonial.`}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <DevBadge name={`testimonial-${name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}-card`} />
        </section>
    )
}
