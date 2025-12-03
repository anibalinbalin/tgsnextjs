import DevBadge from './dev-badge'

export default function TuitionDetail() {
    return (
        <section className="relative py-12 md:py-20" style={{ backgroundColor: '#D39885' }}>
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <p className="text-white text-2xl leading-loose font-light">Annual tuition is typically paid in full by January of the academic year in which the child will start school, with the option for instalment payments available upon prior agreement with the school office.</p>
                </div>
            </div>
            <DevBadge name="tuition-detail" />
        </section>
    )
}
