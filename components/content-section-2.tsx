import DevBadge from './dev-badge'

export default function ContentSection2() {
    return (
        <section className="relative py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-4xl space-y-6 text-justify">
                    <h2 className="text-balance text-center text-heading-empowering">
                        Explore, Connect, Belong
                    </h2>
                    <p className="text-body-intro">
                        On our wild 38-hectare campus, education comes alive through exploration, connection, and a deep sense of belonging. Rooted in diversity and inclusion, we inspire students to grow with purpose, take risks, tackle challenges head-on, and lead with compassion to create real change.
                    </p>
                </div>
            </div>
            <DevBadge name="content-section-2" />
        </section>
    )
}
