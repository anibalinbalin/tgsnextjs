import DevBadge from './dev-badge'

export default function SafePartnerDetail() {
    return (
        <section className="relative py-12 md:py-20 bg-[#D39885]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-4xl space-y-6 text-justify">
                    <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">Partnerships that protect.</h2>
                    <p className="text-2xl leading-relaxed font-light text-white">Far from operating in isolation, the Safeguarding Team is central to our pastoral mission, working closely with educators, families, and external partners to provide guidance, support, and intervention when needed. At The Garzón School, safeguarding is not just a responsibility—it<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>s a promise to our students and their families.</p>
                </div>
            </div>
            <DevBadge name="safe-partner-detail" />
        </section>
    )
}
