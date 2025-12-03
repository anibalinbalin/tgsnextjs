import DevBadge from './dev-badge'

export default function NeascBanner() {
    return (
        <div className="relative bg-white">
            <div className="relative pt-12 md:pt-20">
                <img
                    src="/assets/3-learning/5-accreditation/_28202529_RosanBoshPrevios_1.jpg"
                    alt="NEASC Accreditation"
                    className="w-full h-[300px] md:h-[400px] object-cover object-center"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 mt-12 md:mt-20">
                    <div className="text-center text-white px-6 max-w-4xl">
                        <blockquote className="text-2xl md:text-4xl font-light leading-relaxed">
                            "The strength of The Garzón School<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>s mission and the unity among its members are key factors in supporting its continued progress."
                        </blockquote>
                        <p className="mt-6 text-lg md:text-xl font-medium">
                            June 2025 NEASC report
                        </p>
                    </div>
                </div>
            </div>
            <DevBadge name="neasc-banner" />
        </div>
    )
}
