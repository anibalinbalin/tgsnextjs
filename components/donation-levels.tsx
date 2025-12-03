import Image from 'next/image'
import DevBadge from './dev-badge'

export default function DonationLevels() {
    return (
        <section className="relative bg-terracotta pb-32" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 75% 100%, 0 85%)' }}>
            <div className="@container mx-auto max-w-7xl px-6 pt-12">
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto grid max-w-sm gap-6 md:mt-8">
                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] rounded-lg">
                            <Image
                                src="/assets/7-donate/EleazarCuadrosRosanBoshPrevios_33.jpg"
                                alt="Students at The Garzón School"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] rounded-lg">
                            <Image
                                src="/assets/7-donate/2025_RosanBoshPrevios_13.jpg.webp"
                                alt="Learning at The Garzón School"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] rounded-lg">
                            <Image
                                src="/assets/7-donate/EleazarCuadros_RosanBosh_3.jpg"
                                alt="Community at The Garzón School"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <DevBadge name="donation-levels" />
        </section>
    )
}
