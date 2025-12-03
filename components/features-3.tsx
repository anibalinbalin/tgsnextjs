export default function Features() {
    return (
        <section
            className="relative py-16 md:py-32 overflow-hidden"
            style={{
                backgroundImage: 'url(/assets/0_mainpage/4089b3bd-e246-4799-aab2-e86569f2acec/%C2%A9EleazarCuadros.%282025%29_RosanBosh_5.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="@container relative z-10 mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl text-balance text-white font-medium">Fall in love with learning.</h2>
                </div>
            </div>
        </section>
    )
}
