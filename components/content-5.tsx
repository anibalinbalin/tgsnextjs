import DevBadge from './dev-badge'

export default function ContentSection() {
    return (
        <section className="relative py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-4xl space-y-6 text-justify">
                    <h2 className="text-balance text-center text-heading-empowering">
                        Empowering Changemakers
                    </h2>
                    <p className="text-body-intro">
                        Welcome to The Garzón School: a bold, transformative learning community where ethics, innovation, and a deep connection to nature empower students to lead with purpose. Through joyful learning, wellbeing, and research-driven teaching, we inspire young people to act with integrity and make a difference — starting today.
                    </p>
                </div>
            </div>
            <DevBadge name="content-5" />
        </section>
    )
}
