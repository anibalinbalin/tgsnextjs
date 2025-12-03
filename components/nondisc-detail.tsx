import DevBadge from './dev-badge'

export default function NondiscDetail() {
    return (
        <section className="relative py-12 md:py-20" style={{ backgroundColor: '#D39885' }}>
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
                    <h2 className="text-white text-4xl leading-snug font-medium">Non-Discrimination Statement</h2>
                    <p className="text-white text-2xl leading-loose font-light">The Asociación Civil The Garzón School admits students of any race, colour and national or ethnic origin.</p>
                </div>
            </div>
            <DevBadge name="nondisc-detail" />
        </section>
    )
}
