import Image from 'next/image'
import DevBadge from './dev-badge'

export default function ChildSafeguardingFeature() {
    return (
        <section
            className="relative py-16 md:py-24 bg-white"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 75% 100%, 0 85%)' }}
        >
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col items-center text-center">
                    <div className="relative w-full max-w-xl h-24 md:h-32 mb-8 md:mb-12">
                        <Image
                            src="/assets/1_ourschool/6-safeguarding/CSG_Logo.png"
                            alt="ChildSafeguarding.com"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <p className="text-2xl leading-relaxed font-light text-gray-700 max-w-4xl text-justify">
                        At The Garzón School, safeguarding is a shared responsibility embraced by every member of our community. All staff, whether in teaching or non-teaching roles, are required to undertake regular child safeguarding training through ChildSafeguarding.com, ensuring they are equipped to protect and support our students. This commitment goes beyond the annual police checks mandated by law in Uruguay, reflecting our dedication to maintaining the highest standards of care and vigilance.
                    </p>
                </div>
            </div>
            <DevBadge name="childsafeguarding-feature" />
        </section>
    )
}
