import Image from 'next/image'
import { Button } from '@/components/ui/button'
import DevBadge from './dev-badge'
import Link from 'next/link'

export default function HowtojoinFinal() {
    return (
        <section className="relative h-[50rem] overflow-hidden">
            <Image
                src="/assets/2_admissions/1-joinus/_DSC1935.jpg"
                alt="Children at The Garzón School"
                fill
                className="object-cover"
                priority={false}
            />
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10 @container mx-auto max-w-5xl px-6 h-full flex items-center justify-center">
                <div className="text-center space-y-8">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl text-balance text-white font-medium">Read parent testimonials.</h2>
                    <div className="flex justify-center">
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="bg-terracotta hover:bg-terracotta/90 text-white border-terracotta"
                        >
                            <Link href="/testimonials">Parent Testimonials</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <DevBadge name="howtojoin-final" />
        </section>
    )
}
