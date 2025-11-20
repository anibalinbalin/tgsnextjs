import Image from 'next/image'
import { Button } from '@/components/ui/button'
import DevBadge from './dev-badge'

export default function FallInLove() {
    return (
        <section className="relative h-[50rem] overflow-hidden">
            <Image
                src="/assets/0_mainpage/fall_in_love.JPG"
                alt="Fall in love with learning"
                fill
                className="object-cover"
                priority={false}
            />
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10 @container mx-auto max-w-5xl px-6 h-full flex items-center justify-end">
                <div className="text-right space-y-8">
                    <h2 className="text-balance text-white font-medium" style={{ fontSize: '99px', lineHeight: '99px' }}>Fall in love<br />with learning.</h2>
                    <p className="text-white text-xl">Apply to join The Garzón School!</p>
                    <div className="flex justify-end">
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-[#D39885] hover:bg-[#C28775] text-white border-[#D39885]"
                        >
                            Apply
                        </Button>
                    </div>
                </div>
            </div>
            <DevBadge name="fall-in-love" />
        </section>
    )
}
