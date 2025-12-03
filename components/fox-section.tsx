import Image from 'next/image'
import DevBadge from '@/components/dev-badge'

export default function FoxSection() {
    return (
        <div className="relative bg-white">
            <div className="relative">
                {/* Text overlay - positioned to the left */}
                <div className="absolute left-4 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 z-10 max-w-sm md:max-w-md bg-[#8EB096] p-6 md:p-8 rounded-md">
                    <p className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-snug">
                        TGS<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span> resident foxes remind us: learning is not confined to classrooms—it thrives in the heart of nature.
                    </p>
                </div>

                {/* Image - offset to the right */}
                <div className="ml-auto w-[85%] md:w-4/5">
                    <Image
                        src="/assets/4-campus/2-nature/_DSC0421.jpg"
                        alt="TGS resident fox in natural habitat"
                        width={1600}
                        height={1000}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
            <DevBadge name="fox-section" />
        </div>
    )
}
