import Image from 'next/image'
import DevBadge from './dev-badge'
import { Button } from './ui/button'

export default function Timeline2026() {
    return (
        <section className="relative bg-[#D39885] py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">
                    {/* Left: Image */}
                    <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                        <Image
                            src="/assets/2_admissions/1-joinus/DSC_0059.jpg"
                            alt="Children playing at The Garzón School"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="text-white">
                        <h2 className="text-3xl md:text-4xl font-medium mb-6">Timeline for 2026 Entry</h2>
                        <p className="text-2xl leading-relaxed font-light mb-8">
                            We aim to offer a clear and structured admissions timeline to help families plan ahead, and to ensure we select students from a broad and diverse pool of applicants.
                        </p>

                        {/* Deadline box */}
                        <div className="bg-white/90 rounded-2xl p-6 text-[#D39885] text-center mb-8">
                            <p className="text-xl md:text-2xl font-medium">Main Admissions Deadline:</p>
                            <p className="text-2xl md:text-3xl font-medium">30 September 2025</p>
                        </div>

                        <p className="text-2xl leading-relaxed font-light mb-6">
                            Families who submit a complete application (including financial aid or scholarship requests) by this date will receive an admissions decision by <strong>30 October 2025</strong>.
                        </p>

                        {/* Subsections with underlined headings */}
                        <div className="mb-6">
                            <h3 className="text-lg font-medium underline mb-2">Rolling Admissions Thereafter</h3>
                            <p className="text-2xl leading-relaxed font-light">
                                After this point, applications are reviewed on a rolling basis, subject to space availability. We welcome inquiries year-round and will do our best to support late applications where possible.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-medium underline mb-2">Relocating Families</h3>
                            <p className="text-2xl leading-relaxed font-light">
                                We know that many of our families are moving across countries and continents. If you<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>re relocating to Uruguay or considering a mid-year move, we encourage you to reach out early. We<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>re happy to support your transition and discuss availability outside the main admissions cycle.
                            </p>
                        </div>

                        <Button asChild className="bg-white/90 hover:bg-white text-[#D39885] border-white/50">
                            <a href="mailto:admissions@thegarzonschool.edu.uy?subject=Admissions">Apply Now</a>
                        </Button>
                    </div>
                </div>
            </div>
            <DevBadge name="timeline-2026" />
        </section>
    )
}
