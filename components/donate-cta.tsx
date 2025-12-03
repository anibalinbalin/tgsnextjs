import Image from 'next/image'
import { Button } from '@/components/ui/button'
import DevBadge from './dev-badge'

export default function DonateCta() {
    return (
        <section className="relative h-[50rem] overflow-hidden">
            <Image
                src="/assets/7-donate/EleazarCuadros.RosanBoshPrevios_54.jpg"
                alt="Students at The Garzón School"
                fill
                className="object-cover"
                priority={false}
            />
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10 @container mx-auto max-w-5xl px-6 h-full flex items-center justify-center">
                <div className="text-center space-y-8">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl text-balance text-white font-medium">Ready to take the leap?</h2>
                    <div className="flex justify-center">
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="bg-terracotta hover:bg-terracotta/90 text-white border-terracotta"
                        >
                            <a href="mailto:jacques@thegarzonschool.edu.uy?subject=Prospective%20Donation">
                                Become a TGS Donor
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
            <DevBadge name="donate-cta" />
        </section>
    )
}
