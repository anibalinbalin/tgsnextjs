import Image from 'next/image'
import { Button } from '@/components/ui/button'
import DevBadge from './dev-badge'

export default function TransFinalSection() {
    return (
        <section className="relative h-[50rem] overflow-hidden">
            <Image
                src="/assets/3-learning/3-translanguaging/TGS-92.JPG"
                alt="Fall in love with learning"
                fill
                className="object-cover"
                priority={false}
            />
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10 @container mx-auto max-w-5xl px-6 h-full flex items-center justify-end">
                <div className="text-right space-y-8">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl text-balance text-white font-medium">Fall in love<br />with learning.</h2>
                    <p className="text-white text-xl">Apply to join The Garzón School!</p>
                    <div className="flex justify-end">
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-terracotta hover:bg-terracotta/90 text-white border-terracotta"
                        >
                            Apply
                        </Button>
                    </div>
                </div>
            </div>
            <DevBadge name="trans-final-section" />
        </section>
    )
}
