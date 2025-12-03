import Image from 'next/image'
import DevBadge from './dev-badge'

export default function FallinloveContent5() {
    return (
        <section className="relative py-12 md:py-20">
            <Image
                src="/assets/3-learning/0-curriculum/EleazarCuadros_RosanBoshPrevios_49.jpg"
                alt="Learning at The Garzón School"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-[#D39885]/80" />
            <div className="relative z-10 mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-4xl space-y-6 text-justify">
                    <p className="text-2xl leading-relaxed font-light text-white">Our reporting aims to feed-forward, providing students and their families with well-defined areas for further development as well as actionable next steps to ensure progression. We nurture proactive and trust-based relationships with families, meaning that much of our educators<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span> reporting is direct, effective and less formal. We also prepare formal written reports for each student at the culmination of each term, offering families valuable snapshots of their child(ren)<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>s development throughout the year.</p>
                </div>
            </div>
            <DevBadge name="fallinlove-content5" />
        </section>
    )
}
