import DevBadge from './dev-badge'

export default function LearnersToLeaders() {
    return (
        <section className="relative py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-4xl space-y-6 text-justify">
                    <h2 className="text-balance text-center text-heading-empowering">From Learners to Leaders</h2>
                    <p className="text-body-intro">The Garzón School goes beyond education—it's a way of being. We shape thoughtful individuals who build strong relationships, take ownership of their actions, and contribute to their communities. Grounded in joy, integrity, and connection, we empower learners to shape the world on their terms.</p>
                </div>
            </div>
            <DevBadge name="learners-to-leaders" />
        </section>
    )
}
